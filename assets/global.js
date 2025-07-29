// Initialize Shopline object if it doesn't exist
if (typeof window.Shopline === 'undefined') {
  window.Shopline = {};
}

// Translation utility
window.t = function t(path, hash) {
  function parsePathToArray(p) {
    if (typeof p !== 'string') {
      throw new TypeError('path must be string');
    }
    return p.replace(/\]/, '').split(/[.[]/);
  }
  const keys = parsePathToArray(path);
  const value = keys.reduce((prev, current) => {
    if (!prev) return undefined;
    return prev[current];
  }, window.__I18N__);

  const regExp = /\{\{([^{}]+)\}\}/g;
  if (!value) return path;

  // No hash, no substitution
  if (!hash) return value;

  return value.replace(regExp, (...args) => {
    if (args[1] !== null && args[1] !== undefined) {
      return hash[args[1]];
    }
    if (args[0] !== null && args[0] !== undefined) {
      return hash[args[0]];
    }
  });
};

// Fetch configuration helper
window.fetchConfig = function fetchConfig(type = 'json') {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: `application/${type}`,
    },
  };
};

// Custom element definition helper
window.defineCustomElement = function defineCustomElement(name, constructorCreator) {
  if (!customElements.get(name)) {
    const constructor = constructorCreator();
    customElements.define(name, constructor);
    window[constructor.name] = constructor;
  }
};

// Common utility functions
window.throttle = function throttle(fn, wait) {
  let timer = null;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, wait);
  };
};

window.debounce = function debounce(fn, wait) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
};

window.jsonParse = function jsonParse(val, normalValue) {
  try {
    const res = JSON.parse(val);
    return res;
  } catch {
    return normalValue;
  }
};

// Initialize Shopline utilities
window.Shopline.utils = window.Shopline.utils || {};

// Toast notification utility
window.Shopline.utils.toast = {
  open: function(options) {
    // Simple toast implementation
    const toast = document.createElement('div');
    toast.className = 'shopline-toast';
    toast.textContent = options.content || '';
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 12px 24px;
      border-radius: 4px;
      z-index: 9999;
      font-size: 14px;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, options.duration || 3000);
  }
};

// Initialize Shopline bind function
window.Shopline.bind = function (fn, scope) {
  return function (...arg) {
    return fn.apply(scope, arg);
  };
};

// Initialize Shopline addListener function
window.Shopline.addListener = function (target, eventName, callback) {
  target.addEventListener
    ? target.addEventListener(eventName, callback, false)
    : target.attachEvent(`on${eventName}`, callback);
};

// Check if we're in the theme editor
if (window.Shopline && window.Shopline.designMode) {
  console.log('Theme editor mode detected');
}

// Sticky Header Implementation
document.addEventListener('DOMContentLoaded', function() {
  const stickyHeader = document.querySelector('.header-group.sticky-header');
  
  if (!stickyHeader) return;
  
  // Get sticky settings from data attributes
  const isSticky = stickyHeader.dataset.sticky === 'true';
  const hideOnScroll = stickyHeader.dataset.hideOnScroll === 'true';
  const stickyBackground = stickyHeader.dataset.stickyBackground || '#ffffff';
  const isTransparent = stickyHeader.dataset.transparent === 'true';
  
  if (!isSticky) return;
  
  let lastScrollTop = 0;
  let isScrolling = false;
  
  // Create a placeholder to prevent content jump
  const placeholder = document.createElement('div');
  placeholder.style.display = 'none';
  stickyHeader.parentNode.insertBefore(placeholder, stickyHeader.nextSibling);
  
  // Add top padding to main content to prevent overlap (except index page with transparent header)
  const mainContent = document.getElementById('MainContent');
  const isIndexPage = document.body.classList.contains('template-index');
  
  if (mainContent && !(isTransparent && isIndexPage)) {
    const updateMainPadding = () => {
      const headerHeight = stickyHeader.offsetHeight;
      mainContent.style.paddingTop = headerHeight + 'px';
    };
    
    // Set initial padding
    updateMainPadding();
    
    // Update padding when window resizes
    window.addEventListener('resize', updateMainPadding);
  }
  
  // Initialize header as fixed from the start if sticky is enabled
  if (isSticky) {
    stickyHeader.classList.add('is-sticky');
    if (!isTransparent) {
      stickyHeader.style.backgroundColor = stickyBackground;
    }
  }

  const handleScroll = throttle(function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const headerHeight = stickyHeader.offsetHeight;
    
    // Add/remove shadow based on scroll position
    if (scrollTop > 1) {
      stickyHeader.classList.add('is-scrolled');
    } else {
      stickyHeader.classList.remove('is-scrolled');
    }
    
    // Handle transparency state changes on scroll
    if (isTransparent) {
      if (scrollTop > 1) {
        stickyHeader.classList.add('is-transparent--active');
      } else {
        stickyHeader.classList.remove('is-transparent--active');
      }
    }
    
    // Handle announcement bar hiding
    const announcementBar = stickyHeader.querySelector('.announcement-bar');
    if (announcementBar && !hideOnScroll) {
      const announcementHeight = announcementBar.offsetHeight;
      if (scrollTop > 50) {
        stickyHeader.style.transform = `translateY(-${announcementHeight}px)`;
        stickyHeader.classList.add('announcement-hidden');
      } else {
        stickyHeader.style.transform = '';
        stickyHeader.classList.remove('announcement-hidden');
      }
    }
    
    // Hide/show entire header on scroll direction (if enabled)
    if (hideOnScroll && scrollTop > headerHeight) {
      if (scrollTop > lastScrollTop && scrollTop > headerHeight * 2) {
        // Scrolling down
        stickyHeader.classList.add('is-hidden');
      } else {
        // Scrolling up
        stickyHeader.classList.remove('is-hidden');
      }
    }
    
    lastScrollTop = scrollTop;
  }, 16);
  
  // Throttle helper
  function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  window.addEventListener('scroll', handleScroll);
  
  // Add necessary CSS
  const style = document.createElement('style');
  style.textContent = `
    .header-group.sticky-header {
      position: relative;
      z-index: 50;
      transition: transform 0.3s ease-in-out, background-color 0.3s ease, box-shadow 0.3s ease;
    }
    
    .header-group[data-transparent="true"] {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      width: 100%;
    }
    
    .header-group[data-transparent="true"].sticky-header.is-sticky {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      width: 100%;
    }
    
    /* Ensure announcement bar keeps its own color */
    .header-group[data-transparent="true"] .announcement-bar {
      background-color: var(--announcement-bg-color) !important;
      opacity: 1 !important;
    }
    
    /* Transparent header on index page - overlay behavior */
    body.template-index .header-group[data-transparent="true"]:not(.is-transparent--active) {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      width: 100%;
    }
    
    .header-group.sticky-header.is-sticky {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
    }
    
    /* Add shadow only when scrolled */
    .header-group.sticky-header.is-scrolled {
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .header-group.sticky-header.is-hidden {
      transform: translateY(-100%);
    }
    
    
    .header-group.sticky-header.is-transparent--active .site-header {
      background-color: var(--sticky-header-background, #ffffff) !important;
      border-bottom: 1px solid #e5e7eb !important;
    }
    
    /* Transparent header link styling - only for index page */
    body.template-index .header-group[data-transparent="true"]:not(.is-transparent--active) .site-header a,
    body.template-index .header-group[data-transparent="true"]:not(.is-transparent--active) .site-header button,
    body.template-index .header-group[data-transparent="true"]:not(.is-transparent--active) .site-header h1 {
      color: #ffffff !important;
    }
    
    body.template-index .header-group[data-transparent="true"]:not(.is-transparent--active) .site-header a:hover,
    body.template-index .header-group[data-transparent="true"]:not(.is-transparent--active) .site-header button:hover {
      color: #ffffff !important;
      opacity: 0.8;
    }
    
    /* Keep dropdown menus with dark text on white background - only for index page */
    body.template-index .header-group[data-transparent="true"]:not(.is-transparent--active) .site-header .absolute a {
      color: #374151 !important;
    }
    
    body.template-index .header-group[data-transparent="true"]:not(.is-transparent--active) .site-header .absolute a:hover {
      color: var(--color-primary) !important;
      opacity: 1;
    }
    
  `;
  document.head.appendChild(style);
});
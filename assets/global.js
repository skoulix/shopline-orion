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
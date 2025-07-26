<template>
  <div class="sticky-header-container">
    <!-- Placeholder to prevent jump -->
    <div 
      v-if="sticky && isSticky" 
      class="header-placeholder"
      :style="{ height: placeholderHeight }"
    ></div>
    
    <!-- Actual header -->
    <div
      ref="headerWrapper"
      class="sticky-header-inner"
      :class="{
        'is-fixed': sticky && isSticky,
        'is-hidden': isHidden,
        'has-shadow': showShadow,
        'is-transparent': isTransparent && currentScrollTop === 0
      }"
      :style="headerStyles"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useThrottleFn } from '@vueuse/core'

const props = defineProps({
  hideOnScrollDown: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: true
  }
})

const headerWrapper = ref(null)
const isSticky = ref(false)
const isHidden = ref(false)
const showShadow = ref(false)
const isTransparent = ref(false)
const stickyBgColor = ref('#ffffff')
const currentScrollTop = ref(0)
const headerHeight = ref(0)
const placeholderHeight = computed(() => sticky.value ? `${headerHeight.value}px` : '0')

let lastScrollTop = 0

// Computed styles for the header
const headerStyles = computed(() => {
  const styles = {}
  
  if (sticky.value && isSticky.value) {
    // Fixed positioning when sticky
    styles.position = 'fixed'
    styles.top = '0'
    styles.left = '0'
    styles.right = '0'
    styles.zIndex = '40'
    
    // Handle transform for hide on scroll
    if (isHidden.value) {
      styles.transform = 'translateY(-100%)'
    } else {
      styles.transform = 'translateY(0)'
    }
  }
  
  // Background color logic
  if (isTransparent.value) {
    if (currentScrollTop.value === 0) {
      styles.backgroundColor = 'transparent'
    } else if (sticky.value && isSticky.value) {
      styles.backgroundColor = stickyBgColor.value
    }
  }
  
  // Always add transition for smooth animations
  styles.transition = 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)'
  
  return styles
})

// Function to update host element classes
const updateHostClasses = () => {
  const host = headerWrapper.value?.getRootNode()?.host
  if (!host) return
  
  // Add base wrapper class
  host.classList.add('sticky-header-wrapper')
  
  // Update inner header background
  const mainHeader = headerWrapper.value?.querySelector('.main-header')
  if (mainHeader && isTransparent.value) {
    if (currentScrollTop.value === 0) {
      mainHeader.style.backgroundColor = 'transparent'
      mainHeader.style.borderBottomColor = 'transparent'
    } else if (sticky.value && isSticky.value) {
      mainHeader.style.backgroundColor = stickyBgColor.value
      mainHeader.style.borderBottomColor = '#e5e7eb'
    }
  }
}

const handleScroll = useThrottleFn(() => {
  if (!sticky.value) {
    return
  }
  
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  currentScrollTop.value = scrollTop
  
  // Header becomes sticky immediately when scrolling
  isSticky.value = scrollTop > 0
  showShadow.value = scrollTop > 10
  
  // Determine if header should be hidden (only when scrolling down)
  if (hideOnScrollDown.value && isSticky.value) {
    const scrollDelta = scrollTop - lastScrollTop
    
    // Only hide/show if we've scrolled enough (5px threshold to avoid jitter)
    if (Math.abs(scrollDelta) > 5) {
      if (scrollDelta > 0 && scrollTop > headerHeight.value) {
        // Scrolling down & past header height
        isHidden.value = true
      } else if (scrollDelta < 0) {
        // Scrolling up - show header
        isHidden.value = false
      }
    }
  } else {
    // If hide on scroll is disabled, never hide
    isHidden.value = false
  }
  
  // Only update lastScrollTop if we've moved enough
  if (Math.abs(scrollTop - lastScrollTop) > 1) {
    lastScrollTop = scrollTop
  }
  
  // Update host element classes
  updateHostClasses()
}, 50)

// Store original prop values
const hideOnScrollDown = ref(props.hideOnScrollDown)
const sticky = ref(props.sticky)

// Function to measure header height
const measureHeaderHeight = () => {
  if (headerWrapper.value) {
    headerHeight.value = headerWrapper.value.offsetHeight || 80
  }
}

onMounted(() => {
  if (headerWrapper.value) {
    const host = headerWrapper.value.getRootNode().host
    if (host) {
      // Add base classes to host
      host.classList.add('sticky-header-wrapper')
      
      // Check if header has transparent class
      isTransparent.value = host.classList.contains('header-transparent')
      
      // Get props from the host element (custom element)
      const hideOnScrollDownAttr = host.getAttribute('data-hide-on-scroll-down')
      const stickyAttr = host.getAttribute('data-sticky')
      const stickyBgAttr = host.getAttribute('data-sticky-bg')
      
      if (hideOnScrollDownAttr !== null) {
        hideOnScrollDown.value = hideOnScrollDownAttr === 'true'
      }
      if (stickyAttr !== null) {
        sticky.value = stickyAttr === 'true'
      }
      if (stickyBgAttr !== null) {
        stickyBgColor.value = stickyBgAttr || '#ffffff'
      }
      
      // Measure header height after a delay to ensure it's rendered
      setTimeout(measureHeaderHeight, 100)
      
      // Also measure on window resize
      window.addEventListener('resize', measureHeaderHeight)
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Set initial state - ensure transparent headers start transparent
  currentScrollTop.value = window.pageYOffset || document.documentElement.scrollTop || 0
  
  // Set initial state
  updateHostClasses()
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', measureHeaderHeight)
})
</script>

<style>
:host {
  display: block;
  width: 100%;
}

.sticky-header-container {
  width: 100%;
}

.header-placeholder {
  width: 100%;
}

.sticky-header-inner {
  width: 100%;
  background-color: white;
}

.sticky-header-inner.is-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
}

.sticky-header-inner.has-shadow {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.sticky-header-inner.is-transparent {
  background-color: transparent;
}

.sticky-header-inner.is-transparent .main-header {
  background-color: transparent;
  border-color: transparent;
}
</style>
/**
 * Global Notification System for Orion Theme
 * Provides consistent toast notifications across the entire application
 */

// Default configuration
const defaultConfig = {
  duration: 3000, // Auto-dismiss after 3 seconds
  position: 'top-right', // top-right, top-left, bottom-right, bottom-left
  maxNotifications: 5, // Maximum number of notifications to show at once
  animation: {
    enter: 'translate-x-full', // Initial state (off-screen)
    enterActive: 'transition-all duration-300 transform', // Transition classes
    leave: 'translate-x-full', // Final state (off-screen)
  },
  styles: {
    base: 'fixed z-50 px-6 py-3 rounded-lg shadow-lg font-medium text-sm',
    success: 'bg-green-600 text-white',
    error: 'bg-red-600 text-white',
    warning: 'bg-yellow-600 text-white',
    info: 'bg-blue-600 text-white',
  }
}

// Global configuration (can be overridden)
let globalConfig = { ...defaultConfig }

// Track active notifications
let activeNotifications = []
let notificationId = 0

/**
 * Set global notification configuration
 * @param {Object} config - Configuration options to merge with defaults
 */
export function setNotificationConfig(config) {
  globalConfig = { ...globalConfig, ...config }
}

/**
 * Get current notification configuration
 * @returns {Object} Current configuration
 */
export function getNotificationConfig() {
  return { ...globalConfig }
}

/**
 * Get position classes based on configuration
 * @param {string} position - Position string (top-right, etc.)
 * @returns {Object} Position classes
 */
function getPositionClasses(position) {
  const positions = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  }
  
  return positions[position] || positions['top-right']
}

/**
 * Create and show a notification
 * @param {string} message - The message to display
 * @param {string} type - Notification type (success, error, warning, info)
 * @param {Object} options - Override options for this notification
 */
export function showNotification(message, type = 'info', options = {}) {
  const config = { ...globalConfig, ...options }
  const id = ++notificationId
  
  // Create notification element
  const notification = document.createElement('div')
  notification.id = `notification-${id}`
  notification.className = [
    config.styles.base,
    config.styles[type] || config.styles.info,
    config.animation.enterActive,
    config.animation.enter,
    getPositionClasses(config.position)
  ].join(' ')
  
  // Add message content
  if (typeof message === 'string') {
    notification.textContent = message
  } else if (message instanceof HTMLElement) {
    notification.appendChild(message)
  }
  
  // Add close button if enabled
  if (config.showCloseButton !== false) {
    const closeBtn = document.createElement('button')
    closeBtn.innerHTML = '×'
    closeBtn.className = 'ml-3 text-lg font-bold opacity-70 hover:opacity-100 transition-opacity'
    closeBtn.onclick = () => dismissNotification(id)
    notification.appendChild(closeBtn)
  }
  
  // Add to DOM
  document.body.appendChild(notification)
  
  // Track notification
  activeNotifications.push({
    id,
    element: notification,
    timer: null
  })
  
  // Limit number of notifications
  if (activeNotifications.length > config.maxNotifications) {
    const oldest = activeNotifications.shift()
    dismissNotification(oldest.id, false)
  }
  
  // Animate in
  requestAnimationFrame(() => {
    notification.classList.remove(config.animation.enter)
  })
  
  // Auto-dismiss
  if (config.duration > 0) {
    const notificationData = activeNotifications.find(n => n.id === id)
    if (notificationData) {
      notificationData.timer = setTimeout(() => {
        dismissNotification(id)
      }, config.duration)
    }
  }
  
  return id
}

/**
 * Dismiss a specific notification
 * @param {number} id - Notification ID to dismiss
 * @param {boolean} animate - Whether to animate the dismissal
 */
export function dismissNotification(id, animate = true) {
  const notificationIndex = activeNotifications.findIndex(n => n.id === id)
  if (notificationIndex === -1) return
  
  const notificationData = activeNotifications[notificationIndex]
  const { element, timer } = notificationData
  
  // Clear timer
  if (timer) {
    clearTimeout(timer)
  }
  
  if (animate) {
    // Animate out
    element.classList.add(globalConfig.animation.leave)
    setTimeout(() => {
      if (document.body.contains(element)) {
        document.body.removeChild(element)
      }
    }, 300)
  } else {
    // Remove immediately
    if (document.body.contains(element)) {
      document.body.removeChild(element)
    }
  }
  
  // Remove from tracking
  activeNotifications.splice(notificationIndex, 1)
}

/**
 * Dismiss all active notifications
 */
export function dismissAllNotifications() {
  activeNotifications.forEach(({ id }) => {
    dismissNotification(id, false)
  })
}

/**
 * Convenience methods for different notification types
 */
export function showSuccess(message, options = {}) {
  return showNotification(message, 'success', options)
}

export function showError(message, options = {}) {
  return showNotification(message, 'error', options)
}

export function showWarning(message, options = {}) {
  return showNotification(message, 'warning', options)
}

export function showInfo(message, options = {}) {
  return showNotification(message, 'info', options)
}

/**
 * Cart-specific notification helpers
 */
export function showCartSuccess(productTitle, quantity = 1) {
  const message = quantity === 1 
    ? `${productTitle} added to cart!`
    : `${quantity}x ${productTitle} added to cart!`
  return showSuccess(message)
}

export function showCartError(message = 'Failed to add item to cart. Please try again.') {
  return showError(message)
}

/**
 * Initialize global notification system
 * This can be called from main.js to set up global defaults
 */
export function initNotifications(config = {}) {
  // Apply any override config
  setNotificationConfig(config)
  
  // Make notifications available globally on window object
  window.OrionNotifications = {
    show: showNotification,
    success: showSuccess,
    error: showError,
    warning: showWarning,
    info: showInfo,
    cartSuccess: showCartSuccess,
    cartError: showCartError,
    dismiss: dismissNotification,
    dismissAll: dismissAllNotifications,
    config: {
      set: setNotificationConfig,
      get: getNotificationConfig
    }
  }
  
  return window.OrionNotifications
}

// Export default instance
export default {
  show: showNotification,
  success: showSuccess,
  error: showError,
  warning: showWarning,
  info: showInfo,
  cartSuccess: showCartSuccess,
  cartError: showCartError,
  dismiss: dismissNotification,
  dismissAll: dismissAllNotifications,
  config: {
    set: setNotificationConfig,
    get: getNotificationConfig
  },
  init: initNotifications
}
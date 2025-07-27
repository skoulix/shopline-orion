<template>
  <component
    :is="tag"
    :href="href"
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    :style="buttonStyles"
    @click="handleClick"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-3 h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <slot />
  </component>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'link'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'full', 'none'].includes(value)
  },
  // Global button settings can be passed as props
  buttonRadius: {
    type: [String, Number],
    default: null
  },
  primaryBg: {
    type: String,
    default: null
  },
  primaryBgHover: {
    type: String,
    default: null
  },
  primaryText: {
    type: String,
    default: null
  },
  secondaryBg: {
    type: String,
    default: null
  },
  secondaryBgHover: {
    type: String,
    default: null
  },
  secondaryText: {
    type: String,
    default: null
  },
  secondaryBorder: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['click'])

const isHovered = ref(false)
const tag = computed(() => props.href ? 'a' : 'button')

// Helper to get theme setting value
const getThemeSetting = (settingName, fallback = '') => {
  // Check if value is passed as prop first
  const propMapping = {
    'button_border_radius': props.buttonRadius,
    'button_primary_bg': props.primaryBg,
    'button_primary_bg_hover': props.primaryBgHover,
    'button_primary_text': props.primaryText,
    'button_secondary_bg': props.secondaryBg,
    'button_secondary_bg_hover': props.secondaryBgHover,
    'button_secondary_text': props.secondaryText,
    'button_secondary_border': props.secondaryBorder
  }
  
  if (propMapping[settingName]) {
    return propMapping[settingName]
  }
  
  // Try to get from Shopline settings
  const value = window.Shopline?.theme?.settings?.[settingName]
  if (value !== undefined && value !== null && value !== '') {
    return value
  }
  
  // Last resort: try CSS variable
  try {
    const cssVarName = '--' + settingName.replace(/_/g, '-')
    const cssValue = getComputedStyle(document.documentElement).getPropertyValue(cssVarName).trim()
    if (cssValue) return cssValue
  } catch (e) {
    // Ignore
  }
  
  return fallback
}

const buttonStyles = computed(() => {
  const styles = {}
  
  // Apply border radius
  if (props.rounded === 'full') {
    styles.borderRadius = '9999px'
  } else if (props.rounded === 'none') {
    styles.borderRadius = '0'
  } else if (props.buttonRadius !== null) {
    // Use the passed prop value
    styles.borderRadius = typeof props.buttonRadius === 'number' 
      ? `${props.buttonRadius}px` 
      : props.buttonRadius
  } else {
    // Get button radius from theme settings
    const radius = getThemeSetting('button_border_radius', '6')
    styles.borderRadius = typeof radius === 'number' || !isNaN(radius) ? `${radius}px` : radius
  }
  
  // Apply variant-specific colors
  if (props.variant === 'primary') {
    // Get colors from theme settings
    if (isHovered.value) {
      styles.backgroundColor = getThemeSetting('button_primary_bg_hover', '#b91c1c')
    } else {
      styles.backgroundColor = getThemeSetting('button_primary_bg', '#dc2626')
    }
    styles.color = getThemeSetting('button_primary_text', 'white')
  } else if (props.variant === 'secondary') {
    // Get colors from theme settings
    if (isHovered.value) {
      styles.backgroundColor = getThemeSetting('button_secondary_bg_hover', '#f9fafb')
    } else {
      styles.backgroundColor = getThemeSetting('button_secondary_bg', 'white')
    }
    styles.color = getThemeSetting('button_secondary_text', '#374151')
    styles.borderColor = getThemeSetting('button_secondary_border', '#d1d5db')
  } else if (props.variant === 'link') {
    // Link variant uses primary color for text
    if (isHovered.value) {
      styles.color = getThemeSetting('button_primary_bg_hover', '#b91c1c')
    } else {
      styles.color = getThemeSetting('button_primary_bg', '#dc2626')
    }
  }
  
  return styles
})

const buttonClasses = computed(() => {
  const classes = [
    'inline-flex items-center justify-center font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  ]

  // Width
  if (props.fullWidth) {
    classes.push('w-full')
  }

  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  }
  classes.push(sizeClasses[props.size])

  // Border radius is handled in buttonStyles computed property

  // Variant styles - use inline styles for CSS variables
  if (props.variant === 'primary') {
    classes.push(
      'border border-transparent',
      'shadow-sm'
    )
    // Colors will be handled by buttonStyles
  } else if (props.variant === 'secondary') {
    classes.push(
      'border',
      'shadow-sm'
    )
    // Colors will be handled by buttonStyles
  } else if (props.variant === 'outline') {
    classes.push(
      'bg-transparent',
      'hover:bg-gray-50',
      'text-gray-700',
      'border-2 border-gray-300',
      'hover:border-gray-400',
      'focus:ring-gray-500'
    )
  } else if (props.variant === 'ghost') {
    classes.push(
      'bg-transparent',
      'hover:bg-gray-100',
      'text-gray-700',
      'hover:text-gray-900',
      'focus:ring-gray-500'
    )
  } else if (props.variant === 'link') {
    classes.push(
      'bg-transparent',
      'underline',
      'hover:no-underline',
      'p-0',
      'focus:ring-0'
    )
  }

  return classes.join(' ')
})

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
/* Ensure the button respects the CSS variables */
button, a {
  text-decoration: none;
}

/* Inherit CSS variables from parent document for custom elements */
:host {
  --button-radius: inherit;
  --button-primary-bg: inherit;
  --button-primary-bg-hover: inherit;
  --button-primary-text: inherit;
  --button-secondary-bg: inherit;
  --button-secondary-bg-hover: inherit;
  --button-secondary-text: inherit;
  --button-secondary-border: inherit;
}
</style>
<template>
  <component
    :is="tag"
    :href="href"
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    @click="handleClick"
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
import { computed } from 'vue'

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
  }
})

const emit = defineEmits(['click'])

const tag = computed(() => props.href ? 'a' : 'button')

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

  // Border radius
  if (props.rounded === 'full') {
    classes.push('rounded-full')
  } else if (props.rounded === 'none') {
    classes.push('rounded-none')
  } else {
    classes.push('rounded-[var(--button-radius,6px)]')
  }

  // Variant styles
  if (props.variant === 'primary') {
    classes.push(
      'bg-[var(--button-primary-bg,#dc2626)]',
      'hover:bg-[var(--button-primary-bg-hover,#b91c1c)]',
      'text-[var(--button-primary-text,white)]',
      'border border-transparent',
      'shadow-sm',
      'focus:ring-[var(--button-primary-bg,#dc2626)]'
    )
  } else if (props.variant === 'secondary') {
    classes.push(
      'bg-[var(--button-secondary-bg,white)]',
      'hover:bg-[var(--button-secondary-bg-hover,#f9fafb)]',
      'text-[var(--button-secondary-text,#374151)]',
      'border border-[var(--button-secondary-border,#d1d5db)]',
      'shadow-sm',
      'focus:ring-[var(--button-primary-bg,#dc2626)]'
    )
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
      'text-[var(--button-primary-bg,#dc2626)]',
      'hover:text-[var(--button-primary-bg-hover,#b91c1c)]',
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
</style>
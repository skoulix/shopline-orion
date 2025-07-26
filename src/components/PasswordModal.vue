<template>
  <div class="password-modal">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const handleToggleClick = (event) => {
  event.preventDefault()
  if (isOpen.value) {
    closeModal()
  } else {
    openModal()
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeModal()
  }
}

const handleOutsideClick = (event) => {
  const modal = document.querySelector('.password-content')
  const toggle = document.querySelector('.password-toggle')
  
  if (isOpen.value && modal && !modal.contains(event.target) && !toggle.contains(event.target)) {
    closeModal()
  }
}

onMounted(() => {
  // Add event listeners
  const toggle = document.querySelector('.password-toggle')
  if (toggle) {
    toggle.addEventListener('click', handleToggleClick)
  }

  // Handle escape key and outside clicks
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('click', handleOutsideClick)

  // Auto-show modal for password page
  setTimeout(() => {
    openModal()
  }, 500)
})

// Watch for modal state changes to apply styles
const updateModalStyles = () => {
  const content = document.querySelector('.password-content')
  if (content) {
    if (isOpen.value) {
      content.style.display = 'block'
      content.style.opacity = '1'
      content.style.transform = 'translateY(0)'
    } else {
      content.style.opacity = '0'
      content.style.transform = 'translateY(-20px)'
      setTimeout(() => {
        if (!isOpen.value) {
          content.style.display = 'none'
        }
      }, 300)
    }
  }
}

// Watch isOpen for changes
const watch = (fn) => {
  let oldValue = isOpen.value
  const interval = setInterval(() => {
    if (isOpen.value !== oldValue) {
      fn(isOpen.value, oldValue)
      oldValue = isOpen.value
    }
  }, 50)
  return () => clearInterval(interval)
}

onMounted(() => {
  watch(() => {
    updateModalStyles()
  })
})
</script>

<style scoped>
.password-modal {
  position: relative;
}

/* Smooth transitions for modal content */
:deep(.password-content) {
  transition: opacity 0.3s ease, transform 0.3s ease;
  display: none;
  opacity: 0;
  transform: translateY(-20px);
}

/* Show modal content when open */
:deep(.password-modal.is-open .password-content) {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

/* Toggle button styles */
:deep(.password-toggle) {
  cursor: pointer;
  transition: all 0.2s ease;
}

:deep(.password-toggle:hover) {
  transform: translateY(-1px);
}

/* Form input focus styles */
:deep(.password-form input:focus) {
  outline: none;
  ring: 2px;
  ring-color: #ef4444;
  border-color: #ef4444;
}

/* Button hover effects */
:deep(.password-form button:hover) {
  background-color: #dc2626;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  :deep(.password-content) {
    margin: 1rem;
    padding: 1.5rem;
  }
}
</style>
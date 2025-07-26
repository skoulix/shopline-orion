<template>
  <div class="slideshow-banner">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  autoRotate: {
    type: [String, Boolean],
    default: false
  },
  changeSlidesSpeed: {
    type: [String, Number],
    default: 5
  }
})

const currentSlide = ref(0)
const slides = ref([])
const slideInterval = ref(null)

const autoRotateEnabled = computed(() => {
  return props.autoRotate === true || props.autoRotate === 'true'
})

const slideSpeed = computed(() => {
  return parseInt(props.changeSlidesSpeed) * 1000 || 5000
})

const initializeSlideshow = () => {
  slides.value = Array.from(document.querySelectorAll('.slide'))
  
  if (slides.value.length <= 1) return
  
  // Add event listeners for navigation buttons
  const prevBtn = document.querySelector('.slideshow-prev')
  const nextBtn = document.querySelector('.slideshow-next')
  const indicators = document.querySelectorAll('.slide-indicator')
  
  if (prevBtn) {
    prevBtn.addEventListener('click', previousSlide)
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide)
  }
  
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index))
  })
  
  // Start auto rotation if enabled
  if (autoRotateEnabled.value) {
    startAutoRotation()
  }
}

const goToSlide = (index) => {
  if (index === currentSlide.value || !slides.value.length) return
  
  // Hide current slide
  slides.value[currentSlide.value]?.classList.remove('opacity-100')
  slides.value[currentSlide.value]?.classList.add('opacity-0')
  
  // Update indicator
  const currentIndicator = document.querySelector(`.slide-indicator[data-slide-index="${currentSlide.value}"]`)
  currentIndicator?.classList.remove('opacity-100')
  currentIndicator?.classList.add('opacity-50')
  
  // Show new slide
  currentSlide.value = index
  slides.value[currentSlide.value]?.classList.remove('opacity-0')
  slides.value[currentSlide.value]?.classList.add('opacity-100')
  
  // Update indicator
  const newIndicator = document.querySelector(`.slide-indicator[data-slide-index="${currentSlide.value}"]`)
  newIndicator?.classList.remove('opacity-50')
  newIndicator?.classList.add('opacity-100')
}

const nextSlide = () => {
  const nextIndex = (currentSlide.value + 1) % slides.value.length
  goToSlide(nextIndex)
}

const previousSlide = () => {
  const prevIndex = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
  goToSlide(prevIndex)
}

const startAutoRotation = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
  }
  
  slideInterval.value = setInterval(() => {
    nextSlide()
  }, slideSpeed.value)
}

const stopAutoRotation = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
    slideInterval.value = null
  }
}

// Pause auto rotation on hover
const handleMouseEnter = () => {
  if (autoRotateEnabled.value) {
    stopAutoRotation()
  }
}

const handleMouseLeave = () => {
  if (autoRotateEnabled.value) {
    startAutoRotation()
  }
}

onMounted(() => {
  // Wait for DOM to be ready
  setTimeout(initializeSlideshow, 100)
  
  // Add mouse event listeners for auto rotation pause
  const slideshowContainer = document.querySelector('.slideshow-wrapper')
  if (slideshowContainer) {
    slideshowContainer.addEventListener('mouseenter', handleMouseEnter)
    slideshowContainer.addEventListener('mouseleave', handleMouseLeave)
  }
})

onUnmounted(() => {
  stopAutoRotation()
  
  // Clean up event listeners
  const slideshowContainer = document.querySelector('.slideshow-wrapper')
  if (slideshowContainer) {
    slideshowContainer.removeEventListener('mouseenter', handleMouseEnter)
    slideshowContainer.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>

<style scoped>
.slideshow-banner {
  position: relative;
}

/* Ensure smooth transitions */
.slide {
  transition: opacity 1s ease-in-out;
}

/* Navigation button hover effects */
.slideshow-prev:hover,
.slideshow-next:hover {
  transform: translateY(-50%) scale(1.1);
}

.slide-indicator:hover {
  opacity: 0.8 !important;
}
</style>
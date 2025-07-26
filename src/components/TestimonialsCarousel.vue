<template>
  <div class="testimonials-carousel relative">
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
  },
  showNavigation: {
    type: [String, Boolean],
    default: true
  },
  showPagination: {
    type: [String, Boolean],
    default: true
  }
})

const currentSlide = ref(0)
const slides = ref([])
const slideInterval = ref(null)
const track = ref(null)

const autoRotateEnabled = computed(() => {
  return props.autoRotate === true || props.autoRotate === 'true'
})

const slideSpeed = computed(() => {
  return parseInt(props.changeSlidesSpeed) * 1000 || 5000
})

const initializeCarousel = () => {
  slides.value = Array.from(document.querySelectorAll('.testimonial-slide'))
  track.value = document.querySelector('.testimonials-track')
  
  if (slides.value.length <= 1) return
  
  // Add event listeners for navigation buttons
  const prevBtn = document.querySelector('.testimonials-prev')
  const nextBtn = document.querySelector('.testimonials-next')
  const indicators = document.querySelectorAll('.testimonial-indicator')
  
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
  if (index === currentSlide.value || !slides.value.length || !track.value) return
  
  // Update current slide
  currentSlide.value = index
  
  // Move track
  const slideWidth = slides.value[0].offsetWidth
  const offset = -slideWidth * currentSlide.value
  track.value.style.transform = `translateX(${offset}px)`
  
  // Update indicators
  const indicators = document.querySelectorAll('.testimonial-indicator')
  indicators.forEach((indicator, i) => {
    if (i === currentSlide.value) {
      indicator.classList.remove('bg-gray-300')
      indicator.classList.add('bg-red-600')
    } else {
      indicator.classList.remove('bg-red-600')
      indicator.classList.add('bg-gray-300')
    }
  })
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

// Handle touch events for mobile swiping
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next slide
      nextSlide()
    } else {
      // Swipe right - previous slide
      previousSlide()
    }
  }
}

onMounted(() => {
  // Wait for DOM to be ready
  setTimeout(initializeCarousel, 100)
  
  // Add mouse event listeners for auto rotation pause
  const carouselContainer = document.querySelector('.testimonials-wrapper')
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', handleMouseEnter)
    carouselContainer.addEventListener('mouseleave', handleMouseLeave)
    carouselContainer.addEventListener('touchstart', handleTouchStart)
    carouselContainer.addEventListener('touchend', handleTouchEnd)
  }
})

onUnmounted(() => {
  stopAutoRotation()
  
  // Clean up event listeners
  const carouselContainer = document.querySelector('.testimonials-wrapper')
  if (carouselContainer) {
    carouselContainer.removeEventListener('mouseenter', handleMouseEnter)
    carouselContainer.removeEventListener('mouseleave', handleMouseLeave)
    carouselContainer.removeEventListener('touchstart', handleTouchStart)
    carouselContainer.removeEventListener('touchend', handleTouchEnd)
  }
})
</script>

<style scoped>
.testimonials-carousel {
  position: relative;
}

/* Smooth transitions */
.testimonials-track {
  transition: transform 0.5s ease-in-out;
}

/* Navigation button hover effects */
.testimonials-prev:hover,
.testimonials-next:hover {
  transform: translateY(-50%) scale(1.05);
}

.testimonial-indicator:hover {
  opacity: 0.8;
}

/* Ensure proper layout for testimonial cards */
.testimonial-card {
  min-height: 250px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .testimonials-prev,
  .testimonials-next {
    display: none;
  }
}
</style>
<template>
  <div class="product-gallery">
    <!-- Main Image -->
    <div class="main-image-wrapper">
      <div 
        class="main-image aspect-square bg-gray-100 overflow-hidden relative group cursor-zoom-in"
        :style="{ borderRadius: 'var(--card-radius, 8px)' }"
        @click="openLightbox(activeImageIndex)"
        @mouseenter="showZoom = true"
        @mouseleave="showZoom = false"
        @mousemove="handleMouseMove"
      >
        <img 
          :src="activeImage.src"
          :alt="activeImage.alt"
          class="w-full h-full object-contain transition-opacity duration-300"
          :class="{ 'opacity-0': loading }"
          @load="loading = false"
        >
        
        <!-- Loading spinner -->
        <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        </div>

        <!-- Zoom indicator -->
        <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>

        <!-- Zoom lens -->
        <div 
          v-if="showZoom && !isMobile"
          class="zoom-lens"
          :style="lensStyle"
        ></div>
      </div>

      <!-- Zoom preview -->
      <div 
        v-if="showZoom && !isMobile"
        class="zoom-preview"
        :style="zoomStyle"
      ></div>
    </div>

    <!-- Thumbnail Navigation -->
    <div v-if="processedImages.length > 1" class="thumbnails-wrapper">
      <button
        v-if="processedImages.length > visibleThumbnails"
        @click="scrollThumbnails('prev')"
        :disabled="thumbnailOffset === 0"
        class="thumbnail-nav-btn prev"
        aria-label="Previous images"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="thumbnails-container" ref="thumbnailsContainer">
        <div 
          class="thumbnails-track"
          :style="{ transform: `translateX(-${thumbnailOffset * (thumbnailWidth + 8)}px)` }"
        >
          <button
            v-for="(image, index) in processedImages"
            :key="index"
            @click="setActiveImage(index)"
            class="thumbnail"
            :class="{ active: index === activeImageIndex }"
            :aria-label="`View image ${index + 1}`"
          >
            <img 
              :src="image.thumbnail || image.src"
              :alt="image.alt"
              class="w-full h-full object-contain"
            >
          </button>
        </div>
      </div>

      <button
        v-if="processedImages.length > visibleThumbnails"
        @click="scrollThumbnails('next')"
        :disabled="thumbnailOffset >= processedImages.length - visibleThumbnails"
        class="thumbnail-nav-btn next"
        aria-label="Next images"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Mobile Swiper Dots -->
    <div v-if="processedImages.length > 1 && isMobile" class="swiper-dots">
      <button
        v-for="(_, index) in processedImages"
        :key="index"
        @click="setActiveImage(index)"
        class="swiper-dot"
        :class="{ active: index === activeImageIndex }"
        :aria-label="`Go to image ${index + 1}`"
      ></button>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div 
        v-if="lightboxOpen"
        class="lightbox"
        @click="closeLightbox"
      >
        <button 
          @click="closeLightbox"
          class="lightbox-close"
          aria-label="Close lightbox"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <button
          v-if="processedImages.length > 1"
          @click.stop="navigateLightbox('prev')"
          class="lightbox-nav prev"
          aria-label="Previous image"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div class="lightbox-image-wrapper" @click.stop>
          <img 
            :src="activeImage.src"
            :alt="activeImage.alt"
            class="lightbox-image"
          >
        </div>

        <button
          v-if="processedImages.length > 1"
          @click.stop="navigateLightbox('next')"
          class="lightbox-nav next"
          aria-label="Next image"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div class="lightbox-counter">
          {{ activeImageIndex + 1 }} / {{ processedImages.length }}
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSwipe } from '@vueuse/core'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  productTitle: {
    type: String,
    default: ''
  },
  imageTransformWidth: {
    type: Number,
    default: 1200
  },
  thumbnailWidth: {
    type: Number,
    default: 120
  }
})

// State
const activeImageIndex = ref(0)
const loading = ref(false)
const lightboxOpen = ref(false)
const showZoom = ref(false)
const isMobile = ref(false)
const thumbnailOffset = ref(0)
const thumbnailsContainer = ref(null)

// Zoom state
const mouseX = ref(0)
const mouseY = ref(0)
const imageRect = ref({})

// Constants
const thumbnailWidth = 80
const visibleThumbnails = 4
const zoomLevel = 2

// Computed
const processedImages = computed(() => {
  return props.images.map(img => {
    // Handle both pre-processed images and raw Shopline image objects
    if (img.src) {
      return img
    }
    
    // Transform Shopline image object
    const baseUrl = img.url || img
    return {
      src: `${baseUrl}?width=${props.imageTransformWidth}`,
      thumbnail: `${baseUrl}?width=${props.thumbnailWidth}`,
      alt: img.alt || props.productTitle
    }
  })
})

const activeImage = computed(() => {
  return processedImages.value[activeImageIndex.value] || { src: '', alt: '' }
})

const lensStyle = computed(() => {
  const lensSize = 150
  return {
    width: `${lensSize}px`,
    height: `${lensSize}px`,
    left: `${mouseX.value - lensSize / 2}px`,
    top: `${mouseY.value - lensSize / 2}px`
  }
})

const zoomStyle = computed(() => {
  const previewSize = 400
  const bgPosX = (mouseX.value / imageRect.value.width) * 100
  const bgPosY = (mouseY.value / imageRect.value.height) * 100
  
  return {
    width: `${previewSize}px`,
    height: `${previewSize}px`,
    backgroundImage: `url(${activeImage.value.src})`,
    backgroundSize: `${imageRect.value.width * zoomLevel}px ${imageRect.value.height * zoomLevel}px`,
    backgroundPosition: `${bgPosX}% ${bgPosY}%`
  }
})

// Methods
const setActiveImage = (index) => {
  loading.value = true
  activeImageIndex.value = index
}

const scrollThumbnails = (direction) => {
  if (direction === 'prev') {
    thumbnailOffset.value = Math.max(0, thumbnailOffset.value - 1)
  } else {
    thumbnailOffset.value = Math.min(
      processedImages.value.length - visibleThumbnails,
      thumbnailOffset.value + 1
    )
  }
}

const openLightbox = (index) => {
  activeImageIndex.value = index
  lightboxOpen.value = true
  document.body.classList.add('overflow-hidden')
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

const navigateLightbox = (direction) => {
  if (direction === 'prev') {
    activeImageIndex.value = activeImageIndex.value > 0 
      ? activeImageIndex.value - 1 
      : processedImages.value.length - 1
  } else {
    activeImageIndex.value = activeImageIndex.value < processedImages.value.length - 1
      ? activeImageIndex.value + 1
      : 0
  }
}

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  imageRect.value = rect
  mouseX.value = e.clientX - rect.left
  mouseY.value = e.clientY - rect.top
}

// Mobile swipe support
const { lengthX } = useSwipe(
  thumbnailsContainer,
  {
    onSwipeEnd() {
      if (lengthX.value > 50) {
        scrollThumbnails('prev')
      } else if (lengthX.value < -50) {
        scrollThumbnails('next')
      }
    }
  }
)

// Lifecycle
onMounted(() => {
  isMobile.value = window.innerWidth < 768
  
  const handleResize = () => {
    isMobile.value = window.innerWidth < 768
  }
  
  const handleKeydown = (e) => {
    if (lightboxOpen.value) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') navigateLightbox('prev')
      if (e.key === 'ArrowRight') navigateLightbox('next')
    }
  }
  
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown)
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('keydown', handleKeydown)
  })
})
</script>

<style scoped>
.product-gallery {
  @apply relative;
}

.main-image-wrapper {
  @apply relative mb-4 lg:mb-6;
}

.zoom-lens {
  @apply absolute pointer-events-none border-2 border-gray-400 bg-white bg-opacity-40 rounded-full;
}

.zoom-preview {
  @apply absolute left-full ml-4 top-0 border-2 border-gray-200 rounded-lg shadow-xl bg-no-repeat pointer-events-none z-10;
}

/* Thumbnails */
.thumbnails-wrapper {
  @apply relative flex items-center gap-2;
}

.thumbnail-nav-btn {
  @apply flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all;
}

.thumbnails-container {
  @apply flex-1 overflow-hidden;
}

.thumbnails-track {
  @apply flex gap-2 transition-transform duration-300;
}

.thumbnail {
  @apply flex-shrink-0 w-20 h-20 border-2 border-gray-200 overflow-hidden hover:border-gray-400 transition-all;
  border-radius: var(--card-radius, 8px);
}

.thumbnail.active {
  @apply border-red-600;
}

/* Mobile swiper dots */
.swiper-dots {
  @apply flex justify-center gap-2 mt-4 lg:hidden;
}

.swiper-dot {
  @apply w-2 h-2 rounded-full bg-gray-300 transition-all;
}

.swiper-dot.active {
  @apply bg-red-600 w-6;
}

/* Lightbox */
.lightbox {
  @apply fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center;
}

.lightbox-close {
  @apply absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10;
}

.lightbox-nav {
  @apply absolute top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2;
}

.lightbox-nav.prev {
  @apply left-4;
}

.lightbox-nav.next {
  @apply right-4;
}

.lightbox-image-wrapper {
  @apply max-w-[90vw] max-h-[90vh];
}

.lightbox-image {
  @apply max-w-full max-h-full object-contain;
}

.lightbox-counter {
  @apply absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full;
}
</style>
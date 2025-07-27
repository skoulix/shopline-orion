<template>
  <article class="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 h-full flex flex-col border border-gray-100">
    <!-- Gradient Overlay Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <!-- Featured Image -->
    <div v-if="showImage && processedImage" :class="imageAspectClass" class="relative overflow-hidden">
      <a :href="url" class="block w-full h-full">
        <img 
          :src="processedImage"
          :alt="imageAlt"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        >
        <!-- Image Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </a>
    </div>

    <!-- Content -->
    <div class="relative p-6 flex-1 flex flex-col z-10">
      <!-- Tags -->
      <div v-if="showTags && processedTags.length > 0" class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tag in processedTags.slice(0, 3)" 
          :key="tag"
          class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300 line-clamp-2 leading-tight">
        <a :href="url" class="hover:underline decoration-2 underline-offset-2">{{ title }}</a>
      </h3>

      <!-- Excerpt -->
      <div class="flex-1 mb-6">
        <p v-if="excerpt" class="text-gray-600 leading-relaxed line-clamp-3">{{ excerpt }}</p>
        <div v-else-if="content" class="text-gray-600 leading-relaxed line-clamp-3" v-html="truncatedContent"></div>
      </div>

      <!-- Meta -->
      <div class="flex items-center justify-between text-sm mt-auto">
        <div class="flex items-center gap-4 text-gray-500">
          <span v-if="showAuthor && author" class="flex items-center gap-2 font-medium">
            <div class="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span class="group-hover:text-gray-700 transition-colors">{{ author }}</span>
          </span>
          <time v-if="showDate && publishedAt" :datetime="publishedAt" class="flex items-center gap-2 font-medium">
            <div class="w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <span class="group-hover:text-gray-700 transition-colors">{{ formattedDate }}</span>
          </time>
        </div>
        
        <a 
          :href="url" 
          class="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
        >
          <span>Read</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ArticleCard',
  props: {
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    publishedAt: {
      type: String,
      default: ''
    },
    rawPublishedAt: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    imageAlt: {
      type: String,
      default: ''
    },
    tags: {
      type: [Array, String],
      default: () => []
    },
    imageRatio: {
      type: String,
      default: 'landscape',
      validator: (value) => ['landscape', 'square', 'portrait'].includes(value)
    },
    showImage: {
      type: Boolean,
      default: true
    },
    showAuthor: {
      type: Boolean,
      default: false
    },
    showDate: {
      type: Boolean,
      default: true
    },
    showTags: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const imageAspectClass = computed(() => {
      switch (props.imageRatio) {
        case 'square':
          return 'aspect-square'
        case 'portrait':
          return 'aspect-[3/4]'
        default:
          return 'aspect-[4/3]'
      }
    })

    const processedTags = computed(() => {
      if (!props.tags) return []
      
      // If tags is a string, try to parse it as JSON
      if (typeof props.tags === 'string') {
        try {
          const parsed = JSON.parse(props.tags)
          return Array.isArray(parsed) ? parsed : []
        } catch (error) {
          return []
        }
      }
      
      // If it's already an array, return it
      return Array.isArray(props.tags) ? props.tags : []
    })

    const processedImage = computed(() => {
      if (!props.image) return ''
      
      // If image is a JSON string (like Shopline's coverImagePath), parse it
      if (typeof props.image === 'string' && props.image.startsWith('{')) {
        try {
          const parsed = JSON.parse(props.image)
          return parsed.mediaUrl || parsed.url || ''
        } catch (error) {
          return props.image
        }
      }
      
      return props.image
    })

    const formattedDate = computed(() => {
      // If we have a pre-formatted date from Shopline's {{date}} helper, use it
      if (props.publishedAt && props.publishedAt.trim() && 
          !props.publishedAt.match(/^\d+$/) && // Not just a timestamp
          !props.publishedAt.includes('T') && // Not ISO date format
          !props.publishedAt.match(/^\d{4}-\d{2}-\d{2}/)) { // Not YYYY-MM-DD format
        return props.publishedAt
      }
      
      // Fall back to parsing raw date
      const dateToFormat = props.rawPublishedAt || props.publishedAt
      if (!dateToFormat) return ''
      
      try {
        // Handle timestamp (number) or date string
        let date
        if (typeof dateToFormat === 'number' || /^\d+$/.test(dateToFormat)) {
          // If it's a timestamp, use it directly
          date = new Date(parseInt(dateToFormat))
        } else if (typeof dateToFormat === 'string') {
          // If it's a string, parse it
          date = new Date(dateToFormat)
        } else {
          return ''
        }
        
        // Check if date is valid
        if (isNaN(date.getTime())) {
          console.warn('Invalid date:', dateToFormat)
          return dateToFormat
        }
        
        // Get locale from Shopline global object
        const locale = (typeof window !== 'undefined' && 
                       typeof window.Shopline !== 'undefined' && 
                       window.Shopline?.locale?.current) || 'en'
        
        // Format date using Intl.DateTimeFormat with proper locale
        return new Intl.DateTimeFormat(locale, {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }).format(date)
      } catch (error) {
        console.warn('Error formatting date:', error, dateToFormat)
        return dateToFormat
      }
    })

    const truncatedContent = computed(() => {
      if (!props.content) return ''
      
      // Strip HTML tags and truncate to ~150 characters
      const textContent = props.content.replace(/<[^>]*>/g, '')
      if (textContent.length <= 150) return textContent
      
      return textContent.substring(0, 150).trim() + '...'
    })

    return {
      imageAspectClass,
      processedTags,
      processedImage,
      formattedDate,
      truncatedContent
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
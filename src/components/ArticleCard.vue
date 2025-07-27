<template>
  <article class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group h-full flex flex-col">
    <!-- Featured Image -->
    <div v-if="showImage && processedImage" :class="imageAspectClass" class="overflow-hidden">
      <a :href="url" class="block w-full h-full">
        <img 
          :src="processedImage"
          :alt="imageAlt"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        >
      </a>
    </div>

    <!-- Content -->
    <div class="p-6 flex-1 flex flex-col">
      <!-- Tags -->
      <div v-if="showTags && processedTags.length > 0" class="flex flex-wrap gap-2 mb-3">
        <span 
          v-for="tag in processedTags.slice(0, 3)" 
          :key="tag"
          class="inline-block bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
        <a :href="url" class="hover:underline">{{ title }}</a>
      </h3>

      <!-- Excerpt -->
      <div class="flex-1 mb-4">
        <p v-if="excerpt" class="text-gray-600 line-clamp-3">{{ excerpt }}</p>
        <div v-else-if="content" class="text-gray-600 line-clamp-3" v-html="truncatedContent"></div>
      </div>

      <!-- Meta -->
      <div class="flex items-center justify-between text-sm text-gray-500 mt-auto">
        <div class="flex items-center gap-4">
          <span v-if="showAuthor && author" class="flex items-center gap-1">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
            {{ author }}
          </span>
          <time v-if="showDate && publishedAt" :datetime="publishedAt" class="flex items-center gap-1">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>
            {{ formattedDate }}
          </time>
        </div>
        <a 
          :href="url" 
          class="text-red-600 font-medium hover:text-red-700 transition-colors flex items-center gap-1 group"
        >
          Read more
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      if (!props.publishedAt) return ''
      
      try {
        // Handle timestamp (number) or date string
        const date = typeof props.publishedAt === 'number' 
          ? new Date(props.publishedAt) 
          : new Date(props.publishedAt)
          
        const locale = (typeof Shopline !== 'undefined' && Shopline?.locale?.current) || 'en'
        
        return new Intl.DateTimeFormat(locale, {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }).format(date)
      } catch (error) {
        console.warn('Error formatting date:', error)
        return props.publishedAt
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
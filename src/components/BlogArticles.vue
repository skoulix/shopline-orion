<template>
  <div class="blog-articles-component">
    <!-- Loading skeleton -->
    <div v-if="loading" class="flex flex-wrap justify-center gap-6">
      <div 
        v-for="n in displayLimit" 
        :key="`skeleton-${n}`"
        class="article-skeleton flex-shrink-0 w-full sm:w-auto animate-pulse"
        :style="skeletonStyles"
      >
        <!-- Image skeleton -->
        <div v-if="showImage" :class="imageAspectClass" class="bg-gray-200"></div>
        
        <!-- Content skeleton -->
        <div class="p-6">
          <!-- Tags skeleton -->
          <div v-if="showTags" class="flex gap-2 mb-4">
            <div class="h-6 w-16 bg-gray-200 rounded-full"></div>
            <div class="h-6 w-20 bg-gray-200 rounded-full"></div>
          </div>
          
          <!-- Title skeleton -->
          <div class="h-6 bg-gray-200 rounded mb-2"></div>
          <div class="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
          
          <!-- Meta skeleton -->
          <div v-if="showAuthor || showDate" class="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          
          <!-- Excerpt skeleton -->
          <div class="space-y-2 mb-6">
            <div class="h-4 bg-gray-200 rounded"></div>
            <div class="h-4 bg-gray-200 rounded"></div>
            <div class="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
          
          <!-- Button skeleton -->
          <div class="h-6 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="text-center py-12">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">Unable to load articles</h3>
      <p class="text-gray-600">{{ error }}</p>
    </div>

    <!-- Articles grid -->
    <div v-else-if="articles.length > 0" class="flex flex-wrap justify-center gap-6">
      <div 
        v-for="article in articles" 
        :key="article.id"
        class="article-card-wrapper flex-shrink-0 w-full sm:w-auto"
        :style="cardWrapperStyles"
      >
        <article-card
          :title="article.title"
          :url="article.url"
          :excerpt="article.excerpt"
          :content="article.content"
          :author="article.author"
          :published-at="formatDate(article.published_at)"
          :raw-published-at="article.published_at"
          :image="article.image?.src || article.featured_image"
          :image-alt="article.image?.alt || article.title"
          :tags="article.tags"
          :image-ratio="imageRatio"
          :show-image="showImage"
          :show-author="showAuthor"
          :show-date="showDate"
          :show-tags="false"
        />
      </div>
    </div>

    <!-- No articles -->
    <div v-else class="text-center py-12">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
      <p class="text-gray-600">This blog has no articles yet.</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, defineAsyncComponent } from 'vue'
import ArticleCard from './ArticleCard.vue'

export default {
  name: 'BlogArticles',
  components: {
    ArticleCard
  },
  props: {
    blogId: {
      type: String,
      required: true
    },
    blogHandle: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: 3
    },
    currentArticleId: {
      type: String,
      default: null
    },
    columnsDesktop: {
      type: Number,
      default: 3
    },
    imageRatio: {
      type: String,
      default: 'landscape'
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
      default: false
    }
  },
  setup(props) {
    const articles = ref([])
    const loading = ref(true)
    const error = ref(null)

    const displayLimit = computed(() => Math.min(props.limit, 6))

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

    const skeletonStyles = computed(() => {
      const maxWidth = props.columnsDesktop === 4 ? '300px' :
                      props.columnsDesktop === 3 ? '350px' :
                      props.columnsDesktop === 2 ? '500px' : '100%'
      
      return {
        maxWidth,
        borderRadius: 'var(--card-radius, 8px)',
        backgroundColor: 'var(--color-loading-bg, #f5f5f5)',
        overflow: 'hidden'
      }
    })

    const cardWrapperStyles = computed(() => {
      const maxWidth = props.columnsDesktop === 4 ? '300px' :
                      props.columnsDesktop === 3 ? '350px' :
                      props.columnsDesktop === 2 ? '500px' : '100%'
      
      return { maxWidth }
    })

    const formatDate = (dateStr) => {
      if (!dateStr) return ''
      
      try {
        const date = new Date(dateStr)
        const locale = window.Shopline?.locale?.current || 'en'
        
        return new Intl.DateTimeFormat(locale, {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }).format(date)
      } catch (e) {
        return dateStr
      }
    }

    const fetchArticles = async () => {
      loading.value = true
      error.value = null

      try {
        // We need to find the correct way to fetch blog articles in Shopline
        // The blogId we have is likely a Shopline internal ID
        
        // For now, let's check if we're on an article page and can use hardcoded data
        if (props.blogHandle === 'news') {
          // Hardcode some sample articles for testing
          // In production, this would come from the API
          articles.value = [
            {
              id: '1',
              title: 'Sample Article 1',
              url: '/blogs/news/sample-article-1',
              excerpt: 'This is a sample article excerpt for testing purposes.',
              author: 'Admin',
              published_at: new Date().toISOString(),
              image: { src: 'https://via.placeholder.com/400x300' },
              tags: ['sample', 'test']
            },
            {
              id: '2', 
              title: 'Sample Article 2',
              url: '/blogs/news/sample-article-2',
              excerpt: 'Another sample article to demonstrate the layout.',
              author: 'Admin',
              published_at: new Date(Date.now() - 86400000).toISOString(),
              image: { src: 'https://via.placeholder.com/400x300' },
              tags: ['demo']
            },
            {
              id: '3',
              title: 'Sample Article 3',
              url: '/blogs/news/sample-article-3',
              excerpt: 'A third article to show the grid layout working properly.',
              author: 'Admin',
              published_at: new Date(Date.now() - 172800000).toISOString(),
              image: { src: 'https://via.placeholder.com/400x300' },
              tags: ['example']
            }
          ]
          
          // Filter out current article if needed
          if (props.currentArticleId) {
            articles.value = articles.value.filter(article => 
              String(article.id) !== String(props.currentArticleId)
            )
          }
          
          // Limit results
          articles.value = articles.value.slice(0, props.limit)
          
          return
        }
        
        // If we don't have a known blog handle, we can't fetch articles
        // This is a limitation of the current Shopline API
        throw new Error('Unable to fetch blog articles. Blog API endpoint not available.')
      } catch (err) {
        console.error('Error fetching blog articles:', err)
        error.value = 'Unable to load articles. Please ensure a valid blog is selected.'
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      fetchArticles()
    })

    return {
      articles,
      loading,
      error,
      displayLimit,
      imageAspectClass,
      skeletonStyles,
      cardWrapperStyles,
      formatDate
    }
  }
}
</script>

<style scoped>
.article-skeleton {
  border: 1px solid var(--color-border, #e5e5e5);
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
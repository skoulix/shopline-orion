<template>
  <div class="collection-grid">
    <!-- Collection Header -->
    <div v-if="showHeader" class="mb-8">
      <h1 class="text-3xl font-bold text-secondary-900 mb-4">{{ collectionTitle }}</h1>
      <div v-if="collectionDescription" class="prose prose-sm max-w-none text-secondary-600">
        {{ collectionDescription }}
      </div>
      <div class="mt-4 flex items-center justify-between">
        <p class="text-sm text-secondary-600">
          {{ totalProducts || filteredProducts.length }} products
        </p>
        <!-- Mobile Sort -->
        <div v-if="enableSorting" class="lg:hidden">
          <select
            v-model="sortBy"
            @change="handleSort"
            class="px-3 py-2 border border-secondary-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            :style="{ borderRadius: 'var(--button-radius)' }"
          >
            <option value="manual">Featured</option>
            <option value="best-selling">Best Selling</option>
            <option value="title-ascending">A-Z</option>
            <option value="title-descending">Z-A</option>
            <option value="price-ascending">Price: Low to High</option>
            <option value="price-descending">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Main Grid Layout -->
    <div class="lg:grid lg:grid-cols-4 lg:gap-8">
      <!-- Filters Sidebar -->
      <aside v-if="enableFiltering && filterPosition === 'sidebar'" class="lg:col-span-1">
        <collection-filters
          :products="products"
          @update-filters="handleFilterUpdate"
        />
      </aside>

      <!-- Products Grid -->
      <div :class="enableFiltering && filterPosition === 'sidebar' ? 'lg:col-span-3' : 'lg:col-span-4'">
        <!-- Loading State -->
        <div v-if="loading" :class="gridClasses">
          <div v-for="n in 6" :key="n" class="animate-pulse">
            <div class="bg-secondary-200 aspect-[3/4]" :style="{ borderRadius: 'var(--button-radius)' }"></div>
            <div class="mt-4 space-y-2">
              <div class="h-4 bg-secondary-200 rounded w-3/4"></div>
              <div class="h-4 bg-secondary-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else-if="filteredProducts.length === 0" class="text-center py-12">
          <svg class="mx-auto h-12 w-12 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <h3 class="mt-2 text-sm font-medium text-secondary-900">No products found</h3>
          <p class="mt-1 text-sm text-secondary-500">Try adjusting your filters</p>
        </div>

        <!-- Products Grid -->
        <div v-else :class="gridClasses">
          <product-card
            v-for="product in paginatedProducts"
            :key="product.id"
            :product="product"
            @quick-add="handleQuickAdd"
            @quick-view="handleQuickView"
          />
        </div>

        <!-- Pagination or Load More -->
        <div v-if="!loading && filteredProducts.length > 0" class="mt-8">
          <!-- Infinite Scroll -->
          <div v-if="enableInfiniteScroll" ref="loadMoreTrigger" class="text-center py-4">
            <div v-if="loadingMore" class="inline-flex items-center">
              <svg class="animate-spin h-5 w-5 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading more products...
            </div>
          </div>

          <!-- Load More Button -->
          <div v-else-if="hasMoreProducts" class="text-center">
            <button
              @click="loadMore"
              :disabled="loadingMore"
              class="inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
              :style="{ borderRadius: 'var(--button-radius)' }"
            >
              <span v-if="loadingMore">Loading...</span>
              <span v-else>Load More ({{ remainingProducts }} remaining)</span>
            </button>
          </div>

          <!-- Pagination -->
          <nav v-if="!enableInfiniteScroll && totalPages > 1" class="flex items-center justify-between">
            <div class="flex-1 flex justify-between sm:hidden">
              <button
                @click="currentPage--"
                :disabled="currentPage === 1"
                class="relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                :style="{ borderRadius: 'var(--button-radius)' }"
              >
                Previous
              </button>
              <button
                @click="currentPage++"
                :disabled="currentPage === totalPages"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                :style="{ borderRadius: 'var(--button-radius)' }"
              >
                Next
              </button>
            </div>
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center">
              <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    @click="currentPage--"
                    :disabled="currentPage === 1"
                    class="relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    :style="{ borderTopLeftRadius: 'var(--button-radius)', borderBottomLeftRadius: 'var(--button-radius)' }"
                  >
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  
                  <button
                    v-for="page in displayedPages"
                    :key="page"
                    @click="currentPage = page"
                    :class="[
                      'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
                      currentPage === page
                        ? 'z-10 bg-primary-50 border-primary-500 text-primary-600'
                        : 'bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50'
                    ]"
                  >
                    {{ page }}
                  </button>
                  
                  <button
                    @click="currentPage++"
                    :disabled="currentPage === totalPages"
                    class="relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    :style="{ borderTopRightRadius: 'var(--button-radius)', borderBottomRightRadius: 'var(--button-radius)' }"
                  >
                    <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <!-- Quick View Modal -->
    <Teleport to="body">
      <div
        v-if="quickViewProduct"
        class="fixed inset-0 z-50 overflow-y-auto"
        @click.self="closeQuickView"
      >
        <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
          <!-- Overlay -->
          <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closeQuickView"></div>
          
          <!-- Modal -->
          <div class="relative bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full"
            :style="{ borderRadius: 'var(--button-radius)' }">
            <div class="absolute top-0 right-0 pt-4 pr-4">
              <button
                @click="closeQuickView"
                class="bg-white text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                :style="{ borderRadius: 'var(--card-radius, 8px)' }"
              >
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <!-- Quick view content would go here -->
              <h3 class="text-lg font-medium text-secondary-900">{{ quickViewProduct.title }}</h3>
              <p class="mt-2 text-sm text-secondary-500">Quick view functionality would be implemented here</p>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import ProductCard from './ProductCard.vue'
import CollectionFilters from './CollectionFilters.vue'

const props = defineProps({
  products: {
    type: Array,
    default: () => []
  },
  collectionTitle: {
    type: String,
    default: 'All Products'
  },
  collectionDescription: {
    type: String,
    default: ''
  },
  collectionHandle: {
    type: String,
    default: ''
  },
  totalProducts: {
    type: Number,
    default: 0
  },
  productsPerPage: {
    type: Number,
    default: 12
  },
  enableInfiniteScroll: {
    type: Boolean,
    default: false
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  currentPage: {
    type: Number,
    default: 1
  },
  totalPages: {
    type: Number,
    default: 1
  },
  paginationInfo: {
    type: Object,
    default: () => ({})
  },
  columnsDesktop: {
    type: Number,
    default: 4
  },
  columnsMobile: {
    type: [Number, String],
    default: 2
  },
  enableFiltering: {
    type: Boolean,
    default: true
  },
  enableSorting: {
    type: Boolean,
    default: true
  },
  filterPosition: {
    type: String,
    default: 'sidebar'
  }
})

// State
const loading = ref(false)
const loadingMore = ref(false)
const currentPage = ref(props.currentPage)
const loadedProducts = ref(props.products.length)
const sortBy = ref('manual')
const activeFilters = ref({})
const quickViewProduct = ref(null)

// Refs
const loadMoreTrigger = ref(null)

// Computed
const gridClasses = computed(() => {
  const mobileCol = Number(props.columnsMobile)
  const desktopCol = props.columnsDesktop
  
  const mobileClass = mobileCol === 1 ? 'grid-cols-1' : 'grid-cols-2'
  const tabletClass = desktopCol <= 3 ? `md:grid-cols-${desktopCol}` : 'md:grid-cols-3'
  const desktopClass = `lg:grid-cols-${desktopCol}`
  
  return `grid ${mobileClass} ${tabletClass} ${desktopClass} gap-4 lg:gap-6`
})

const filteredProducts = computed(() => {
  let filtered = [...props.products]
  
  // Apply filters
  if (activeFilters.value.inStockOnly) {
    filtered = filtered.filter(p => p.available)
  }
  
  if (activeFilters.value.priceRanges?.length > 0) {
    filtered = filtered.filter(product => {
      const price = product.price / 100
      return activeFilters.value.priceRanges.some(range => {
        if (range === '0-50') return price < 50
        if (range === '50-100') return price >= 50 && price < 100
        if (range === '100-200') return price >= 100 && price < 200
        if (range === '200+') return price >= 200
        return false
      })
    })
  }
  
  if (activeFilters.value.types?.length > 0) {
    filtered = filtered.filter(p => activeFilters.value.types.includes(p.product_type))
  }
  
  if (activeFilters.value.vendors?.length > 0) {
    filtered = filtered.filter(p => activeFilters.value.vendors.includes(p.vendor))
  }
  
  // Apply sorting
  const sortMethod = activeFilters.value.sort || sortBy.value
  switch (sortMethod) {
    case 'price-ascending':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-descending':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'title-ascending':
      filtered.sort((a, b) => a.title.localeCompare(b.title))
      break
    case 'title-descending':
      filtered.sort((a, b) => b.title.localeCompare(a.title))
      break
    case 'created-ascending':
      filtered.sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      break
    case 'created-descending':
      filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      break
  }
  
  return filtered
})

const paginatedProducts = computed(() => {
  if (props.enableInfiniteScroll) {
    return filteredProducts.value.slice(0, loadedProducts.value)
  }
  
  const start = (currentPage.value - 1) * props.productsPerPage
  const end = start + props.productsPerPage
  return filteredProducts.value.slice(start, end)
})

const totalPages = computed(() => {
  // Use server-side pagination info if available
  return props.totalPages || Math.ceil(filteredProducts.value.length / props.productsPerPage)
})

const hasMoreProducts = computed(() => {
  // For server-side pagination, check if we're not on the last page
  if (props.paginationInfo && props.paginationInfo.pages) {
    return props.currentPage < props.totalPages
  }
  return loadedProducts.value < filteredProducts.value.length
})

const remainingProducts = computed(() => {
  // For server-side pagination, calculate remaining from total
  if (props.totalProducts) {
    return Math.max(0, props.totalProducts - (props.currentPage * props.productsPerPage))
  }
  return Math.max(0, filteredProducts.value.length - loadedProducts.value)
})

const displayedPages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = currentPage.value
  
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    if (current <= 3) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(total)
    } else if (current >= total - 2) {
      pages.push(1)
      pages.push('...')
      for (let i = total - 4; i <= total; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      pages.push('...')
      for (let i = current - 1; i <= current + 1; i++) {
        pages.push(i)
      }
      pages.push('...')
      pages.push(total)
    }
  }
  
  return pages.filter(p => p === '...' || (p >= 1 && p <= total))
})

// Methods
const handleFilterUpdate = (filters) => {
  activeFilters.value = filters
  currentPage.value = 1
  loadedProducts.value = props.productsPerPage
}

const handleSort = () => {
  currentPage.value = 1
  loadedProducts.value = props.productsPerPage
}

const loadMore = () => {
  loadingMore.value = true
  setTimeout(() => {
    loadedProducts.value += props.productsPerPage
    loadingMore.value = false
  }, 500)
}

const handleQuickAdd = async (product) => {
  // Add to cart logic
  const formData = new FormData()
  formData.append('id', product.variants[0].id)
  formData.append('quantity', '1')
  
  await window.OrionCart?.addItem(formData)
  
  // Show success notification
  console.log('Added to cart:', product.title)
}

const handleQuickView = (product) => {
  quickViewProduct.value = product
}

const closeQuickView = () => {
  quickViewProduct.value = null
}

// Infinite scroll observer
let observer = null

const setupInfiniteScroll = () => {
  if (!props.enableInfiniteScroll || !loadMoreTrigger.value) return
  
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && hasMoreProducts.value && !loadingMore.value) {
        loadMore()
      }
    },
    { threshold: 0.1 }
  )
  
  observer.observe(loadMoreTrigger.value)
}

// Lifecycle
onMounted(() => {
  setupInfiniteScroll()
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Watch for filter changes
watch(() => props.enableInfiniteScroll, () => {
  setupInfiniteScroll()
})
</script>
<template>
  <Teleport to="body">
    <Transition name="search-overlay">
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-hidden">
        <!-- Backdrop with blur -->
        <Transition name="fade">
          <div
            v-if="isOpen"
            class="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-all duration-300"
            @click="closeSearch"></div>
        </Transition>

        <!-- Search Panel -->
        <Transition name="slide-down" appear>
          <div v-if="isOpen" class="relative z-10 pointer-events-auto">
            <div class="bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 border-b border-gray-200/20">
              <div class="max-w-6xl mx-auto">
                <div class="relative">
                  <!-- Header with Search Input -->
                  <div class="px-4 py-8 sm:px-6 lg:px-8">
                    <div class="flex items-center gap-4 max-w-3xl mx-auto">
                      <div class="flex-1 relative group">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-400 group-focus-within:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <input
                          ref="searchInput"
                          v-model="searchQuery"
                          type="search"
                          placeholder="Search for products, collections..."
                          class="search-input w-full pl-12 pr-12 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200"
                          :style="{ borderRadius: `var(--button-radius, 16px)` }"
                          @input="handleSearchInput"
                          @keydown.escape="closeSearch"
                          @keydown.enter="submitSearch"
                        />
                        <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                          <div v-if="loading" class="relative">
                            <div class="animate-spin rounded-full h-5 w-5 border-2 border-gray-200"></div>
                            <div class="animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent absolute inset-0"></div>
                          </div>
                          <button
                            v-else-if="searchQuery"
                            @click="searchQuery = ''"
                            class="p-1 hover:bg-gray-200/50 rounded-lg transition-colors">
                            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200"
                        @click="closeSearch">
                        <span class="sr-only">Close search</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <!-- Quick Search Suggestions -->
                    <div v-if="!searchQuery && !loading" class="mt-6 max-w-3xl mx-auto">
                      <p class="text-sm text-gray-500 mb-3">Popular searches</p>
                      <div class="flex flex-wrap gap-2">
                        <button
                          v-for="suggestion in popularSearches"
                          :key="suggestion"
                          @click="searchQuery = suggestion; submitSearch()"
                          class="px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200">
                          {{ suggestion }}
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Search Results -->
                  <div v-if="showResults" class="border-t border-gray-100">
                    <div class="max-h-[60vh] overflow-y-auto custom-scrollbar">
                      <!-- Loading Skeleton -->
                      <div v-if="loading" class="p-6">
                        <div class="animate-pulse">
                          <div class="h-4 bg-gray-200 rounded w-20 mb-4"></div>
                          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div v-for="i in 4" :key="i" class="flex items-start space-x-3">
                              <div class="w-20 h-20 bg-gray-200 rounded-xl"></div>
                              <div class="flex-1">
                                <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div class="h-3 bg-gray-200 rounded w-1/2"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Products -->
                      <div v-else-if="results.products && results.products.length > 0" class="p-6">
                        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Products</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          <a
                            v-for="product in results.products"
                            :key="product.id"
                            :href="product.url"
                            class="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg"
                            @click="closeSearch">
                            <div class="relative overflow-hidden rounded-lg flex-shrink-0">
                              <img
                                v-if="product.image"
                                :src="product.image"
                                :alt="product.title"
                                class="w-20 h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              <div v-else class="w-20 h-20 bg-gray-100 flex items-center justify-center">
                                <svg class="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                                {{ product.title }}
                              </p>
                              <div class="mt-1 flex items-center gap-2">
                                <p class="text-sm font-semibold text-gray-900">
                                  {{ formatMoney(product.price) }}
                                </p>
                                <p v-if="product.compareAtPrice && product.compareAtPrice > product.price" class="text-xs text-gray-400 line-through">
                                  {{ formatMoney(product.compareAtPrice) }}
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>

                      <!-- Collections -->
                      <div v-if="results.collections && results.collections.length > 0" class="p-6 border-t border-gray-100">
                        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Collections</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          <a
                            v-for="collection in results.collections"
                            :key="collection.id"
                            :href="collection.url"
                            class="group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200"
                            @click="closeSearch">
                            <span class="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">{{ collection.title }}</span>
                            <svg class="w-4 h-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>

                      <!-- No Results -->
                      <div v-if="searchQuery && !loading && (!results.products || results.products.length === 0) && (!results.collections || results.collections.length === 0)" class="p-12 text-center">
                        <div class="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                          <svg class="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <p class="text-gray-900 font-medium mb-2">No results found</p>
                        <p class="text-sm text-gray-500">Try searching for something else or check your spelling</p>
                      </div>
                    </div>

                    <!-- View All Results -->
                    <div v-if="searchQuery && (results.products?.length > 0 || results.collections?.length > 0)" class="border-t border-gray-100 px-6 py-4 bg-gray-50/50">
                      <a
                        :href="`${searchUrl}?keyword=${encodeURIComponent(searchQuery)}`"
                        class="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                        @click="closeSearch">
                        View all results for "{{ searchQuery }}"
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)
const loading = ref(false)
const results = ref({
  products: [],
  collections: []
})
const searchTimeout = ref(null)


const searchUrl = computed(() => {
  return Shopline?.routes?.search || '/search'
})

const showResults = computed(() => {
  return searchQuery.value.length > 0
})

// Popular search suggestions from theme settings
const popularSearches = computed(() => {
  const searches = []
  const settings = window.Shopline?.theme?.settings || {}
  
  // Collect all popular search terms from settings
  for (let i = 1; i <= 6; i++) {
    const searchTerm = settings[`popular_search_${i}`]
    if (searchTerm && searchTerm.trim()) {
      searches.push(searchTerm.trim())
    }
  }
  
  // Return default values if no searches are configured
  if (searches.length === 0) {
    return ['New Arrivals', 'Best Sellers', 'Sale', 'Summer Collection']
  }
  
  return searches
})

const formatMoney = (price) => {
  if (!price && price !== 0) return '$0.00'
  
  const moneyFormat = Shopline?.shop?.money_format || '${{amount}}'
  const locale = Shopline?.locale?.current || 'en'
  
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  
  const amount = formatter.format(parseFloat(price))
  return moneyFormat.replace('{{amount}}', amount)
}

const openSearch = async () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
  await nextTick()
  searchInput.value?.focus()
}

const closeSearch = () => {
  isOpen.value = false
  document.body.style.overflow = ''
  searchQuery.value = ''
  results.value = { products: [], collections: [] }
}

const handleSearchInput = () => {
  clearTimeout(searchTimeout.value)
  
  if (searchQuery.value.length < 2) {
    results.value = { products: [], collections: [] }
    loading.value = false
    return
  }
  
  loading.value = true
  
  searchTimeout.value = setTimeout(() => {
    performSearch()
  }, 300)
}

const performSearch = async () => {
  try {
    // Use Shopline predictive search endpoint (from arise theme)
    const predictiveSearchUrl = window.routes?.predictive_search_url || '/search/suggest'
    const response = await fetch(
      `${predictiveSearchUrl}?q=${encodeURIComponent(searchQuery.value)}&field=title&resource_type=product&limit=8&available_type=show&section_id=predictive-search`
    )
    
    if (response.ok) {
      const html = await response.text()
      
      // Parse the HTML response to extract products
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')
      const productElements = doc.querySelectorAll('.predictive-search__list-item')
      
      const products = Array.from(productElements).map(el => {
        const link = el.querySelector('a')
        const img = el.querySelector('img')
        const title = el.querySelector('.predictive-search__item-head')
        const price = el.querySelector('.price__item')
        
        return {
          url: link?.href || '#',
          image: img?.src || '',
          title: title?.textContent?.trim() || '',
          price: price?.textContent?.trim().replace(/[^0-9.]/g, '') || '0'
        }
      })
      
      results.value = {
        products: products,
        collections: [] // Collections can be added if needed
      }
    }
  } catch (error) {
    console.error('Search error:', error)
    results.value = { products: [], collections: [] }
  } finally {
    loading.value = false
  }
}

const submitSearch = () => {
  if (searchQuery.value) {
    window.location.href = `${searchUrl.value}?keyword=${encodeURIComponent(searchQuery.value)}`
  }
}

// Handle escape key globally
const handleEscape = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeSearch()
  }
}

onMounted(() => {
  document.addEventListener('search-overlay:open', openSearch)
  document.addEventListener('search-overlay:close', closeSearch)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('search-overlay:open', openSearch)
  document.removeEventListener('search-overlay:close', closeSearch)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.search-overlay-enter-active,
.search-overlay-leave-active {
  transition: opacity 0.3s ease;
}

.search-overlay-enter-from,
.search-overlay-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

/* Custom scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #e5e7eb #f9fafb;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f9fafb;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e5e7eb;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}

/* Line clamp utility */
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

/* Search input styling with theme colors */
.search-input:focus {
  --tw-ring-color: var(--color-primary, #dc2626);
  border-color: var(--color-primary, #dc2626);
}

/* Remove native search input clear button */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  appearance: none;
}
</style>
<template>
  <Teleport to="body">
    <Transition name="search-overlay">
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-hidden">
        <!-- Backdrop -->
        <Transition name="fade">
          <div
            v-if="isOpen"
            class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            @click="closeSearch"></div>
        </Transition>

        <!-- Search Panel -->
        <Transition name="slide-down" appear>
          <div v-if="isOpen" class="relative z-10 pointer-events-auto">
            <div class="bg-white shadow-xl transition-shadow duration-300">
              <div class="max-w-4xl mx-auto">
                <div class="relative">
                  <!-- Header with Search Input -->
                  <div class="flex items-center px-4 py-6 sm:px-6 border-b border-gray-200">
                    <div class="flex-1 relative">
                      <input
                        ref="searchInput"
                        v-model="searchQuery"
                        type="search"
                        placeholder="Search products..."
                        class="w-full px-4 py-3 pr-12 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        @input="handleSearchInput"
                        @keydown.escape="closeSearch"
                        @keydown.enter="submitSearch"
                      />
                      <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg v-if="!loading" class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <div v-else class="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600"></div>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors"
                      @click="closeSearch">
                      <span class="sr-only">Close search</span>
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <!-- Search Results -->
                  <div v-if="showResults" class="border-t border-gray-200">
                    <div class="max-h-96 overflow-y-auto">
                      <!-- Products -->
                      <div v-if="results.products && results.products.length > 0" class="p-4">
                        <h3 class="text-sm font-medium text-gray-900 mb-3">Products</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          <a
                            v-for="product in results.products"
                            :key="product.id"
                            :href="product.url"
                            class="group flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50"
                            @click="closeSearch">
                            <img
                              v-if="product.image"
                              :src="product.image"
                              :alt="product.title"
                              class="w-16 h-16 object-cover rounded"
                            />
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate group-hover:text-red-600">
                                {{ product.title }}
                              </p>
                              <p class="text-sm text-gray-500">
                                {{ formatMoney(product.price) }}
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>

                      <!-- Collections -->
                      <div v-if="results.collections && results.collections.length > 0" class="p-4 border-t">
                        <h3 class="text-sm font-medium text-gray-900 mb-3">Collections</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <a
                            v-for="collection in results.collections"
                            :key="collection.id"
                            :href="collection.url"
                            class="text-sm text-gray-600 hover:text-red-600 p-2 rounded hover:bg-gray-50"
                            @click="closeSearch">
                            {{ collection.title }}
                          </a>
                        </div>
                      </div>

                      <!-- No Results -->
                      <div v-if="searchQuery && !loading && (!results.products || results.products.length === 0) && (!results.collections || results.collections.length === 0)" class="p-8 text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="mt-2 text-sm text-gray-500">No results found for "{{ searchQuery }}"</p>
                      </div>
                    </div>

                    <!-- View All Results -->
                    <div v-if="searchQuery && (results.products?.length > 0 || results.collections?.length > 0)" class="border-t border-gray-200 px-4 py-3 bg-gray-50">
                      <a
                        :href="`${searchUrl}?q=${encodeURIComponent(searchQuery)}`"
                        class="text-sm text-red-600 hover:text-red-700 font-medium"
                        @click="closeSearch">
                        View all results →
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
    window.location.href = `${searchUrl.value}?q=${encodeURIComponent(searchQuery.value)}`
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0.8;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0.8;
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
<template>
  <div class="collection-filters">
    <!-- Mobile Filter Toggle -->
    <div class="lg:hidden mb-4">
      <button
        @click="mobileFiltersOpen = true"
        class="flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
      >
        <span class="font-medium">Filters</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      </button>
    </div>

    <!-- Desktop Filters -->
    <div class="hidden lg:block filters-card" :style="cardStyles">
      <div class="space-y-6">
      <!-- Sort By -->
      <div v-if="showSort" class="filter-group">
        <h3 class="font-medium text-secondary-900 mb-3">Sort By</h3>
        <select
          v-model="selectedSort"
          @change="updateSort"
          class="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="manual">Featured</option>
          <option value="best-selling">Best Selling</option>
          <option value="title-ascending">Alphabetically, A-Z</option>
          <option value="title-descending">Alphabetically, Z-A</option>
          <option value="price-ascending">Price, low to high</option>
          <option value="price-descending">Price, high to low</option>
          <option value="created-ascending">Date, old to new</option>
          <option value="created-descending">Date, new to old</option>
        </select>
      </div>

      <!-- Price Range -->
      <div class="filter-group">
        <h3 class="font-medium text-secondary-900 mb-3">Price</h3>
        <div class="space-y-2">
          <label class="flex items-center">
            <input
              type="checkbox"
              value="0-50"
              v-model="selectedPriceRanges"
              @change="updateFilters"
              class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            />
            <span class="ml-2 text-sm">Under $50</span>
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              value="50-100"
              v-model="selectedPriceRanges"
              @change="updateFilters"
              class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            />
            <span class="ml-2 text-sm">$50 - $100</span>
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              value="100-200"
              v-model="selectedPriceRanges"
              @change="updateFilters"
              class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            />
            <span class="ml-2 text-sm">$100 - $200</span>
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              value="200+"
              v-model="selectedPriceRanges"
              @change="updateFilters"
              class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            />
            <span class="ml-2 text-sm">Over $200</span>
          </label>
        </div>
      </div>

      <!-- Product Type -->
      <div v-if="productTypes.length > 0" class="filter-group">
        <h3 class="font-medium text-secondary-900 mb-3">Product Type</h3>
        <div class="space-y-2">
          <label v-for="type in productTypes" :key="type" class="flex items-center">
            <input
              type="checkbox"
              :value="type"
              v-model="selectedTypes"
              @change="updateFilters"
              class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            />
            <span class="ml-2 text-sm">{{ type }}</span>
          </label>
        </div>
      </div>

      <!-- Vendor -->
      <div v-if="vendors.length > 0" class="filter-group">
        <h3 class="font-medium text-secondary-900 mb-3">Brand</h3>
        <div class="space-y-2">
          <label v-for="vendor in vendors" :key="vendor" class="flex items-center">
            <input
              type="checkbox"
              :value="vendor"
              v-model="selectedVendors"
              @change="updateFilters"
              class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
            />
            <span class="ml-2 text-sm">{{ vendor }}</span>
          </label>
        </div>
      </div>

      <!-- Availability -->
      <div class="filter-group">
        <h3 class="font-medium text-secondary-900 mb-3">Availability</h3>
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="inStockOnly"
            @change="updateFilters"
            class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
          />
          <span class="ml-2 text-sm">In stock only</span>
        </label>
      </div>

        <!-- Clear Filters -->
        <button
          v-if="hasActiveFilters"
          @click="clearFilters"
          class="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          Clear all filters
        </button>
      </div>
    </div>

    <!-- Mobile Filters Drawer -->
    <Teleport to="body">
      <div
        v-if="mobileFiltersOpen"
        class="fixed inset-0 z-50 lg:hidden"
        @click.self="mobileFiltersOpen = false"
      >
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-50" @click="mobileFiltersOpen = false"></div>
        
        <!-- Drawer -->
        <div class="absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl">
          <div class="h-full flex flex-col">
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b">
              <h2 class="text-lg font-semibold">Filters</h2>
              <button
                @click="mobileFiltersOpen = false"
                class="p-2 hover:bg-secondary-100 rounded-full transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <!-- Filters Content -->
            <div class="flex-1 overflow-y-auto p-4">
              <div class="space-y-6">
                <!-- Sort By (if enabled) -->
                <div v-if="showSort" class="filter-group">
                  <h3 class="font-medium text-secondary-900 mb-3">Sort By</h3>
                  <select
                    v-model="selectedSort"
                    @change="updateSort"
                    class="w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">Alphabetically, Z-A</option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>

                <!-- Price Range -->
                <div class="filter-group">
                  <h3 class="font-medium text-secondary-900 mb-3">Price</h3>
                  <div class="space-y-2">
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        value="0-50"
                        v-model="selectedPriceRanges"
                        @change="updateFilters"
                        class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      />
                      <span class="ml-2 text-sm">Under $50</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        value="50-100"
                        v-model="selectedPriceRanges"
                        @change="updateFilters"
                        class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      />
                      <span class="ml-2 text-sm">$50 - $100</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        value="100-200"
                        v-model="selectedPriceRanges"
                        @change="updateFilters"
                        class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      />
                      <span class="ml-2 text-sm">$100 - $200</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        value="200+"
                        v-model="selectedPriceRanges"
                        @change="updateFilters"
                        class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      />
                      <span class="ml-2 text-sm">Over $200</span>
                    </label>
                  </div>
                </div>

                <!-- Product Type -->
                <div v-if="productTypes.length > 0" class="filter-group">
                  <h3 class="font-medium text-secondary-900 mb-3">Product Type</h3>
                  <div class="space-y-2">
                    <label v-for="type in productTypes" :key="type" class="flex items-center">
                      <input
                        type="checkbox"
                        :value="type"
                        v-model="selectedTypes"
                        @change="updateFilters"
                        class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      />
                      <span class="ml-2 text-sm">{{ type }}</span>
                    </label>
                  </div>
                </div>

                <!-- Vendor -->
                <div v-if="vendors.length > 0" class="filter-group">
                  <h3 class="font-medium text-secondary-900 mb-3">Brand</h3>
                  <div class="space-y-2">
                    <label v-for="vendor in vendors" :key="vendor" class="flex items-center">
                      <input
                        type="checkbox"
                        :value="vendor"
                        v-model="selectedVendors"
                        @change="updateFilters"
                        class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                      />
                      <span class="ml-2 text-sm">{{ vendor }}</span>
                    </label>
                  </div>
                </div>

                <!-- Availability -->
                <div class="filter-group">
                  <h3 class="font-medium text-secondary-900 mb-3">Availability</h3>
                  <label class="flex items-center">
                    <input
                      type="checkbox"
                      v-model="inStockOnly"
                      @change="updateFilters"
                      class="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                    />
                    <span class="ml-2 text-sm">In stock only</span>
                  </label>
                </div>

                <!-- Clear Filters -->
                <button
                  v-if="hasActiveFilters"
                  @click="clearFilters"
                  class="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            </div>
            
            <!-- Footer -->
            <div class="p-4 border-t">
              <button
                @click="applyMobileFilters"
                class="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors font-medium"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  products: {
    type: Array,
    default: () => []
  },
  initialFilters: {
    type: Object,
    default: () => ({})
  },
  showSort: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update-filters'])

// Get initial values from URL params
const urlParams = new URLSearchParams(window.location.search)
const initialSort = urlParams.get('sort_by') || 'manual'

// Initialize filter values from URL
const getInitialFilterValues = () => {
  const priceParam = urlParams.get('filter.price')
  const typeParam = urlParams.get('filter.type')
  const vendorParam = urlParams.get('filter.vendor')
  const availabilityParam = urlParams.get('filter.availability')
  
  return {
    priceRanges: priceParam ? priceParam.split(',') : [],
    types: typeParam ? typeParam.split(',') : [],
    vendors: vendorParam ? vendorParam.split(',') : [],
    inStockOnly: availabilityParam === 'in_stock'
  }
}

const initialFilters = getInitialFilterValues()

// Filter state
const selectedSort = ref(initialSort)
const selectedPriceRanges = ref(initialFilters.priceRanges)
const selectedTypes = ref(initialFilters.types)
const selectedVendors = ref(initialFilters.vendors)
const inStockOnly = ref(initialFilters.inStockOnly)
const mobileFiltersOpen = ref(false)

// Card styles from theme settings
const cardStyles = computed(() => {
  const settings = window.Shopline?.theme?.settings || {}
  return {
    '--card-radius': settings.card_border_radius ? `${settings.card_border_radius}px` : '8px'
  }
})

// Computed filter options from products
const productTypes = computed(() => {
  const types = new Set()
  props.products.forEach(product => {
    if (product.product_type) {
      types.add(product.product_type)
    }
  })
  return Array.from(types).sort()
})

const vendors = computed(() => {
  const vendorSet = new Set()
  props.products.forEach(product => {
    if (product.vendor) {
      vendorSet.add(product.vendor)
    }
  })
  return Array.from(vendorSet).sort()
})

const hasActiveFilters = computed(() => {
  return selectedPriceRanges.value.length > 0 ||
    selectedTypes.value.length > 0 ||
    selectedVendors.value.length > 0 ||
    inStockOnly.value
})

// Filter methods
const updateSort = () => {
  // Update URL with new sort parameter
  const url = new URL(window.location.href)
  if (selectedSort.value === 'manual') {
    url.searchParams.delete('sort_by')
  } else {
    url.searchParams.set('sort_by', selectedSort.value)
  }
  window.location.href = url.toString()
}

const updateFilters = () => {
  // For desktop sidebar, apply filters immediately
  if (!mobileFiltersOpen.value) {
    applyFilters()
  }
  // For mobile, just emit the update event (will apply when drawer closes)
  emitFilterUpdate()
}

const applyFilters = () => {
  // For now, emit an event that the parent can handle
  // In a real implementation, this would make an AJAX request to Shopline's filtering API
  emit('apply-filters', {
    priceRanges: selectedPriceRanges.value,
    types: selectedTypes.value,
    vendors: selectedVendors.value,
    inStockOnly: inStockOnly.value
  })
  
  // Show a temporary message
  const message = document.createElement('div')
  message.className = 'fixed top-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded z-50'
  message.innerHTML = `
    <p class="font-medium">Note: Product filtering requires Shopline's facets API</p>
    <p class="text-sm mt-1">The filters have been applied to the URL, but product filtering needs server-side implementation.</p>
  `
  document.body.appendChild(message)
  
  setTimeout(() => {
    message.remove()
  }, 5000)
  
  // Still update the URL for demonstration
  const url = new URL(window.location.href)
  
  // Clear existing filter params
  Array.from(url.searchParams.keys()).forEach(key => {
    if (key.startsWith('filter.')) {
      url.searchParams.delete(key)
    }
  })
  
  // Add filters to URL
  if (selectedPriceRanges.value.length > 0) {
    url.searchParams.set('filter.price', selectedPriceRanges.value.join(','))
  }
  
  if (selectedTypes.value.length > 0) {
    url.searchParams.set('filter.type', selectedTypes.value.join(','))
  }
  
  if (selectedVendors.value.length > 0) {
    url.searchParams.set('filter.vendor', selectedVendors.value.join(','))
  }
  
  if (inStockOnly.value) {
    url.searchParams.set('filter.availability', 'in_stock')
  }
  
  // Update URL without reload
  window.history.pushState({}, '', url.toString())
}

const clearFilters = () => {
  selectedPriceRanges.value = []
  selectedTypes.value = []
  selectedVendors.value = []
  inStockOnly.value = false
  
  // Clear URL parameters
  const url = new URL(window.location.href)
  Array.from(url.searchParams.keys()).forEach(key => {
    if (key.startsWith('filter.')) {
      url.searchParams.delete(key)
    }
  })
  window.history.pushState({}, '', url.toString())
  
  // Emit event
  emit('apply-filters', {
    priceRanges: [],
    types: [],
    vendors: [],
    inStockOnly: false
  })
  
  emitFilterUpdate()
}

const applyMobileFilters = () => {
  mobileFiltersOpen.value = false
  applyFilters()
}

const emitFilterUpdate = () => {
  emit('update-filters', {
    sort: selectedSort.value,
    priceRanges: selectedPriceRanges.value,
    types: selectedTypes.value,
    vendors: selectedVendors.value,
    inStockOnly: inStockOnly.value
  })
}
</script>

<style scoped>
.filters-card {
  background-color: white;
  border: 1px solid rgb(var(--color-secondary-200));
  border-radius: var(--card-radius, 8px);
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease-in-out;
}

.filters-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.filters-card .filter-group {
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgb(var(--color-secondary-200));
}

.filters-card .filter-group:last-child {
  padding-bottom: 0;
  margin-bottom: 0;
  border-bottom: none;
}
</style>
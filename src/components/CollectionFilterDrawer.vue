<template>
  <div>
    <!-- Filter Button -->
    <button 
      @click="toggleDrawer"
      class="flex items-center gap-2 px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors"
      :style="{ borderRadius: 'var(--button-radius)' }"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
      <span>Filter</span>
      <span v-if="activeFilterCount > 0" class="ml-1 px-2 py-0.5 text-xs bg-gray-900 text-white"
        :style="{ borderRadius: '9999px' }">
        {{ activeFilterCount }}
      </span>
    </button>

    <!-- Filter Drawer -->
    <Teleport to="body">
      <Transition name="drawer">
        <div v-if="isOpen" class="fixed inset-0 z-50 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <Transition name="fade">
              <div
                v-if="isOpen"
                class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                @click="closeDrawer"
              ></div>
            </Transition>

            <div class="fixed inset-y-0 left-0 max-w-full flex pointer-events-none">
              <Transition name="slide" appear>
                <div
                  v-if="isOpen"
                  class="w-screen max-w-md pointer-events-auto"
                >
                  <div class="h-full flex flex-col bg-white shadow-xl transition-shadow duration-300">
                    <!-- Header -->
                    <div class="flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200">
                      <div>
                        <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                        <p v-if="activeFilterCount > 0" class="text-sm text-gray-500 mt-1">
                          {{ activeFilterCount }} {{ activeFilterCount === 1 ? 'filter' : 'filters' }} active
                        </p>
                      </div>
                      <button
                        type="button"
                        class="ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors"
                        @click="closeDrawer"
                      >
                        <span class="sr-only">Close filters</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <!-- Filter Content -->
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <!-- Availability Filter -->
            <div class="mb-6">
              <h3 class="font-medium mb-3">Availability</h3>
              <label class="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  v-model="filters.inStock"
                  class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                >
                <span class="ml-2 text-sm">In stock only</span>
              </label>
            </div>

            <!-- Price Range Filter -->
            <div class="mb-6">
              <h3 class="font-medium mb-3">Price</h3>
              <div class="space-y-2">
                <label 
                  v-for="range in priceRanges" 
                  :key="range.value"
                  class="flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    :value="range.value"
                    v-model="filters.priceRanges"
                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  >
                  <span class="ml-2 text-sm">{{ range.label }}</span>
                </label>
              </div>
            </div>

            <!-- Product Type Filter -->
            <div v-if="productTypes.length > 0" class="mb-6">
              <h3 class="font-medium mb-3">Product Type</h3>
              <div class="space-y-2">
                <label 
                  v-for="type in productTypes" 
                  :key="type"
                  class="flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    :value="type"
                    v-model="filters.types"
                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  >
                  <span class="ml-2 text-sm">{{ type }}</span>
                </label>
              </div>
            </div>

            <!-- Vendor Filter -->
            <div v-if="vendors.length > 0" class="mb-6">
              <h3 class="font-medium mb-3">Brand</h3>
              <div class="space-y-2">
                <label 
                  v-for="vendor in vendors" 
                  :key="vendor"
                  class="flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    :value="vendor"
                    v-model="filters.vendors"
                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  >
                  <span class="ml-2 text-sm">{{ vendor }}</span>
                </label>
              </div>
            </div>
          </div>

                    <!-- Footer -->
                    <div class="px-4 py-6 sm:px-6 border-t border-gray-200 space-y-3">
                      <button
                        @click="applyFilters"
                        class="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200"
                        :style="{ borderRadius: 'var(--button-radius)' }"
                      >
                        Apply Filters
                      </button>
                      <button
                        @click="clearFilters"
                        class="w-full flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
                        :style="{ borderRadius: 'var(--button-radius)' }"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  products: {
    type: Array,
    default: () => []
  },
  collectionHandle: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)
const filters = ref({
  inStock: false,
  priceRanges: [],
  types: [],
  vendors: []
})

const priceRanges = [
  { value: '0-50', label: 'Under $50' },
  { value: '50-100', label: '$50 - $100' },
  { value: '100-200', label: '$100 - $200' },
  { value: '200+', label: '$200 & above' }
]

// Extract unique product types and vendors from products
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

const activeFilterCount = computed(() => {
  let count = 0
  if (filters.value.inStock) count++
  count += filters.value.priceRanges.length
  count += filters.value.types.length
  count += filters.value.vendors.length
  return count
})

const toggleDrawer = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeDrawer = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const applyFilters = () => {
  const params = new URLSearchParams(window.location.search)
  
  // Clear existing filter params
  params.delete('filter.v.availability')
  params.delete('filter.v.price')
  params.delete('filter.p.product_type')
  params.delete('filter.p.vendor')
  
  // Add active filters
  if (filters.value.inStock) {
    params.set('filter.v.availability', '1')
  }
  
  if (filters.value.priceRanges.length > 0) {
    // Shopline uses specific price filter format
    filters.value.priceRanges.forEach(range => {
      if (range === '0-50') {
        params.append('filter.v.price.gte', '0')
        params.append('filter.v.price.lte', '50')
      } else if (range === '50-100') {
        params.append('filter.v.price.gte', '50')
        params.append('filter.v.price.lte', '100')
      } else if (range === '100-200') {
        params.append('filter.v.price.gte', '100')
        params.append('filter.v.price.lte', '200')
      } else if (range === '200+') {
        params.append('filter.v.price.gte', '200')
      }
    })
  }
  
  if (filters.value.types.length > 0) {
    filters.value.types.forEach(type => {
      params.append('filter.p.product_type', type)
    })
  }
  
  if (filters.value.vendors.length > 0) {
    filters.value.vendors.forEach(vendor => {
      params.append('filter.p.vendor', vendor)
    })
  }
  
  // Update URL and reload
  const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`
  window.location.href = newUrl
}

const clearFilters = () => {
  filters.value = {
    inStock: false,
    priceRanges: [],
    types: [],
    vendors: []
  }
  
  // Remove all filter params from URL
  const params = new URLSearchParams(window.location.search)
  const keysToDelete = []
  
  for (const [key] of params) {
    if (key.startsWith('filter.')) {
      keysToDelete.push(key)
    }
  }
  
  keysToDelete.forEach(key => params.delete(key))
  
  // Keep sort param if exists
  const sortParam = params.get('sort_by')
  const newUrl = `${window.location.pathname}${sortParam ? '?sort_by=' + sortParam : ''}`
  window.location.href = newUrl
}

// Load filters from URL on mount
onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  
  // Check availability filter
  if (params.get('filter.v.availability') === '1') {
    filters.value.inStock = true
  }
  
  // Check product type filters
  const typeParams = params.getAll('filter.p.product_type')
  if (typeParams.length > 0) {
    filters.value.types = typeParams
  }
  
  // Check vendor filters
  const vendorParams = params.getAll('filter.p.vendor')
  if (vendorParams.length > 0) {
    filters.value.vendors = vendorParams
  }
  
  // Price range filters are more complex to parse back
  // For now, we'll skip loading them from URL
})

// Clean up on unmount
onMounted(() => {
  return () => {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* Drawer transitions */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

/* Fade transitions for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide transitions for drawer panel */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
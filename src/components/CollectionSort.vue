<template>
  <div class="collection-sort-wrapper">
    <select 
      v-model="selectedSort"
      @change="handleSortChange"
      class="px-4 py-2 min-w-[200px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      :style="{ borderRadius: 'var(--button-radius)' }"
    >
      <option value="manual">Featured</option>
      <option value="best-selling">Best Selling</option>
      <option value="title-ascending">A-Z</option>
      <option value="title-descending">Z-A</option>
      <option value="price-ascending">Price: Low to High</option>
      <option value="price-descending">Price: High to Low</option>
      <option value="created-ascending">Date: Old to New</option>
      <option value="created-descending">Date: New to Old</option>
    </select>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  currentSort: {
    type: String,
    default: 'manual'
  },
  collectionHandle: {
    type: String,
    required: true
  }
})

const selectedSort = ref(props.currentSort)

// Get current URL parameters
const getUrlParams = () => {
  const params = new URLSearchParams(window.location.search)
  return params
}

// Update URL with new sort parameter
const updateUrl = (sort) => {
  const params = getUrlParams()
  
  if (sort === 'manual') {
    params.delete('sort_by')
  } else {
    params.set('sort_by', sort)
  }
  
  const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`
  
  // Use pushState to update URL without reload
  window.history.pushState({}, '', newUrl)
  
  // Reload the page to apply server-side sorting
  window.location.reload()
}

const handleSortChange = () => {
  updateUrl(selectedSort.value)
}

onMounted(() => {
  // Get sort from URL on mount
  const params = getUrlParams()
  const sortParam = params.get('sort_by')
  if (sortParam) {
    selectedSort.value = sortParam
  }
})
</script>
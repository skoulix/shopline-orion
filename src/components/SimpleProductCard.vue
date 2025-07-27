<template>
  <div class="product-card group relative">
    <div class="relative overflow-hidden rounded-lg bg-gray-50">
      <!-- Product Image -->
      <a :href="productUrl" class="block aspect-[3/4]">
        <img
          v-if="image"
          :src="image"
          :alt="title"
          class="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div v-else class="h-full w-full bg-gray-200 flex items-center justify-center">
          <span class="text-gray-400">No image</span>
        </div>
      </a>
      
      <!-- Out of Stock Badge -->
      <div
        v-if="!available"
        class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
      >
        <span class="bg-white text-gray-900 px-4 py-2 font-medium rounded-md shadow-lg">
          Out of Stock
        </span>
      </div>
      
      <!-- Quick Actions -->
      <div class="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          v-if="available"
          @click="handleQuickAdd"
          class="w-full bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 mb-2"
        >
          Quick Add
        </button>
        <button
          @click="handleQuickView"
          class="w-full bg-white text-gray-900 px-4 py-2 rounded-md font-medium border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
        >
          Quick View
        </button>
      </div>
    </div>
    
    <!-- Product Info -->
    <div class="mt-4">
      <h3 class="text-sm font-medium text-gray-900 line-clamp-2">
        <a :href="productUrl" class="hover:text-red-600 transition-colors">
          {{ title }}
        </a>
      </h3>
      
      <!-- Price -->
      <div class="mt-1">
        <span class="text-lg font-semibold text-gray-900">
          ${{ formattedPrice }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  productId: String,
  title: String,
  handle: String,
  price: [String, Number],
  image: String,
  available: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['quick-add', 'quick-view'])

const productUrl = computed(() => {
  return props.handle ? `/products/${props.handle}` : '#'
})

const formattedPrice = computed(() => {
  const priceNum = typeof props.price === 'string' ? parseFloat(props.price) : props.price
  return (priceNum / 100).toFixed(2)
})

const handleQuickAdd = async () => {
  // For now, just add the first variant to cart
  // In a real implementation, this would show variant selection first
  if (props.productId && window.OrionCart) {
    const formData = new FormData()
    formData.append('id', props.productId)
    formData.append('quantity', '1')
    
    try {
      await window.OrionCart.addItem(formData)
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }
  
  emit('quick-add', {
    id: props.productId,
    title: props.title,
    handle: props.handle
  })
}

const handleQuickView = () => {
  // Emit event that parent can handle to show product modal
  emit('quick-view', {
    id: props.productId,
    title: props.title,
    handle: props.handle
  })
}
</script>

<style scoped>
.product-card {
  @apply transition-shadow hover:shadow-lg;
}
</style>
<template>
  <div class="product-card group relative">
    <div class="relative overflow-hidden rounded-lg bg-gray-50">
      <!-- Product Image -->
      <a :href="productUrl" class="block aspect-[3/4]">
        <img
          v-if="currentImage"
          :src="currentImage"
          :alt="productData.title || 'Product image'"
          class="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
          @mouseenter="showSecondaryImage"
          @mouseleave="showPrimaryImage"
        />
        <div v-else class="h-full w-full bg-gray-200 flex items-center justify-center">
          <span class="text-gray-400">No image</span>
        </div>
        
        <!-- Sale Badge -->
        <div
          v-if="isOnSale"
          class="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-medium rounded"
        >
          {{ salePercentage }}% OFF
        </div>
        
        <!-- Out of Stock Badge -->
        <div
          v-if="!productData.available"
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
        >
          <span class="bg-white text-gray-900 px-4 py-2 font-medium rounded-md shadow-lg">
            Out of Stock
          </span>
        </div>
      </a>
      
      <!-- Add to Cart Button -->
      <div class="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          v-if="productData.available"
          @click="handleAddToCart"
          :disabled="isAddingToCart"
          class="w-full bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="!isAddingToCart">Add to Cart</span>
          <span v-else>Adding...</span>
        </button>
      </div>
    </div>
    
    <!-- Product Info -->
    <div class="mt-4">
      <!-- Color Swatches -->
      <div v-if="hasColorOptions" class="mb-2">
        <div class="flex gap-1 flex-wrap">
          <button
            v-for="color in colorOptions"
            :key="color.value"
            @click="selectColor(color)"
            :title="color.value"
            :class="[
              'w-6 h-6 rounded-full border-2 transition-all',
              selectedColor === color.value ? 'border-gray-900 scale-110' : 'border-gray-300'
            ]"
            :style="{ backgroundColor: getColorCode(color.value) }"
          />
        </div>
      </div>
      
      <!-- Title -->
      <h3 class="text-sm font-medium text-gray-900 line-clamp-2">
        <a :href="productUrl" class="hover:text-red-600 transition-colors">
          {{ productData.title || 'Untitled' }}
        </a>
      </h3>
      
      <!-- Price -->
      <div class="mt-1 flex items-center gap-2">
        <span class="text-lg font-semibold text-gray-900">
          {{ formatPrice(currentPrice) }}
        </span>
        <span
          v-if="compareAtPrice > currentPrice"
          class="text-sm text-gray-500 line-through"
        >
          {{ formatPrice(compareAtPrice) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  // Support both full product object and individual props
  product: {
    type: Object,
    required: false,
    default: null
  },
  // Individual props as fallback
  productId: String,
  variantId: String,
  title: String,
  handle: String,
  price: [String, Number],
  compareAtPrice: [String, Number],
  image: String,
  images: Array,
  available: {
    type: Boolean,
    default: true
  },
})

const emit = defineEmits(['add-to-cart'])

const selectedColor = ref('')
const hovering = ref(false)
const isAddingToCart = ref(false)

// Create unified product data from either object or individual props
const productData = computed(() => {
  if (props.product) {
    return props.product
  }
  
  // Build product object from individual props
  return {
    id: props.productId,
    title: props.title,
    handle: props.handle,
    price: typeof props.price === 'string' ? parseFloat(props.price) : props.price,
    compare_at_price: typeof props.compareAtPrice === 'string' ? parseFloat(props.compareAtPrice) : props.compareAtPrice,
    available: props.available,
    images: props.images || (props.image ? [{ src: props.image }] : []),
    featured_image: props.image,
    options: [],
    variants: props.variantId ? [{ id: props.variantId }] : []
  }
})

const productUrl = computed(() => {
  const handle = productData.value.handle
  return productData.value.url || (handle ? `/products/${handle}` : '#')
})

const currentImage = computed(() => {
  // Show secondary image on hover if available
  if (hovering.value && productData.value.images?.[1]) {
    return productData.value.images[1].src
  }
  // Use first image or fallback to placeholder
  return productData.value.images?.[0]?.src || 
         productData.value.featured_image || 
         productData.value.image ||
         '/placeholder.jpg'
})

const hasColorOptions = computed(() => {
  return productData.value.options?.some(opt => 
    opt.name?.toLowerCase().includes('color') || opt.name?.toLowerCase().includes('colour')
  )
})

const colorOptions = computed(() => {
  const colorOption = productData.value.options?.find(opt => 
    opt.name?.toLowerCase().includes('color') || opt.name?.toLowerCase().includes('colour')
  )
  return colorOption?.values || []
})

const currentPrice = computed(() => {
  return productData.value.price || 0
})

const compareAtPrice = computed(() => {
  return productData.value.compare_at_price || 0
})

const isOnSale = computed(() => {
  return productData.value.available && compareAtPrice.value > currentPrice.value
})

const salePercentage = computed(() => {
  if (!isOnSale.value) return 0
  return Math.round(((compareAtPrice.value - currentPrice.value) / compareAtPrice.value) * 100)
})

const formatPrice = (price) => {
  // This should use the shop's currency format
  return `$${(price / 100).toFixed(2)}`
}

const getColorCode = (colorName) => {
  // Map common color names to hex codes
  const colorMap = {
    'black': '#000000',
    'white': '#FFFFFF',
    'red': '#FF0000',
    'blue': '#0000FF',
    'green': '#008000',
    'yellow': '#FFFF00',
    'pink': '#FFC0CB',
    'purple': '#800080',
    'orange': '#FFA500',
    'brown': '#A52A2A',
    'gray': '#808080',
    'grey': '#808080',
    'navy': '#000080',
    'beige': '#F5F5DC',
    'cream': '#FFFDD0'
  }
  
  const lowerColor = colorName.toLowerCase()
  return colorMap[lowerColor] || `#${lowerColor.replace('#', '')}`
}

const showSecondaryImage = () => {
  if (productData.value.images?.length > 1) {
    hovering.value = true
  }
}

const showPrimaryImage = () => {
  hovering.value = false
}

const selectColor = (color) => {
  selectedColor.value = color.value
  // In a real implementation, this would update the variant
}

const handleAddToCart = async () => {
  isAddingToCart.value = true
  
  try {
    // Get the variant ID (first variant)
    const variantId = productData.value.variants?.[0]?.id
    
    if (!variantId) {
      console.error('No variant ID found for product:', productData.value)
      throw new Error('No variant ID found')
    }
    
    // Use Shopline's official AJAX API format
    const response = await fetch('/api/carts/ajax-cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        items: [{
          id: variantId,
          quantity: 1
        }]
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to add to cart')
    }
    
    const result = await response.json()
    
    // Refresh cart and open drawer
    if (window.OrionCart) {
      await window.OrionCart.fetchCart()
      window.OrionCart.openDrawer()
    }
    
    emit('add-to-cart', { variantId, quantity: 1 })
  } catch (error) {
    console.error('Error adding to cart:', error)
    alert('Failed to add item to cart. Please try again.')
  } finally {
    isAddingToCart.value = false
  }
}
</script>
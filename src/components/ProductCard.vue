<template>
  <div class="product-card group relative bg-white transition-all duration-300 overflow-hidden" 
       :style="cardStyles"
       @mouseenter="isHovered = true"
       @mouseleave="isHovered = false">
      <!-- Product Image -->
      <a :href="productUrl" class="block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          v-if="currentImage"
          :src="currentImage"
          :alt="productData.title || 'Product image'"
          class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          @mouseenter="showSecondaryImage"
          @mouseleave="showPrimaryImage"
        />
        <div v-else class="h-full w-full flex items-center justify-center">
          <svg class="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        
        <!-- Sale Badge - More modern design -->
        <div
          v-if="isOnSale"
          class="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg"
        >
          -{{ salePercentage }}%
        </div>
        
        <!-- Wishlist Button -->
        <button
          v-if="productData.available && showWishlist"
          class="absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
          @click.prevent="toggleWishlist"
        >
          <svg class="w-5 h-5" :class="isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        
        <!-- Out of Stock Overlay -->
        <div
          v-if="!productData.available"
          class="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
        >
          <span class="bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl">
            Out of Stock
          </span>
        </div>
      </a>
      
      <!-- Product Info -->
      <div class="p-4">
        <!-- Color Swatches - Improved design -->
        <div v-if="hasColorOptions" class="mb-3">
          <div class="flex gap-1.5 flex-wrap">
            <button
              v-for="color in colorOptions"
              :key="color.value"
              @click="selectColor(color)"
              :title="color.value"
              :class="[
                'w-7 h-7 rounded-full border-2 transition-all duration-200 relative',
                selectedColor === color.value ? 'border-gray-900 scale-110 shadow-md' : 'border-gray-200 hover:border-gray-400'
              ]"
              :style="{ backgroundColor: getColorCode(color.value) }"
            >
              <span v-if="selectedColor === color.value" class="absolute inset-0 flex items-center justify-center">
                <svg class="w-4 h-4 text-white drop-shadow" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        
        <!-- Brand (if available and enabled) -->
        <p v-if="showVendor && productData.vendor" class="text-xs text-gray-500 uppercase tracking-wider mb-1">
          {{ productData.vendor }}
        </p>
        
        <!-- Title -->
        <h3 class="text-2xl line-clamp-2 mb-2">
          <a :href="productUrl" >
            {{ productData.title || 'Untitled' }}
          </a>
        </h3>
        
        <!-- Rating (placeholder - shown if enabled) -->
        <div v-if="showReviews" class="flex items-center gap-1 mb-2">
          <div class="flex">
            <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span class="text-xs text-gray-500">(24)</span>
        </div>
        
        <!-- Price -->
        <div class="flex items-baseline gap-2 mb-4">
          <span class="text-xl font-bold text-gray-900">
            {{ formatPrice(currentPrice) }}
          </span>
          <span
            v-if="compareAtPrice > currentPrice"
            class="text-sm text-gray-400 line-through"
          >
            {{ formatPrice(compareAtPrice) }}
          </span>
        </div>
        
        <!-- Add to Cart Button -->
        <button
          v-if="productData.available"
          @click="handleAddToCart"
          :disabled="isAddingToCart"
          class="button w-full px-4 py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          :style="{
            backgroundColor: 'var(--button-primary-bg)',
            color: 'var(--button-primary-text)',
            borderRadius: 'var(--button-radius)'
          }"
          @mouseenter="e => e.target.style.backgroundColor = 'var(--button-primary-bg-hover)'"
          @mouseleave="e => e.target.style.backgroundColor = 'var(--button-primary-bg)'"
        >
          <svg v-if="!isAddingToCart" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span v-if="!isAddingToCart">Add to Cart</span>
          <svg v-else class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </button>
      </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Access Shopline theme settings for card display options
const showVendor = computed(() => {
  return window.Shopline?.theme?.settings?.card_show_vendor !== false
})

const showReviews = computed(() => {
  return window.Shopline?.theme?.settings?.card_show_reviews !== false
})

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
  url: String,
  vendor: String,
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
const isWishlisted = ref(false)
const isHovered = ref(false)

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
    url: props.url,
    vendor: props.vendor,
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
  let imageUrl = null
  
  // Show secondary image on hover if available
  if (hovering.value && productData.value.images?.[1]) {
    imageUrl = productData.value.images[1].src
  } else {
    // Use first image or fallback to placeholder
    imageUrl = productData.value.images?.[0]?.src || 
               productData.value.featured_image || 
               productData.value.image ||
               '/placeholder.jpg'
  }
  
  // Use global image sizing function for optimization
  return window.getImageUrl && imageUrl !== '/placeholder.jpg' 
    ? window.getImageUrl(imageUrl, { preset: 'product-card' })
    : imageUrl
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

const cardStyles = computed(() => {
  const baseRadius = 'var(--card-radius, 8px)'
  const baseShadow = 'var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))'
  const hoverShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  
  return {
    borderRadius: baseRadius,
    boxShadow: isHovered.value ? hoverShadow : baseShadow
  }
})

const showWishlist = computed(() => {
  return window.Shopline?.theme?.settings?.show_product_card_wishlist !== false
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

const toggleWishlist = () => {
  isWishlisted.value = !isWishlisted.value
  // In a real implementation, this would save to user's wishlist
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
    
    // Refresh cart and open drawer based on cart type
    if (window.OrionCart) {
      await window.OrionCart.fetchCart()
      
      // Check cart type setting
      const cartType = Shopline?.theme?.settings?.cart_type || 'drawer'
      
      if (cartType === 'drawer') {
        window.OrionCart.openDrawer()
      } else {
        window.location.href = '/cart'
      }
    } else {
      // Fallback: redirect to cart page
      window.location.href = '/cart'
    }
    
    // Cart added successfully
    
    emit('add-to-cart', { variantId, quantity: 1 })
  } catch (error) {
    console.error('Error adding to cart:', error)
    // Error adding to cart
  } finally {
    isAddingToCart.value = false
  }
}
</script>
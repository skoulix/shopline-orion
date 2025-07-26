<template>
  <div class="product-info">
    <!-- Product Title -->
    <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
      {{ product.title }}
    </h1>

    <!-- Product Vendor -->
    <p v-if="product.vendor" class="text-sm text-gray-600 mb-4">
      by {{ product.vendor }}
    </p>

    <!-- Product Price -->
    <div class="price-wrapper mb-6">
      <div class="flex items-baseline gap-3">
        <span class="text-3xl font-semibold text-gray-900">
          {{ formatPrice(currentVariant.price) }}
        </span>
        <span 
          v-if="currentVariant.compare_at_price > currentVariant.price"
          class="text-xl text-gray-500 line-through"
        >
          {{ formatPrice(currentVariant.compare_at_price) }}
        </span>
      </div>
      <p 
        v-if="currentVariant.compare_at_price > currentVariant.price"
        class="text-sm text-red-600 font-medium mt-1"
      >
        Save {{ formatPrice(currentVariant.compare_at_price - currentVariant.price) }}
        ({{ Math.round((1 - currentVariant.price / currentVariant.compare_at_price) * 100) }}% off)
      </p>
    </div>

    <!-- Variant Picker -->
    <div v-if="!product.has_only_default_variant" class="mb-6">
      <product-variant-picker
        :product="product"
        :current-variant="currentVariant"
        @variant-change="handleVariantChange"
      ></product-variant-picker>
    </div>

    <!-- Add to Cart Form -->
    <form @submit.prevent="handleAddToCart" class="mb-8">
      <input type="hidden" name="id" :value="currentVariant.id">
      
      <!-- Quantity Selector -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <quantity-selector
          v-model="quantity"
          :min="1"
          :max="maxQuantity"
        ></quantity-selector>
      </div>

      <!-- Stock Status -->
      <div class="mb-4">
        <p v-if="!currentVariant.available" class="text-red-600 font-medium">
          Out of Stock
        </p>
        <p v-else-if="currentVariant.inventory_quantity && currentVariant.inventory_quantity <= 10" class="text-amber-600">
          Only {{ currentVariant.inventory_quantity }} left in stock
        </p>
        <p v-else class="text-green-600">
          ✓ In Stock
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-3">
        <button
          type="submit"
          class="btn btn-primary flex-1"
          :disabled="!currentVariant.available || adding"
        >
          <span v-if="adding" class="flex items-center justify-center gap-2">
            <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Adding...
          </span>
          <span v-else-if="!currentVariant.available">
            Sold Out
          </span>
          <span v-else>
            Add to Cart
          </span>
        </button>

        <Button
          v-if="showBuyNow"
          type="button"
          variant="secondary"
          @click="handleBuyNow"
          class="flex-1"
          :disabled="!currentVariant.available"
        >
          Buy Now
        </Button>
      </div>
    </form>

    <!-- Product Description -->
    <div v-if="product.description" class="prose prose-sm max-w-none mb-8">
      <h2 class="text-lg font-semibold text-gray-900 mb-3">Description</h2>
      <div v-html="product.description"></div>
    </div>

    <!-- Product Details Accordion -->
    <div class="space-y-4">
      <!-- Shipping Info -->
      <details class="group">
        <summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors">
          <span class="font-medium">Shipping & Returns</span>
          <svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div class="py-4 text-sm text-gray-600">
          <p class="mb-2">Free shipping on orders over $50.</p>
          <p class="mb-2">Standard shipping typically takes 3-5 business days.</p>
          <p>30-day return policy. Items must be in original condition.</p>
        </div>
      </details>

      <!-- Care Instructions -->
      <details v-if="product.care_instructions" class="group">
        <summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors">
          <span class="font-medium">Care Instructions</span>
          <svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div class="py-4 text-sm text-gray-600" v-html="product.care_instructions"></div>
      </details>

      <!-- Size Guide -->
      <details v-if="hasSizeOption" class="group">
        <summary class="flex justify-between items-center cursor-pointer py-3 border-b hover:text-red-600 transition-colors">
          <span class="font-medium">Size Guide</span>
          <svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div class="py-4">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="text-left py-2">Size</th>
                <th class="text-left py-2">Chest</th>
                <th class="text-left py-2">Length</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="py-2">S</td>
                <td class="py-2">36"</td>
                <td class="py-2">28"</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">M</td>
                <td class="py-2">40"</td>
                <td class="py-2">29"</td>
              </tr>
              <tr class="border-b">
                <td class="py-2">L</td>
                <td class="py-2">44"</td>
                <td class="py-2">30"</td>
              </tr>
              <tr>
                <td class="py-2">XL</td>
                <td class="py-2">48"</td>
                <td class="py-2">31"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
    </div>

    <!-- Share Buttons -->
    <div class="mt-8 pt-8 border-t">
      <p class="text-sm font-medium text-gray-700 mb-3">Share this product</p>
      <div class="flex gap-3">
        <button 
          @click="shareOn('facebook')"
          class="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Share on Facebook"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </button>
        <button 
          @click="shareOn('twitter')"
          class="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Share on Twitter"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </button>
        <button 
          @click="shareOn('pinterest')"
          class="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Share on Pinterest"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
          </svg>
        </button>
        <button 
          @click="copyLink"
          class="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors relative"
          aria-label="Copy link"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span 
            v-if="linkCopied"
            class="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
          >
            Link copied!
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Button from './Button.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  showBuyNow: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['variant-change'])

// State
const currentVariant = ref(props.product.selected_or_first_available_variant || props.product.variants?.[0] || {})
const quantity = ref(1)
const adding = ref(false)
const linkCopied = ref(false)

// Computed
const maxQuantity = computed(() => {
  if (currentVariant.value.inventory_policy === 'continue') {
    return 999
  }
  return Math.min(currentVariant.value.inventory_quantity || 10, 10)
})

const hasSizeOption = computed(() => {
  return props.product.options?.some(opt => 
    opt.name.toLowerCase() === 'size' || opt.name.toLowerCase() === 'taille'
  )
})

// Methods
const formatPrice = (price) => {
  // This would use the actual money formatting from Shopline
  return `$${(price / 100).toFixed(2)}`
}

const handleVariantChange = (variant) => {
  currentVariant.value = variant
  emit('variant-change', variant)
  
  // Update URL with variant parameter
  const url = new URL(window.location)
  url.searchParams.set('variant', variant.id)
  window.history.replaceState({}, '', url)
}

const handleAddToCart = async () => {
  adding.value = true
  
  const formData = new FormData()
  formData.append('id', currentVariant.value.id)
  formData.append('quantity', quantity.value)
  
  try {
    await window.OrionCart?.addItem(formData)
    
    // Show success feedback
    const button = event.target
    const originalText = button.textContent
    button.textContent = '✓ Added to Cart'
    
    setTimeout(() => {
      button.textContent = originalText
    }, 2000)
  } catch (error) {
    console.error('Failed to add to cart:', error)
    alert('Failed to add item to cart. Please try again.')
  } finally {
    adding.value = false
  }
}

const handleBuyNow = async () => {
  await handleAddToCart()
  window.location.href = '/checkout'
}

const shareOn = (platform) => {
  const url = window.location.href
  const title = props.product.title
  
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`
  }
  
  if (shareUrls[platform]) {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400')
  }
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    linkCopied.value = true
    setTimeout(() => {
      linkCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}

// Watch for external variant changes
watch(() => props.product.selected_variant, (newVariant) => {
  if (newVariant) {
    currentVariant.value = newVariant
  }
})
</script>

<style scoped>
.btn {
  @apply inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn-primary {
  @apply bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2;
}

.btn-secondary {
  @apply bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2;
}

.prose {
  @apply text-gray-600;
}

.prose h2 {
  @apply text-gray-900;
}

.prose h3 {
  @apply text-gray-900;
}

.prose ul {
  @apply list-disc list-inside;
}

.prose ol {
  @apply list-decimal list-inside;
}
</style>
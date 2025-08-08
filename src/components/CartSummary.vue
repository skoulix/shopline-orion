<template>
  <div class="bg-gray-50 p-6 lg:sticky lg:top-24 border border-gray-200" :style="{ borderRadius: 'var(--card-radius, 8px)', boxShadow: 'var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))' }">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
    
    <!-- Subtotals -->
    <div class="space-y-3 mb-4">
      <div class="flex justify-between text-sm">
        <span class="text-gray-600">Subtotal ({{ itemCount }} {{ itemCount === 1 ? 'item' : 'items' }})</span>
        <span class="font-medium text-gray-900">{{ formatPrice(originalPrice) }}</span>
      </div>
      
      <!-- Discounts -->
      <div v-if="totalDiscount > 0" class="flex justify-between text-sm text-green-600">
        <span class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z" clip-rule="evenodd" />
          </svg>
          Discounts
        </span>
        <span>-{{ formatPrice(totalDiscount) }}</span>
      </div>
      
      <!-- Shipping -->
      <div v-if="showShipping" class="flex justify-between text-sm">
        <span class="text-gray-600">Estimated Shipping</span>
        <span class="text-gray-900">{{ shippingPrice === 0 ? 'Free' : formatPrice(shippingPrice) }}</span>
      </div>
      
      <!-- Tax -->
      <div v-if="showTax" class="flex justify-between text-sm">
        <span class="text-gray-600">Estimated Tax</span>
        <span class="text-gray-900">{{ formatPrice(estimatedTax) }}</span>
      </div>
    </div>
    
    <!-- Total -->
    <div class="border-t pt-4 mb-6">
      <div class="flex justify-between items-baseline">
        <span class="text-lg font-semibold">Total</span>
        <div class="text-right">
          <span class="text-xl font-bold text-gray-900">{{ formatPrice(totalPrice) }}</span>
          <p v-if="totalDiscount > 0" class="text-xs text-green-600 font-medium">
            You saved {{ formatPrice(totalDiscount) }}!
          </p>
        </div>
      </div>
    </div>
    
    <!-- Promo Code -->
    <div class="mb-6">
      <details class="group">
        <summary class="flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
          <span>Have a promo code?</span>
          <svg class="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div class="mt-3">
          <form @submit.prevent="applyPromoCode" class="flex gap-2">
            <input
              v-model="promoCode"
              type="text"
              placeholder="Enter promo code"
              class="flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              :style="{ borderRadius: 'var(--card-radius, 8px)' }"
              :disabled="applyingPromo"
            >
            <button
              type="submit"
              class="px-4 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              :style="{ borderRadius: 'var(--button-radius)' }"
              :disabled="!promoCode.trim() || applyingPromo"
            >
              {{ applyingPromo ? 'Applying...' : 'Apply' }}
            </button>
          </form>
          <p v-if="promoError" class="text-xs text-red-600 mt-2">{{ promoError }}</p>
          <p v-if="promoSuccess" class="text-xs text-green-600 mt-2">{{ promoSuccess }}</p>
        </div>
      </details>
    </div>
    
    <!-- Checkout Button -->
    <button
      @click="handleCheckout"
      class="w-full py-3 px-6 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      :style="{
        backgroundColor: isHovered ? 'var(--button-primary-bg-hover)' : 'var(--button-primary-bg)',
        color: 'var(--button-primary-text)',
        borderRadius: 'var(--button-radius)'
      }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      :disabled="itemCount === 0 || checkingOut"
    >
      <span v-if="checkingOut" class="flex items-center gap-2">
        <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing...
      </span>
      <span v-else>
        Proceed to Checkout
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </button>
    
    <!-- Trust Badges -->
    <div class="mt-6 space-y-2">
      <div class="flex items-center gap-2 text-xs text-gray-600">
        <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        Secure checkout
      </div>
      <div class="flex items-center gap-2 text-xs text-gray-600">
        <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
        Free shipping on orders over $50
      </div>
      <div class="flex items-center gap-2 text-xs text-gray-600">
        <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
        </svg>
        30-day return policy
      </div>
    </div>
    
    <!-- Payment Methods -->
    <div class="mt-6 pt-6 border-t">
      <p class="text-xs text-gray-600 mb-2">We accept</p>
      <div class="flex gap-2">
        <!-- Payment icons as inline SVGs -->
        <svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor">
          <path d="M0 0h48v32H0z" fill="#1A1F71"/>
          <path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff"/>
        </svg>
        <svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor">
          <rect width="48" height="32" rx="4" fill="#EB001B"/>
          <circle cx="19" cy="16" r="8" fill="#FF5F00"/>
          <circle cx="29" cy="16" r="8" fill="#F79E1B"/>
        </svg>
        <svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor">
          <rect width="48" height="32" rx="4" fill="#2E7BC4"/>
          <path d="M20 10h8l-1 12h-6z" fill="#fff"/>
        </svg>
        <svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor">
          <rect width="48" height="32" rx="4" fill="#253B80"/>
          <path d="M19 11h10v10H19z" fill="#179BD7"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  cart: {
    type: Object,
    required: true
  },
  showShipping: {
    type: Boolean,
    default: true
  },
  showTax: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['checkout'])

// State
const promoCode = ref('')
const promoError = ref('')
const promoSuccess = ref('')
const applyingPromo = ref(false)
const checkingOut = ref(false)
const isHovered = ref(false)

// Computed
const itemCount = computed(() => props.cart.item_count || 0)
const totalPrice = computed(() => props.cart.total_price || 0)
const originalPrice = computed(() => props.cart.original_total_price || props.cart.total_price || 0)
const totalDiscount = computed(() => props.cart.total_discount || 0)
const shippingPrice = computed(() => {
  // Free shipping over $50
  return totalPrice.value >= 5000 ? 0 : 500 // $5 shipping under $50
})
const estimatedTax = computed(() => {
  // Rough tax estimate (10%)
  return Math.round(totalPrice.value * 0.1)
})

// Methods
const formatPrice = (price) => {
  return `$${(price / 100).toFixed(2)}`
}

const applyPromoCode = async () => {
  if (!promoCode.value.trim() || applyingPromo.value) return
  
  applyingPromo.value = true
  promoError.value = ''
  promoSuccess.value = ''
  
  try {
    // This would call the actual discount code API
    const formData = new FormData()
    formData.append('discount_code', promoCode.value)
    
    const response = await fetch('/discount/apply', {
      method: 'POST',
      body: formData
    })
    
    if (response.ok) {
      promoSuccess.value = 'Promo code applied successfully!'
      promoCode.value = ''
      // Refresh cart to show updated prices
      await window.OrionCart?.fetchCart()
    } else {
      const error = await response.json()
      promoError.value = error.message || 'Invalid promo code'
    }
  } catch (error) {
    console.error('Failed to apply promo code:', error)
    promoError.value = 'Failed to apply promo code. Please try again.'
  } finally {
    applyingPromo.value = false
  }
}

const handleCheckout = async () => {
  if (itemCount.value === 0 || checkingOut.value) return
  
  checkingOut.value = true
  
  try {
    emit('checkout')
    // Redirect to checkout
    window.location.href = '/checkout'
  } catch (error) {
    console.error('Failed to proceed to checkout:', error)
    alert('Failed to proceed to checkout. Please try again.')
  } finally {
    checkingOut.value = false
  }
}
</script>
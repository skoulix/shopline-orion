<template>
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

          <div class="fixed inset-y-0 right-0 max-w-full flex">
            <Transition name="slide">
              <div v-if="isOpen" class="w-screen max-w-md transform transition-transform duration-300 ease-out">
                <div class="h-full flex flex-col bg-white shadow-xl">
                  <!-- Header -->
                  <div class="flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200">
                    <div>
                      <h2 class="text-lg font-medium text-gray-900">Shopping Cart</h2>
                      <p v-if="items.length > 0" class="text-sm text-gray-500 mt-1">
                        {{ items.length }} {{ items.length === 1 ? 'item' : 'items' }}
                      </p>
                    </div>
                    <button
                      type="button"
                      class="ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors"
                      @click="closeDrawer"
                    >
                      <span class="sr-only">Close cart</span>
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <!-- Cart Items -->
                  <div class="flex-1 overflow-y-auto">
                    <!-- Empty State -->
                    <div v-if="items.length === 0" class="flex flex-col items-center justify-center h-full px-4 py-12">
                      <div class="empty-cart-icon">
                        <div class="empty-cart-icon-bg"></div>
                        <svg class="empty-cart-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                      </div>
                      <h3 class="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                      <p class="text-sm text-gray-500 text-center mb-8 max-w-xs">
                        Looks like you haven't added anything to your cart yet. Start shopping to find your perfect items!
                      </p>
                      <Button
                        @click="closeDrawer"
                        variant="primary"
                        size="large"
                      >
                        Start Shopping
                      </Button>
                      
                      <!-- Suggestions -->
                      <div class="mt-12 w-full">
                        <p class="text-xs text-gray-500 text-center mb-4">Popular right now</p>
                        <div class="grid grid-cols-3 gap-3">
                          <button 
                            v-for="category in ['New Arrivals', 'Best Sellers', 'Sale']" 
                            :key="category"
                            @click="closeDrawer"
                            class="px-3 py-2 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            {{ category }}
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Cart Items -->
                    <div v-else class="px-4 sm:px-6 pb-6">
                      <cart-item
                        v-for="item in items"
                        :key="item.key"
                        :item="item"
                        @update="handleItemUpdate"
                        @remove="handleItemRemove"
                      />
                    </div>
                  </div>

                  <!-- Footer -->
                  <div v-if="items.length > 0" class="border-t border-gray-200 px-4 py-6 sm:px-6 space-y-6">
                    <!-- Free Shipping Notice -->
                    <div v-if="totalPrice < 5000" class="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-sm text-blue-800">
                          Add {{ formatMoney(5000 - totalPrice) }} more for free shipping!
                        </p>
                      </div>
                      <div class="mt-2 bg-blue-200 rounded-full h-2 overflow-hidden">
                        <div 
                          class="bg-blue-600 h-full transition-all duration-300"
                          :style="`width: ${Math.min((totalPrice / 5000) * 100, 100)}%`"
                        ></div>
                      </div>
                    </div>
                    
                    <!-- Subtotal -->
                    <div>
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{{ formatMoney(totalPrice) }}</p>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    </div>
                    
                    <!-- Actions -->
                    <div class="space-y-3">
                      <Button
                        :href="checkoutUrl"
                        variant="primary"
                        :full-width="true"
                        size="large"
                      >
                        Checkout
                      </Button>
                      <Button
                        @click="closeDrawer"
                        variant="ghost"
                        :full-width="true"
                      >
                        Continue Shopping
                      </Button>
                    </div>
                    
                    <!-- Trust Badges -->
                    <div class="flex items-center justify-center gap-6 text-xs text-gray-500 pt-2">
                      <div class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Secure Checkout</span>
                      </div>
                      <div class="flex items-center gap-1">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Money Back Guarantee</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Button from './Button.vue'
import CartItem from './CartItem.vue'

const isOpen = ref(false)
const items = ref([])
const totalPrice = ref(0)

const checkoutUrl = computed(() => {
  return window.routes?.cart_url || '/cart'
})

const formatMoney = (cents) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: window.Shopify?.currency?.active || 'USD'
  }).format(cents / 100)
}

const openDrawer = () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
  fetchCart()
}

const closeDrawer = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const fetchCart = async () => {
  const cart = await window.OrionCart.fetchCart()
  items.value = cart.items
  totalPrice.value = cart.total_price
}

const handleItemUpdate = async ({ key, quantity }) => {
  await window.OrionCart.updateItem(key, quantity)
  fetchCart()
}

const handleItemRemove = async (key) => {
  await window.OrionCart.removeItem(key)
  fetchCart()
}

onMounted(() => {
  document.addEventListener('cart:open', openDrawer)
  document.addEventListener('cart:close', closeDrawer)
  
  // Handle escape key
  const handleEscape = (e) => {
    if (e.key === 'Escape' && isOpen.value) {
      closeDrawer()
    }
  }
  document.addEventListener('keydown', handleEscape)
  
  // Cleanup
  onUnmounted(() => {
    document.removeEventListener('cart:open', openDrawer)
    document.removeEventListener('cart:close', closeDrawer)
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
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

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

/* Empty state icon styling */
.empty-cart-icon {
  position: relative;
  width: 6rem;
  height: 6rem;
  margin-bottom: 1.5rem;
}

.empty-cart-icon-bg {
  position: absolute;
  inset: 0;
  background-color: #f3f4f6;
  border-radius: 9999px;
}

.empty-cart-icon-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  color: #9ca3af;
}
</style>
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
                  <div class="flex items-start justify-between px-4 py-6 sm:px-6">
                    <h2 class="text-lg font-medium text-gray-900">Shopping Cart</h2>
                    <button
                      type="button"
                      class="ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500"
                      @click="closeDrawer"
                    >
                      <span class="sr-only">Close cart</span>
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <!-- Cart Items -->
                  <div class="flex-1 overflow-y-auto px-4 sm:px-6">
                    <div v-if="items.length === 0" class="text-center py-12">
                      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
                      <p class="mt-1 text-sm text-gray-500">Start shopping to add items to your cart!</p>
                      <button
                        @click="closeDrawer"
                        class="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                      >
                        Continue Shopping
                      </button>
                    </div>

                    <div v-else class="flow-root">
                      <ul role="list" class="-my-6 divide-y divide-gray-200">
                        <li v-for="item in items" :key="item.key" class="py-6 flex">
                          <div class="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                            <img
                              :src="item.image"
                              :alt="item.product_title"
                              class="w-full h-full object-center object-cover"
                            />
                          </div>

                          <div class="ml-4 flex-1 flex flex-col">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a :href="item.url">{{ item.product_title }}</a>
                                </h3>
                                <p class="ml-4">{{ formatMoney(item.line_price) }}</p>
                              </div>
                              <p v-if="item.variant_title" class="mt-1 text-sm text-gray-500">
                                {{ item.variant_title }}
                              </p>
                            </div>
                            <div class="flex-1 flex items-end justify-between text-sm">
                              <quantity-selector
                                :value="item.quantity"
                                :min="0"
                                :max="item.variant?.inventory_quantity || 999"
                                @update="updateQuantity(item.key, $event)"
                              />

                              <button
                                type="button"
                                class="font-medium text-primary-600 hover:text-primary-500"
                                @click="removeItem(item.key)"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- Footer -->
                  <div v-if="items.length > 0" class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{{ formatMoney(totalPrice) }}</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                      <a
                        :href="checkoutUrl"
                        class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                      >
                        Checkout
                      </a>
                    </div>
                    <div class="mt-6">
                      <button
                        type="button"
                        @click="closeDrawer"
                        class="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                      >
                        Continue Shopping
                      </button>
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

const updateQuantity = async (key, quantity) => {
  await window.OrionCart.updateItem(key, quantity)
  fetchCart()
}

const removeItem = async (key) => {
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
</style>
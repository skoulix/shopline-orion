<template>
  <div class="main-header-content" style="position: absolute; inset: 0; background: white;">
    <div class="main-header__wrapper">
      <!-- Mobile menu toggle -->
      <button
        type="button"
        class="main-header__mobile-toggle lg:hidden"
        @click="openMobileMenu"
        aria-label="Open menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      <!-- Logo -->
      <a href="/" class="main-header__logo">
        <img 
          v-if="logoUrl"
          :src="logoUrl" 
          :alt="shopName"
          class="h-8 md:h-10"
        >
        <span v-else class="text-xl font-bold">{{ shopName }}</span>
      </a>
      
      <!-- Desktop Navigation -->
      <nav class="main-header__nav hidden lg:flex">
        <a 
          v-for="link in navigationLinks" 
          :key="link.url"
          :href="link.url"
          class="nav-link"
        >
          {{ link.title }}
        </a>
      </nav>
      
      <!-- Actions -->
      <div class="main-header__actions">
        <!-- Search -->
        <button
          type="button"
          class="action-button hidden md:flex"
          @click="toggleSearch"
          aria-label="Search"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        
        <!-- Account -->
        <a :href="accountUrl" class="action-button" aria-label="Account">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </a>
        
        <!-- Cart -->
        <button
          type="button"
          class="action-button relative"
          @click="openCart"
          aria-label="Cart"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span v-if="cartCount > 0" class="cart-count">{{ cartCount }}</span>
        </button>
      </div>
    </div>
    
    <!-- Search overlay -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="searchOpen" class="search-overlay" @click.self="toggleSearch">
          <div class="search-overlay__container">
            <form action="/search" method="get" class="search-form">
              <input
                ref="searchInput"
                type="search"
                name="q"
                placeholder="Search products..."
                class="search-input"
                @keyup.esc="toggleSearch"
              >
              <button type="submit" class="search-submit">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
            <button
              type="button"
              class="search-close"
              @click="toggleSearch"
              aria-label="Close search"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  shopName: {
    type: String,
    default: 'Orion Store'
  },
  logoUrl: {
    type: String,
    default: ''
  },
  navigationLinks: {
    type: Array,
    default: () => []
  },
  customer: {
    type: Object,
    default: null
  }
})

const searchInput = ref(null)
const searchOpen = ref(false)
const cartCount = ref(0)

// Account URL logic - use proper Shopline routes
const accountUrl = computed(() => {
  if (props.customer) {
    return Shopline?.routes?.account || '/account'
  } else {
    return Shopline?.routes?.account_login || '/account/login'
  }
})

const openMobileMenu = () => {
  document.dispatchEvent(new CustomEvent('mobile-menu:open'))
}

const openCart = () => {
  document.dispatchEvent(new CustomEvent('cart:open'))
}

const toggleSearch = async () => {
  searchOpen.value = !searchOpen.value
  
  if (searchOpen.value) {
    await nextTick()
    searchInput.value?.focus()
  }
}

const updateCartCount = () => {
  if (window.OrionCart?.state) {
    cartCount.value = window.OrionCart.state.itemCount || 0
  }
}

onMounted(() => {
  document.addEventListener('cart:updated', updateCartCount)
  
  // Initial cart count
  updateCartCount()
})

onUnmounted(() => {
  document.removeEventListener('cart:updated', updateCartCount)
})
</script>

<style scoped>
.main-header {
  @apply bg-white border-b border-gray-200;
}

.main-header__wrapper {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between;
}

.main-header__mobile-toggle {
  @apply p-2 -ml-2 text-gray-700 hover:text-gray-900 transition-colors;
}

.main-header__logo {
  @apply flex items-center;
}

.main-header__nav {
  @apply flex items-center space-x-8;
}

.nav-link {
  @apply text-gray-700 hover:text-gray-900 font-medium transition-colors;
}

.main-header__actions {
  @apply flex items-center space-x-4;
}

.action-button {
  @apply p-2 text-gray-700 hover:text-gray-900 transition-colors;
}

.cart-count {
  @apply absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center;
}

.search-overlay {
  @apply fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20;
}

.search-overlay__container {
  @apply bg-white shadow-xl max-w-2xl w-full mx-4 relative;
  border-radius: var(--card-radius, 8px);
}

.search-form {
  @apply flex items-center;
}

.search-input {
  @apply flex-1 px-6 py-4 text-lg border-0 focus:outline-none focus:ring-0;
}

.search-submit {
  @apply p-4 text-gray-700 hover:text-gray-900;
}

.search-close {
  @apply absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
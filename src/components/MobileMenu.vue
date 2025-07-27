<template>
  <div>
    <!-- Root element to handle attributes -->
    <Teleport to="body">
      <Transition name="menu">
        <div v-if="isOpen" class="fixed inset-0 z-50 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <Transition name="fade">
            <div
              v-if="isOpen"
              class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              @click="closeMenu"
            ></div>
          </Transition>

          <div class="fixed inset-y-0 left-0 max-w-full flex pointer-events-none">
            <Transition name="slide" appear>
              <div v-if="isOpen" class="w-screen max-w-sm pointer-events-auto">
                <div class="h-full flex flex-col bg-white shadow-xl transition-shadow duration-300">
                  <!-- Header -->
                  <div class="flex items-center justify-between px-4 py-6 border-b">
                    <h2 class="text-lg font-medium text-gray-900">Menu</h2>
                    <button
                      type="button"
                      class="-m-1.5 p-1.5 text-gray-400 hover:text-gray-500"
                      @click="closeMenu"
                    >
                      <span class="sr-only">Close menu</span>
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <!-- Navigation -->
                  <div class="flex-1 overflow-y-auto">
                    <nav class="px-4 py-4">
                      <ul class="space-y-1">
                        <li v-if="menuItems.length === 0">
                          <a href="/collections/all" class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50">
                            Shop
                          </a>
                        </li>
                        <li v-for="item in menuItems" :key="item.id || item.title">
                          <!-- Item with nested links -->
                          <div v-if="item.links && item.links.length">
                            <button
                              @click="toggleSubmenu(item.title)"
                              class="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                            >
                              <span>{{ item.title }}</span>
                              <svg
                                class="h-5 w-5 transition-transform duration-200"
                                :class="{ 'rotate-180': expandedMenus.includes(item.title) }"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            <Transition name="submenu">
                              <ul
                                v-if="expandedMenus.includes(item.title)"
                                class="mt-1 space-y-1"
                              >
                                <li v-for="child in item.links" :key="child.id || child.title">
                                  <!-- Child with nested links -->
                                  <div v-if="child.links && child.links.length">
                                    <button
                                      @click="toggleSubmenu(`${item.title}-${child.title}`)"
                                      class="w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                    >
                                      <span>{{ child.title }}</span>
                                      <svg
                                        class="h-4 w-4 transition-transform duration-200"
                                        :class="{ 'rotate-180': expandedMenus.includes(`${item.title}-${child.title}`) }"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                      </svg>
                                    </button>
                                    <Transition name="submenu">
                                      <ul
                                        v-if="expandedMenus.includes(`${item.title}-${child.title}`)"
                                        class="mt-1 space-y-1"
                                      >
                                        <li v-for="grandchild in child.links" :key="grandchild.id || grandchild.title">
                                          <a
                                            :href="grandchild.url"
                                            class="block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50"
                                            @click="closeMenu"
                                          >
                                            {{ grandchild.title }}
                                          </a>
                                        </li>
                                      </ul>
                                    </Transition>
                                  </div>
                                  <!-- Child without nested links -->
                                  <a
                                    v-else
                                    :href="child.url"
                                    class="block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                    @click="closeMenu"
                                  >
                                    {{ child.title }}
                                  </a>
                                </li>
                              </ul>
                            </Transition>
                          </div>
                          <!-- Item without nested links -->
                          <a
                            v-else
                            :href="item.url"
                            class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                            @click="closeMenu"
                          >
                            {{ item.title }}
                          </a>
                        </li>
                      </ul>
                    </nav>

                    <!-- Account Links -->
                    <div class="px-4 py-4 border-t">
                      <div class="space-y-1">
                        <a
                          :href="customerUrl"
                          class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                        >
                          <span class="flex items-center">
                            <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Account
                          </span>
                        </a>
                        <a
                          href="/search"
                          class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                        >
                          <span class="flex items-center">
                            <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Search
                          </span>
                        </a>
                      </div>
                    </div>

                    <!-- Language/Currency Selector (if needed) -->
                    <div v-if="showLocalization" class="px-4 py-4 border-t">
                      <slot name="localization" />
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  menuItems: {
    type: Array,
    default: () => []
  },
  customerUrl: {
    type: String,
    default: null
  },
  showLocalization: {
    type: Boolean,
    default: false
  }
})

// Get menu data from global variable if props are empty
const menuItems = computed(() => {
  if (props.menuItems && props.menuItems.length > 0) {
    return props.menuItems
  }
  return window.mobileMenuData || []
})

// Get customer URL from global or props
const customerUrl = computed(() => {
  return props.customerUrl || window.mobileMenuCustomerUrl || '/account'
})

// Get localization setting from global or props
const showLocalization = computed(() => {
  return props.showLocalization || window.mobileMenuShowLocalization || false
})

const isOpen = ref(false)
const expandedMenus = ref([])

const openMenu = () => {
  console.log('openMenu called')
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const toggleSubmenu = (title) => {
  const index = expandedMenus.value.indexOf(title)
  if (index > -1) {
    expandedMenus.value.splice(index, 1)
  } else {
    expandedMenus.value.push(title)
  }
}

// Expose methods to parent
defineExpose({
  openMenu,
  closeMenu
})

onMounted(() => {
  console.log('MobileMenu component mounted')
  console.log('Menu items:', menuItems.value)
  document.addEventListener('mobile-menu:open', openMenu)
  document.addEventListener('mobile-menu:close', closeMenu)
  
  // Handle escape key
  const handleEscape = (e) => {
    if (e.key === 'Escape' && isOpen.value) {
      closeMenu()
    }
  }
  document.addEventListener('keydown', handleEscape)
  
  // Cleanup
  onUnmounted(() => {
    document.removeEventListener('mobile-menu:open', openMenu)
    document.removeEventListener('mobile-menu:close', closeMenu)
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
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

.slide-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
}

.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0.8;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0.8;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.submenu-enter-active,
.submenu-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}

.submenu-enter-from,
.submenu-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}
</style>
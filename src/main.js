import { createApp, defineCustomElement } from 'vue'
import Button from './components/Button.vue'
import CartDrawer from './components/CartDrawer.vue'
import MobileMenu from './components/MobileMenu.vue'
import ProductVariantPicker from './components/ProductVariantPicker.vue'
import QuantitySelector from './components/QuantitySelector.vue'
import StickyHeader from './components/StickyHeader.vue'
import MainHeader from './components/MainHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import ProductCard from './components/ProductCard.vue' // Mounted as Vue app, not custom element
import CollectionFilters from './components/CollectionFilters.vue'
import CollectionGrid from './components/CollectionGrid.vue'
import CollectionSort from './components/CollectionSort.vue'
import ProductGallery from './components/ProductGallery.vue'
import ProductInfo from './components/ProductInfo.vue'
import CartItem from './components/CartItem.vue'
import CartSummary from './components/CartSummary.vue'
import SlideshowBanner from './components/SlideshowBanner.vue'
import TestimonialsCarousel from './components/TestimonialsCarousel.vue'
import VideoPlayer from './components/VideoPlayer.vue'
import PasswordModal from './components/PasswordModal.vue'
import SearchOverlay from './components/SearchOverlay.vue'

// Define custom elements with global button settings
const ButtonElement = defineCustomElement({
  ...Button,
  props: {
    ...Button.props,
    // Inject global settings as default props
    buttonRadius: {
      type: [String, Number],
      default: () => Shopline?.theme?.settings?.button_border_radius || 6
    },
    primaryBg: {
      type: String,
      default: () => Shopline?.theme?.settings?.button_primary_bg || '#dc2626'
    },
    primaryBgHover: {
      type: String,
      default: () => Shopline?.theme?.settings?.button_primary_bg_hover || '#b91c1c'
    },
    primaryText: {
      type: String,
      default: () => Shopline?.theme?.settings?.button_primary_text || '#ffffff'
    },
    secondaryBg: {
      type: String,
      default: () => Shopline?.theme?.settings?.button_secondary_bg || '#ffffff'
    },
    secondaryBgHover: {
      type: String,
      default: () => Shopline?.theme?.settings?.button_secondary_bg_hover || '#f9fafb'
    },
    secondaryText: {
      type: String,
      default: () => Shopline?.theme?.settings?.button_secondary_text || '#374151'
    },
    secondaryBorder: {
      type: String,
      default: () => Shopline?.theme?.settings?.button_secondary_border || '#d1d5db'
    }
  }
})
const CartDrawerElement = defineCustomElement(CartDrawer)
const MobileMenuElement = defineCustomElement(MobileMenu)
const ProductVariantPickerElement = defineCustomElement(ProductVariantPicker)
const QuantitySelectorElement = defineCustomElement(QuantitySelector)
const StickyHeaderElement = defineCustomElement(StickyHeader)
const MainHeaderElement = defineCustomElement(MainHeader)
const SiteFooterElement = defineCustomElement(SiteFooter)
// Don't use custom element for ProductCard due to style isolation
// const ProductCardElement = defineCustomElement(ProductCard)
const CollectionFiltersElement = defineCustomElement(CollectionFilters)
const CollectionGridElement = defineCustomElement(CollectionGrid)
// Don't use custom element for CollectionSort due to style isolation
// const CollectionSortElement = defineCustomElement(CollectionSort)
const ProductGalleryElement = defineCustomElement(ProductGallery)
const ProductInfoElement = defineCustomElement(ProductInfo)
const CartItemElement = defineCustomElement(CartItem)
const CartSummaryElement = defineCustomElement(CartSummary)
const SlideshowBannerElement = defineCustomElement(SlideshowBanner)
const TestimonialsCarouselElement = defineCustomElement(TestimonialsCarousel)
const VideoPlayerElement = defineCustomElement(VideoPlayer)
const PasswordModalElement = defineCustomElement(PasswordModal)
const SearchOverlayElement = defineCustomElement(SearchOverlay)

// Register custom elements
customElements.define('orion-button', ButtonElement)
customElements.define('cart-drawer', CartDrawerElement)
customElements.define('mobile-menu', MobileMenuElement)
customElements.define('product-variant-picker', ProductVariantPickerElement)
customElements.define('quantity-selector', QuantitySelectorElement)
customElements.define('sticky-header', StickyHeaderElement)
customElements.define('main-header', MainHeaderElement)
customElements.define('site-footer', SiteFooterElement)
// customElements.define('product-card', ProductCardElement)
customElements.define('collection-filters', CollectionFiltersElement)
customElements.define('collection-grid', CollectionGridElement)
// customElements.define('collection-sort', CollectionSortElement)
customElements.define('product-gallery', ProductGalleryElement)
customElements.define('product-info', ProductInfoElement)
customElements.define('cart-item', CartItemElement)
customElements.define('cart-summary', CartSummaryElement)
customElements.define('slideshow-banner', SlideshowBannerElement)
customElements.define('testimonials-carousel', TestimonialsCarouselElement)
customElements.define('video-player', VideoPlayerElement)
customElements.define('password-modal', PasswordModalElement)
customElements.define('search-overlay', SearchOverlayElement)

// Mount Vue components on regular HTML elements
document.addEventListener('DOMContentLoaded', () => {
  // Theme settings are available via Shopline.theme.settings
  
  // Button settings are available via Shopline.theme.settings
  
  // Mount MainHeader components
  const mainHeaderMounts = document.querySelectorAll('.main-header-mount')
  mainHeaderMounts.forEach(mount => {
    const app = createApp(MainHeader, {
      shopName: mount.dataset.shopName || 'Orion Store',
      logoUrl: mount.dataset.logoUrl || '',
      navigationLinks: JSON.parse(mount.dataset.navigationLinks || '[]')
    })
    app.mount(mount)
  })


  // Mount CartDrawer components
  const cartDrawerMounts = document.querySelectorAll('.cart-drawer-mount')
  cartDrawerMounts.forEach(mount => {
    const app = createApp(CartDrawer)
    app.mount(mount)
  })

  // Mount ProductCard components (as Vue apps to avoid style isolation)
  const productCardMounts = document.querySelectorAll('product-card')
  productCardMounts.forEach(mount => {
    // Extract props from attributes
    const props = {
      productId: mount.getAttribute('product-id'),
      variantId: mount.getAttribute('variant-id'),
      title: mount.getAttribute('title'),
      handle: mount.getAttribute('handle'),
      vendor: mount.getAttribute('vendor'),
      price: mount.getAttribute('price'),
      compareAtPrice: mount.getAttribute('compare-at-price'),
      image: mount.getAttribute('image'),
      available: mount.getAttribute(':available') === 'true'
    }
    
    const app = createApp(ProductCard, props)
    app.mount(mount)
  })

  // Mount CollectionSort components (as Vue apps to avoid style isolation)
  const collectionSortMounts = document.querySelectorAll('collection-sort')
  collectionSortMounts.forEach(mount => {
    const props = {
      collectionHandle: mount.getAttribute('collection-handle'),
      currentSort: mount.getAttribute('current-sort') || 'manual'
    }
    
    const app = createApp(CollectionSort, props)
    app.mount(mount)
  })

  // Initialize sticky header behavior
  const stickyHeaders = document.querySelectorAll('.sticky-header')
  stickyHeaders.forEach(header => {
    if (header.dataset.sticky === 'true') {
      let lastScrollY = window.scrollY
      
      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY
        const isTransparent = header.dataset.transparent === 'true'
        const hideOnScroll = header.dataset.hideOnScroll === 'true'
        
        if (currentScrollY > 100 && !isTransparent) {
          header.classList.add('sticky', 'top-0', 'shadow-md')
          header.style.backgroundColor = header.dataset.stickyBackground || '#ffffff'
        } else {
          header.classList.remove('sticky', 'shadow-md')
          header.style.backgroundColor = ''
        }
        
        if (hideOnScroll) {
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)'
          } else {
            header.style.transform = 'translateY(0)'
          }
        }
        
        lastScrollY = currentScrollY
      })
    }
  })

  // Cart state management
  window.OrionCart = {
    state: {
      isOpen: false,
      items: [],
      totalPrice: 0,
      itemCount: 0
    },
    
    async fetchCart() {
      try {
        const response = await fetch((Shopline?.routes?.cart || '/cart') + '.js')
        const cart = await response.json()
        
        // Note: Cart images from the API are already processed by Shopline
        // Manual URL parameters don't work with Shopline's CDN for PNG files
        
        this.state.items = cart.items
        this.state.totalPrice = cart.total_price
        this.state.itemCount = cart.item_count
        document.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }))
        return cart
      } catch (error) {
        console.error('Failed to fetch cart:', error)
      }
    },
    
    async addItem(data) {
      try {
        let response
        
        // Handle both FormData and JSON formats
        if (data instanceof FormData) {
          // Legacy FormData format
          response = await fetch(Shopline?.routes?.cart_add || '/cart/add', {
            method: 'POST',
            body: data
          })
        } else {
          // New Shopline AJAX API format
          response = await fetch('/api/carts/ajax-cart/add.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(data)
          })
        }
        
        const result = await response.json()
        await this.fetchCart()
        this.openDrawer()
        return result
      } catch (error) {
        console.error('Failed to add item to cart:', error)
      }
    },
    
    async updateItem(variantId, quantity, lineNumber = null) {
      try {
        // Use Shopline's change API
        const requestData = {
          quantity: quantity
        }
        
        // Prefer line number if available, otherwise use variant ID
        if (lineNumber !== null) {
          requestData.line = lineNumber
        } else {
          requestData.id = variantId
        }
        
        const response = await fetch('/api/carts/ajax-cart/change.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(requestData)
        })
        
        const result = await response.json()
        await this.fetchCart()
        return result
      } catch (error) {
        console.error('Failed to update cart:', error)
      }
    },
    
    async removeItem(variantId, lineNumber = null) {
      return this.updateItem(variantId, 0, lineNumber)
    },
    
    openDrawer() {
      this.state.isOpen = true
      document.dispatchEvent(new CustomEvent('cart:open'))
    },
    
    closeDrawer() {
      this.state.isOpen = false
      document.dispatchEvent(new CustomEvent('cart:close'))
    }
  }
  
  // Initialize cart on page load
  window.OrionCart.fetchCart()
  
  // Update cart count in header
  document.addEventListener('cart:updated', (e) => {
    const cartCount = e.detail.item_count
    const cartCountElements = document.querySelectorAll('.cart-count')
    cartCountElements.forEach(el => {
      if (cartCount > 0) {
        el.textContent = cartCount
        el.style.opacity = '1'
      } else {
        el.style.opacity = '0'
      }
    })
  })
  
  
})
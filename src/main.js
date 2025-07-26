import { createApp, defineCustomElement } from 'vue'
import CartDrawer from './components/CartDrawer.vue'
import MobileMenu from './components/MobileMenu.vue'
import ProductVariantPicker from './components/ProductVariantPicker.vue'
import QuantitySelector from './components/QuantitySelector.vue'
import StickyHeader from './components/StickyHeader.vue'
import MainHeader from './components/MainHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import ProductCard from './components/ProductCard.vue'
import CollectionFilters from './components/CollectionFilters.vue'
import CollectionGrid from './components/CollectionGrid.vue'
import ProductGallery from './components/ProductGallery.vue'
import ProductInfo from './components/ProductInfo.vue'
import CartItem from './components/CartItem.vue'
import CartSummary from './components/CartSummary.vue'
import SlideshowBanner from './components/SlideshowBanner.vue'
import TestimonialsCarousel from './components/TestimonialsCarousel.vue'
import VideoPlayer from './components/VideoPlayer.vue'

// Define custom elements
const CartDrawerElement = defineCustomElement(CartDrawer)
const MobileMenuElement = defineCustomElement(MobileMenu)
const ProductVariantPickerElement = defineCustomElement(ProductVariantPicker)
const QuantitySelectorElement = defineCustomElement(QuantitySelector)
const StickyHeaderElement = defineCustomElement(StickyHeader)
const MainHeaderElement = defineCustomElement(MainHeader)
const SiteFooterElement = defineCustomElement(SiteFooter)
const ProductCardElement = defineCustomElement(ProductCard)
const CollectionFiltersElement = defineCustomElement(CollectionFilters)
const CollectionGridElement = defineCustomElement(CollectionGrid)
const ProductGalleryElement = defineCustomElement(ProductGallery)
const ProductInfoElement = defineCustomElement(ProductInfo)
const CartItemElement = defineCustomElement(CartItem)
const CartSummaryElement = defineCustomElement(CartSummary)
const SlideshowBannerElement = defineCustomElement(SlideshowBanner)
const TestimonialsCarouselElement = defineCustomElement(TestimonialsCarousel)
const VideoPlayerElement = defineCustomElement(VideoPlayer)

// Register custom elements
customElements.define('cart-drawer', CartDrawerElement)
customElements.define('mobile-menu', MobileMenuElement)
customElements.define('product-variant-picker', ProductVariantPickerElement)
customElements.define('quantity-selector', QuantitySelectorElement)
customElements.define('sticky-header', StickyHeaderElement)
customElements.define('main-header', MainHeaderElement)
customElements.define('site-footer', SiteFooterElement)
customElements.define('product-card', ProductCardElement)
customElements.define('collection-filters', CollectionFiltersElement)
customElements.define('collection-grid', CollectionGridElement)
customElements.define('product-gallery', ProductGalleryElement)
customElements.define('product-info', ProductInfoElement)
customElements.define('cart-item', CartItemElement)
customElements.define('cart-summary', CartSummaryElement)
customElements.define('slideshow-banner', SlideshowBannerElement)
customElements.define('testimonials-carousel', TestimonialsCarouselElement)
customElements.define('video-player', VideoPlayerElement)

// Initialize Vue apps if needed
document.addEventListener('DOMContentLoaded', () => {
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
        const response = await fetch(window.routes.cart_url + '.js')
        const cart = await response.json()
        this.state.items = cart.items
        this.state.totalPrice = cart.total_price
        this.state.itemCount = cart.item_count
        document.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }))
        return cart
      } catch (error) {
        console.error('Failed to fetch cart:', error)
      }
    },
    
    async addItem(formData) {
      try {
        const response = await fetch(window.routes.cart_add_url, {
          method: 'POST',
          body: formData
        })
        const result = await response.json()
        await this.fetchCart()
        this.openDrawer()
        return result
      } catch (error) {
        console.error('Failed to add item to cart:', error)
      }
    },
    
    async updateItem(key, quantity) {
      try {
        const formData = new FormData()
        formData.append('updates[' + key + ']', quantity)
        
        const response = await fetch(window.routes.cart_update_url, {
          method: 'POST',
          body: formData
        })
        const result = await response.json()
        await this.fetchCart()
        return result
      } catch (error) {
        console.error('Failed to update cart:', error)
      }
    },
    
    async removeItem(key) {
      return this.updateItem(key, 0)
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
        el.style.display = 'flex'
      } else {
        el.style.display = 'none'
      }
    })
  })
  
})
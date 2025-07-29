import { createApp, defineCustomElement } from 'vue';
import Button from './components/Button.vue';
import CartDrawer from './components/CartDrawer.vue';
import MobileMenu from './components/MobileMenu.vue';
import ProductVariantPicker from './components/ProductVariantPicker.vue';
import QuantitySelector from './components/QuantitySelector.vue';
import MainHeader from './components/MainHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
import ProductCard from './components/ProductCard.vue'; // Mounted as Vue app, not custom element
import CollectionFilters from './components/CollectionFilters.vue';
import CollectionGrid from './components/CollectionGrid.vue';
import CollectionSort from './components/CollectionSort.vue';
import CollectionFilterDrawer from './components/CollectionFilterDrawer.vue';
import ProductGallery from './components/ProductGallery.vue';
import ProductInfo from './components/ProductInfo.vue';
import CartItem from './components/CartItem.vue';
import CartSummary from './components/CartSummary.vue';
import SlideshowBanner from './components/SlideshowBanner.vue';
import TestimonialsCarousel from './components/TestimonialsCarousel.vue';
import VideoPlayer from './components/VideoPlayer.vue';
import PasswordModal from './components/PasswordModal.vue';
import SearchOverlay from './components/SearchOverlay.vue';
import ArticleCard from './components/ArticleCard.vue';

// Define custom elements with global button settings
const ButtonElement = defineCustomElement({
	...Button,
	props: {
		...Button.props,
		// Inject global settings as default props
		buttonRadius: {
			type: [String, Number],
			default: () => {
				const radius = Shopline?.theme?.settings?.button_border_radius;
				return radius ? `${radius}px` : '6px';
			},
		},
		primaryBg: {
			type: String,
			default: () =>
				Shopline?.theme?.settings?.button_primary_bg || '#dc2626',
		},
		primaryBgHover: {
			type: String,
			default: () =>
				Shopline?.theme?.settings?.button_primary_bg_hover || '#b91c1c',
		},
		primaryText: {
			type: String,
			default: () =>
				Shopline?.theme?.settings?.button_primary_text || '#ffffff',
		},
		secondaryBg: {
			type: String,
			default: () =>
				Shopline?.theme?.settings?.button_secondary_bg || '#ffffff',
		},
		secondaryBgHover: {
			type: String,
			default: () =>
				Shopline?.theme?.settings?.button_secondary_bg_hover ||
				'#f9fafb',
		},
		secondaryText: {
			type: String,
			default: () =>
				Shopline?.theme?.settings?.button_secondary_text || '#374151',
		},
		secondaryBorder: {
			type: String,
			default: () =>
				Shopline?.theme?.settings?.button_secondary_border || '#d1d5db',
		},
	},
});
const CartDrawerElement = defineCustomElement(CartDrawer);
const MobileMenuElement = defineCustomElement(MobileMenu);
const ProductVariantPickerElement = defineCustomElement(ProductVariantPicker);
const QuantitySelectorElement = defineCustomElement(QuantitySelector);
const MainHeaderElement = defineCustomElement(MainHeader);
const SiteFooterElement = defineCustomElement(SiteFooter);
// Don't use custom element for ProductCard due to style isolation
// const ProductCardElement = defineCustomElement(ProductCard)
const CollectionFiltersElement = defineCustomElement(CollectionFilters);
const CollectionGridElement = defineCustomElement(CollectionGrid);
// Don't use custom element for CollectionSort due to style isolation
// const CollectionSortElement = defineCustomElement(CollectionSort)
const ProductGalleryElement = defineCustomElement(ProductGallery);
const ProductInfoElement = defineCustomElement(ProductInfo);
const CartItemElement = defineCustomElement(CartItem);
const CartSummaryElement = defineCustomElement(CartSummary);
const SlideshowBannerElement = defineCustomElement(SlideshowBanner);
const TestimonialsCarouselElement = defineCustomElement(TestimonialsCarousel);
const VideoPlayerElement = defineCustomElement(VideoPlayer);
const PasswordModalElement = defineCustomElement(PasswordModal);
const SearchOverlayElement = defineCustomElement(SearchOverlay);

// Register custom elements
// Don't use custom element for Button due to CSS variable access
// customElements.define('orion-button', ButtonElement)
customElements.define('cart-drawer', CartDrawerElement);
customElements.define('mobile-menu', MobileMenuElement);
customElements.define('product-variant-picker', ProductVariantPickerElement);
customElements.define('quantity-selector', QuantitySelectorElement);
customElements.define('main-header', MainHeaderElement);
customElements.define('site-footer', SiteFooterElement);
// customElements.define('product-card', ProductCardElement)
customElements.define('collection-filters', CollectionFiltersElement);
customElements.define('collection-grid', CollectionGridElement);
// customElements.define('collection-sort', CollectionSortElement)
customElements.define('product-gallery', ProductGalleryElement);
customElements.define('product-info', ProductInfoElement);
customElements.define('cart-item', CartItemElement);
customElements.define('cart-summary', CartSummaryElement);
customElements.define('slideshow-banner', SlideshowBannerElement);
customElements.define('testimonials-carousel', TestimonialsCarouselElement);
customElements.define('video-player', VideoPlayerElement);
customElements.define('password-modal', PasswordModalElement);
customElements.define('search-overlay', SearchOverlayElement);

// Function to mount all Vue components
function mountVueComponents(container = document) {
	// Mount MainHeader components
	const mainHeaderMounts = container.querySelectorAll('.main-header-mount');
	mainHeaderMounts.forEach((mount) => {
		// Skip if already mounted
		if (mount._vueApp) return;

		const app = createApp(MainHeader, {
			shopName: mount.dataset.shopName || 'Orion Store',
			logoUrl: mount.dataset.logoUrl || '',
			navigationLinks: JSON.parse(mount.dataset.navigationLinks || '[]'),
		});
		mount._vueApp = app;
		app.mount(mount);
	});

	// Mount CartDrawer components
	const cartDrawerMounts = container.querySelectorAll('.cart-drawer-mount');
	cartDrawerMounts.forEach((mount) => {
		if (mount._vueApp) return;

		const app = createApp(CartDrawer);
		mount._vueApp = app;
		app.mount(mount);
	});

	// Mount ProductCard components (as Vue apps to avoid style isolation)
	const productCardMounts = container.querySelectorAll('product-card');
	productCardMounts.forEach((mount) => {
		if (mount._vueApp) return;

		// Extract props from attributes
		const props = {
			productId: mount.getAttribute('product-id'),
			variantId: mount.getAttribute('variant-id'),
			title: mount.getAttribute('title'),
			handle: mount.getAttribute('handle'),
			url: mount.getAttribute('url'),
			vendor: mount.getAttribute('vendor'),
			price: mount.getAttribute('price'),
			compareAtPrice: mount.getAttribute('compare-at-price'),
			image: mount.getAttribute('image'),
			available: mount.getAttribute(':available') === 'true',
		};

		const app = createApp(ProductCard, props);
		mount._vueApp = app;
		app.mount(mount);
	});

	// Mount CollectionSort components (as Vue apps to avoid style isolation)
	const collectionSortMounts = container.querySelectorAll('collection-sort');
	collectionSortMounts.forEach((mount) => {
		if (mount._vueApp) return;

		const props = {
			collectionHandle: mount.getAttribute('collection-handle'),
			currentSort: mount.getAttribute('current-sort') || 'manual',
		};

		const app = createApp(CollectionSort, props);
		mount._vueApp = app;
		app.mount(mount);
	});

	// Mount Button components (as Vue apps to access CSS variables)
	const buttonMounts = container.querySelectorAll('orion-button');
	buttonMounts.forEach((mount) => {
		if (mount._vueApp) return;

		const props = {
			variant: mount.getAttribute('variant') || 'primary',
			size: mount.getAttribute('size') || 'medium',
			fullWidth: mount.hasAttribute('full-width'),
			href: mount.getAttribute('href'),
			type: mount.getAttribute('type') || 'button',
			disabled: mount.hasAttribute('disabled'),
			loading: mount.hasAttribute('loading'),
			rounded: mount.getAttribute('rounded') || 'default',
		};

		const app = createApp(
			{
				components: { Button },
				template: `<Button v-bind="$attrs">${mount.innerHTML}</Button>`,
			},
			props
		);

		mount._vueApp = app;
		app.mount(mount);
	});

	// Mount CollectionFilterDrawer components (as Vue apps to avoid style isolation)
	const filterDrawerMounts = container.querySelectorAll(
		'collection-filter-drawer'
	);
	filterDrawerMounts.forEach((mount) => {
		if (mount._vueApp) return;

		const props = {
			collectionHandle: mount.getAttribute('collection-handle'),
			products: JSON.parse(mount.getAttribute(':products') || '[]'),
		};

		const app = createApp(CollectionFilterDrawer, props);
		mount._vueApp = app;
		app.mount(mount);
	});

	// Mount CollectionFilterSidebar components (using CollectionFilters component)
	const filterSidebarMounts = container.querySelectorAll(
		'collection-filter-sidebar'
	);
	filterSidebarMounts.forEach((mount) => {
		if (mount._vueApp) return;

		const props = {
			collectionHandle: mount.getAttribute('collection-handle'),
			products: JSON.parse(mount.getAttribute(':products') || '[]'),
			showSort: mount.getAttribute(':show-sort') === 'true',
		};

		const app = createApp(CollectionFilters, props);
		mount._vueApp = app;
		app.mount(mount);
	});

	// Mount ArticleCard components (as Vue apps to avoid style isolation)
	const articleCardMounts = container.querySelectorAll('article-card');
	articleCardMounts.forEach((mount) => {
		if (mount._vueApp) return;

		const props = {
			title: mount.getAttribute('title'),
			url: mount.getAttribute('url'),
			excerpt: mount.getAttribute('excerpt'),
			content: mount.getAttribute('content'),
			author: mount.getAttribute('author'),
			publishedAt: mount.getAttribute('published-at'),
			rawPublishedAt: mount.getAttribute('raw-published-at'),
			image: mount.getAttribute('image'),
			imageAlt: mount.getAttribute('image-alt'),
			tags: JSON.parse(mount.getAttribute('tags') || '[]'),
			imageRatio: mount.getAttribute('image-ratio') || 'landscape',
			showImage: mount.getAttribute('show-image') === 'true',
			showAuthor: mount.getAttribute('show-author') === 'true',
			showDate: mount.getAttribute('show-date') === 'true',
			showTags: mount.getAttribute('show-tags') === 'true',
		};

		const app = createApp(ArticleCard, props);
		mount._vueApp = app;
		app.mount(mount);
	});

	// Initialize sticky header behavior (only once, not per mount)
	if (container === document) {
		const headers = document.querySelectorAll('.site-header');
		
		headers.forEach((header) => {
			if (
				header.dataset.sticky === 'true' &&
				!header._stickyInitialized
			) {
				header._stickyInitialized = true;
				
				// Check if transparent header is enabled
				const isTransparent = header.dataset.transparent === 'true';
				// Check if we're on the homepage by template class
				const isHomepage = document.body.classList.contains('template-index');
				
				// Create spacer element to prevent content jump
				const spacer = document.createElement('div');
				spacer.className = 'sticky-spacer';
				header.parentNode.insertBefore(spacer, header.nextSibling);
				
				// Set initial spacer height based on header type
				if (isTransparent && isHomepage) {
					// For transparent headers, add the class immediately
					header.classList.add('transparent-header');
					spacer.style.height = header.offsetHeight + 'px'; // Still need spacer for fixed positioning
				} else {
					// For normal sticky headers, no spacer needed initially (using position: sticky)
					spacer.style.height = '0px';
				}
				
				let lastScrollY = 0;
				let ticking = false;
				let headerHeight = header.offsetHeight;

				// Update spacer height
				const updateSpacerHeight = () => {
					headerHeight = header.offsetHeight;
					spacer.style.height = headerHeight + 'px';
				};

				function updateHeader() {
					const currentScrollY = window.scrollY;
					const hideOnScroll = header.dataset.hideOnScroll === 'true';
					const isTransparent = header.dataset.transparent === 'true';
					const stickyBackground = header.dataset.stickyBackground || '#ffffff';

					// Check if we're on the homepage
					const isHomepage = document.body.classList.contains('template-index');

					// Handle transparent header on homepage
					if (isTransparent && isHomepage) {
						if (currentScrollY > 50) {
							// Remove transparent styles when scrolled
							header.classList.remove('transparent-header');
							header.classList.add('scrolled');
							header.style.backgroundColor = stickyBackground;
							header.style.borderBottomColor = '';
						} else {
							// Apply transparent styles at top
							header.classList.add('transparent-header');
							header.classList.remove('scrolled');
							header.style.backgroundColor = 'transparent';
							header.style.borderBottomColor = 'transparent';
						}
					} else {
						// Normal non-transparent behavior
						if (currentScrollY > 0) {
							// Add scrolled class and update spacer when scrolling starts
							if (!header.classList.contains('scrolled')) {
								header.classList.add('scrolled');
								updateSpacerHeight(); // Update spacer when switching to fixed
							}
							header.style.backgroundColor = stickyBackground;
						} else {
							// At top position
							if (header.classList.contains('scrolled')) {
								header.classList.remove('scrolled');
								spacer.style.height = '0px'; // Remove spacer when back to sticky
							}
							header.style.backgroundColor = '';
						}
					}

					// Handle hide on scroll
					if (hideOnScroll) {
						const hideThreshold = 300; // Hide header after scrolling 300px
						
						if (currentScrollY > hideThreshold) {
							if (currentScrollY > lastScrollY) {
								// Scrolling down - hide header
								header.classList.add('hide-on-scroll');
								header.classList.remove('show-on-scroll');
							} else {
								// Scrolling up - show header
								header.classList.remove('hide-on-scroll');
								header.classList.add('show-on-scroll');
							}
						} else {
							// Above threshold, always show
							header.classList.remove('hide-on-scroll');
							header.classList.add('show-on-scroll');
						}
					}

					lastScrollY = currentScrollY;
					ticking = false;
				}

				window.addEventListener('scroll', function() {
					if (!ticking) {
						window.requestAnimationFrame(updateHeader);
						ticking = true;
					}
				});

				// Update spacer on resize
				window.addEventListener('resize', () => {
					updateSpacerHeight();
					
					const firstSection = document.querySelector(
						'#MainContent > .shopline-section:first-child, ' +
						'#MainContent > div[id^="shopline-section-"]:first-child, ' +
						'main > .shopline-section:first-child'
					);
					
					if (firstSection) {
						const headerHeight = header.offsetHeight;
						
						if (isTransparent && isHomepage) {
							// Update negative margin and padding for transparent header
							firstSection.style.marginTop = `-${headerHeight}px`;
							firstSection.style.paddingTop = `${headerHeight}px`;
						} else {
							// Check if it's a hero section
							const heroInner = firstSection.querySelector('.hero-banner');
							if (heroInner) {
								// Hero sections get both negative margin and padding
								firstSection.style.marginTop = `-${headerHeight}px`;
								firstSection.style.paddingTop = `${headerHeight}px`;
							} else {
								// Non-hero sections just get padding
								firstSection.style.paddingTop = `${headerHeight}px`;
								firstSection.style.marginTop = '0px';
							}
						}
					}
				});

				// Apply initial styles immediately
				const applyInitialStyles = () => {
					if (isTransparent && isHomepage) {
						header.classList.add('transparent-header');
						header.classList.remove('bg-white'); // Remove the default white background
						header.style.backgroundColor = 'transparent';
						header.style.borderBottomColor = 'transparent';
						header.style.position = 'absolute';
						header.style.width = '100%';
						spacer.style.height = '0px';
						
						// Apply negative margin to first section equal to header height
						const firstSection = document.querySelector(
							'#MainContent > .shopline-section:first-child, ' +
							'#MainContent > div[id^="shopline-section-"]:first-child, ' +
							'main > .shopline-section:first-child'
						);
						
						if (firstSection) {
							const headerHeight = header.offsetHeight;
							firstSection.style.marginTop = `-${headerHeight}px`;
							firstSection.style.paddingTop = `${headerHeight}px`;
						}
					} else {
						// Normal sticky headers - ensure spacer height is set
						updateSpacerHeight();
						
						// For sticky headers with hero sections, apply both negative margin and padding
						const firstSection = document.querySelector(
							'#MainContent > .shopline-section:first-child, ' +
							'#MainContent > div[id^="shopline-section-"]:first-child, ' +
							'main > .shopline-section:first-child'
						);
						
						if (firstSection) {
							const headerHeight = header.offsetHeight;
							// Check if it's a hero section
							const heroInner = firstSection.querySelector('.hero-banner');
							if (heroInner) {
								// Hero sections get both negative margin and padding
								firstSection.style.marginTop = `-${headerHeight}px`;
								firstSection.style.paddingTop = `${headerHeight}px`;
							} else {
								// Non-hero sections just get padding
								firstSection.style.paddingTop = `${headerHeight}px`;
								firstSection.style.marginTop = '0px';
							}
						}
					}
				};
				
				// Apply styles immediately and also after a small delay to ensure proper rendering
				applyInitialStyles();
				setTimeout(applyInitialStyles, 100);
				
				// Start monitoring scroll
				updateHeader();
			}
		});
	}
}

// Cart state management (initialize once)
if (!window.OrionCart) {
	window.OrionCart = {
		state: {
			isOpen: false,
			items: [],
			totalPrice: 0,
			itemCount: 0,
		},

		async fetchCart() {
			try {
				const response = await fetch(
					(Shopline?.routes?.cart || '/cart') + '.js'
				);
				const cart = await response.json();

				// Note: Cart images from the API are already processed by Shopline
				// Manual URL parameters don't work with Shopline's CDN for PNG files

				this.state.items = cart.items;
				this.state.totalPrice = cart.total_price;
				this.state.itemCount = cart.item_count;
				document.dispatchEvent(
					new CustomEvent('cart:updated', { detail: cart })
				);
				return cart;
			} catch (error) {
				console.error('Failed to fetch cart:', error);
			}
		},

		async addItem(data) {
			try {
				let response;

				// Handle both FormData and JSON formats
				if (data instanceof FormData) {
					// Legacy FormData format
					response = await fetch(
						Shopline?.routes?.cart_add || '/cart/add',
						{
							method: 'POST',
							body: data,
						}
					);
				} else {
					// New Shopline AJAX API format
					response = await fetch('/api/carts/ajax-cart/add.js', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
						},
						body: JSON.stringify(data),
					});
				}

				const result = await response.json();
				await this.fetchCart();
				this.openDrawer();
				return result;
			} catch (error) {
				console.error('Failed to add item to cart:', error);
			}
		},

		async updateItem(variantId, quantity, lineNumber = null) {
			try {
				// Use Shopline's change API
				const requestData = {
					quantity: quantity,
				};

				// Prefer line number if available, otherwise use variant ID
				if (lineNumber !== null) {
					requestData.line = lineNumber;
				} else {
					requestData.id = variantId;
				}

				const response = await fetch('/api/carts/ajax-cart/change.js', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
					body: JSON.stringify(requestData),
				});

				const result = await response.json();
				await this.fetchCart();
				return result;
			} catch (error) {
				console.error('Failed to update cart:', error);
			}
		},

		async removeItem(variantId, lineNumber = null) {
			return this.updateItem(variantId, 0, lineNumber);
		},

		openDrawer() {
			this.state.isOpen = true;
			document.dispatchEvent(new CustomEvent('cart:open'));
		},

		closeDrawer() {
			this.state.isOpen = false;
			document.dispatchEvent(new CustomEvent('cart:close'));
		},
	};

	// Initialize cart on page load
	window.OrionCart.fetchCart();

	// Update cart count in header
	document.addEventListener('cart:updated', (e) => {
		const cartCount = e.detail.item_count;
		const cartCountElements = document.querySelectorAll('.cart-count');
		cartCountElements.forEach((el) => {
			if (cartCount > 0) {
				el.textContent = cartCount;
				el.style.opacity = '1';
			} else {
				el.style.opacity = '0';
			}
		});
	});
}

// Expose mountVueComponents globally for infinite scroll
window.mountVueComponents = mountVueComponents;

// Mount Vue components on DOM ready
document.addEventListener('DOMContentLoaded', () => {
	mountVueComponents();
});

// Handle Shopline theme editor events
if (
	window.Shopline?.designMode ||
	window.location.href.includes('theme_preview_mode')
) {
	// Section load event - when a section is added or its settings change
	document.addEventListener('shopline:section:load', (event) => {
		const sectionElement =
			document.querySelector(
				`[data-section-id="${event.detail.sectionId}"]`
			) || document;
		mountVueComponents(sectionElement);
	});

	// Section reorder event
	document.addEventListener('shopline:section:reorder', () => {
		mountVueComponents();
	});

	// Block select/deselect events for interactive components
	document.addEventListener('shopline:block:select', (event) => {
		const blockElement = document.querySelector(
			`[data-block-id="${event.detail.blockId}"]`
		);
		if (blockElement) {
			mountVueComponents(blockElement);
		}
	});
}

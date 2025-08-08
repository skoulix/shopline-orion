import { createApp, defineCustomElement } from "vue";
import Button from "./components/Button.vue";
import CartDrawer from "./components/CartDrawer.vue";
import MobileMenu from "./components/MobileMenu.vue";
import ProductVariantPicker from "./components/ProductVariantPicker.vue";
import QuantitySelector from "./components/QuantitySelector.vue";
import ProductCard from "./components/ProductCard.vue"; // Mounted as Vue app, not custom element
import CollectionFilters from "./components/CollectionFilters.vue";
import CollectionGrid from "./components/CollectionGrid.vue";
import CollectionSort from "./components/CollectionSort.vue";
import CollectionFilterDrawer from "./components/CollectionFilterDrawer.vue";
import ProductGallery from "./components/ProductGallery.vue";
import ProductInfo from "./components/ProductInfo.vue";
import ReviewSummary from "./components/ProductReviewSummary.vue";
import CartItem from "./components/CartItem.vue";
import CartSummary from "./components/CartSummary.vue";
import SearchOverlay from "./components/SearchOverlay.vue";
import ArticleCard from "./components/ArticleCard.vue";
import BlogArticles from "./components/BlogArticles.vue";

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
        return radius ? `${radius}px` : "6px";
      },
    },
    primaryBg: {
      type: String,
      default: () => Shopline?.theme?.settings?.button_primary_bg || "#dc2626",
    },
    primaryBgHover: {
      type: String,
      default: () =>
        Shopline?.theme?.settings?.button_primary_bg_hover || "#b91c1c",
    },
    primaryText: {
      type: String,
      default: () =>
        Shopline?.theme?.settings?.button_primary_text || "#ffffff",
    },
    secondaryBg: {
      type: String,
      default: () =>
        Shopline?.theme?.settings?.button_secondary_bg || "#ffffff",
    },
    secondaryBgHover: {
      type: String,
      default: () =>
        Shopline?.theme?.settings?.button_secondary_bg_hover || "#f9fafb",
    },
    secondaryText: {
      type: String,
      default: () =>
        Shopline?.theme?.settings?.button_secondary_text || "#374151",
    },
    secondaryBorder: {
      type: String,
      default: () =>
        Shopline?.theme?.settings?.button_secondary_border || "#d1d5db",
    },
  },
});
const CartDrawerElement = defineCustomElement(CartDrawer);
const MobileMenuElement = defineCustomElement(MobileMenu);
const ProductVariantPickerElement = defineCustomElement(ProductVariantPicker, {
  shadowRoot: false,
});
const QuantitySelectorElement = defineCustomElement(QuantitySelector);
// Don't use custom element for ProductCard due to style isolation
// const ProductCardElement = defineCustomElement(ProductCard)
const CollectionFiltersElement = defineCustomElement(CollectionFilters);
const CollectionGridElement = defineCustomElement(CollectionGrid);
// Don't use custom element for CollectionSort due to style isolation
// const CollectionSortElement = defineCustomElement(CollectionSort)
const ProductGalleryElement = defineCustomElement(ProductGallery);
const ProductInfoElement = defineCustomElement(ProductInfo);
const ReviewSummaryElement = defineCustomElement(ReviewSummary, {
  shadowRoot: false,
});
const CartItemElement = defineCustomElement(CartItem);
const CartSummaryElement = defineCustomElement(CartSummary);
// Don't use custom element for SearchOverlay due to Teleport to body
// const SearchOverlayElement = defineCustomElement(SearchOverlay);

// Register custom elements
// Don't use custom element for Button due to CSS variable access
// customElements.define('orion-button', ButtonElement)
customElements.define("cart-drawer", CartDrawerElement);
customElements.define("mobile-menu", MobileMenuElement);
customElements.define("product-variant-picker", ProductVariantPickerElement);
customElements.define("quantity-selector", QuantitySelectorElement);
// customElements.define('product-card', ProductCardElement)
customElements.define("collection-filters", CollectionFiltersElement);
customElements.define("collection-grid", CollectionGridElement);
// customElements.define('collection-sort', CollectionSortElement)
customElements.define("product-gallery", ProductGalleryElement);
customElements.define("product-info", ProductInfoElement);
customElements.define("reviews-summary", ReviewSummaryElement);
customElements.define("cart-item", CartItemElement);
customElements.define("cart-summary", CartSummaryElement);
// customElements.define("search-overlay", SearchOverlayElement);

// Function to mount all Vue components
function mountVueComponents(container = document) {
  // Mount CartDrawer components
  const cartDrawerMounts = container.querySelectorAll(".cart-drawer-mount");
  cartDrawerMounts.forEach((mount) => {
    if (mount._vueApp) return;

    const app = createApp(CartDrawer);
    mount._vueApp = app;
    app.mount(mount);
  });

  // Mount ProductCard components (as Vue apps to avoid style isolation)
  const productCardMounts = container.querySelectorAll("product-card");
  productCardMounts.forEach((mount) => {
    if (mount._vueApp) return;

    // Extract props from attributes
    const props = {
      productId: mount.getAttribute("product-id"),
      variantId: mount.getAttribute("variant-id"),
      title: mount.getAttribute("title"),
      handle: mount.getAttribute("handle"),
      url: mount.getAttribute("url"),
      vendor: mount.getAttribute("vendor"),
      price: mount.getAttribute("price"),
      compareAtPrice: mount.getAttribute("compare-at-price"),
      image: mount.getAttribute("image"),
      available: mount.getAttribute(":available") === "true",
    };

    const app = createApp(ProductCard, props);
    mount._vueApp = app;
    app.mount(mount);
  });

  // Mount CollectionSort components (as Vue apps to avoid style isolation)
  const collectionSortMounts = container.querySelectorAll("collection-sort");
  collectionSortMounts.forEach((mount) => {
    if (mount._vueApp) return;

    const props = {
      collectionHandle: mount.getAttribute("collection-handle"),
      currentSort: mount.getAttribute("current-sort") || "manual",
    };

    const app = createApp(CollectionSort, props);
    mount._vueApp = app;
    app.mount(mount);
  });

  // Mount Button components (as Vue apps to access CSS variables)
  const buttonMounts = container.querySelectorAll("orion-button");
  buttonMounts.forEach((mount) => {
    if (mount._vueApp) return;

    const props = {
      variant: mount.getAttribute("variant") || "primary",
      size: mount.getAttribute("size") || "medium",
      fullWidth: mount.hasAttribute("full-width"),
      href: mount.getAttribute("href"),
      type: mount.getAttribute("type") || "button",
      disabled: mount.hasAttribute("disabled"),
      loading: mount.hasAttribute("loading"),
      rounded: mount.getAttribute("rounded") || "default",
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
    "collection-filter-drawer"
  );
  filterDrawerMounts.forEach((mount) => {
    if (mount._vueApp) return;

    const props = {
      collectionHandle: mount.getAttribute("collection-handle"),
      products: JSON.parse(mount.getAttribute(":products") || "[]"),
    };

    const app = createApp(CollectionFilterDrawer, props);
    mount._vueApp = app;
    app.mount(mount);
  });

  // Mount CollectionFilterSidebar components (using CollectionFilters component)
  const filterSidebarMounts = container.querySelectorAll(
    "collection-filter-sidebar"
  );
  filterSidebarMounts.forEach((mount) => {
    if (mount._vueApp) return;

    const props = {
      collectionHandle: mount.getAttribute("collection-handle"),
      products: JSON.parse(mount.getAttribute(":products") || "[]"),
      showSort: mount.getAttribute(":show-sort") === "true",
    };

    const app = createApp(CollectionFilters, props);
    mount._vueApp = app;
    app.mount(mount);
  });

  // Mount ArticleCard components (as Vue apps to avoid style isolation)
  const articleCardMounts = container.querySelectorAll("article-card");
  articleCardMounts.forEach((mount) => {
    if (mount._vueApp) return;

    const props = {
      title: mount.getAttribute("title"),
      url: mount.getAttribute("url"),
      excerpt: mount.getAttribute("excerpt"),
      content: mount.getAttribute("content"),
      author: mount.getAttribute("author"),
      publishedAt: mount.getAttribute("published-at"),
      rawPublishedAt: mount.getAttribute("raw-published-at"),
      image: mount.getAttribute("image"),
      imageAlt: mount.getAttribute("image-alt"),
      tags: JSON.parse(mount.getAttribute("tags") || "[]"),
      imageRatio: mount.getAttribute("image-ratio") || "landscape",
      showImage: mount.getAttribute("show-image") === "true",
      showAuthor: mount.getAttribute("show-author") === "true",
      showDate: mount.getAttribute("show-date") === "true",
      showTags: mount.getAttribute("show-tags") === "true",
    };

    const app = createApp(ArticleCard, props);
    mount._vueApp = app;
    app.mount(mount);
  });

  // Mount BlogArticles components
  const blogArticlesMounts = container.querySelectorAll("blog-articles");
  blogArticlesMounts.forEach((mount) => {
    if (mount._vueApp) return;

    const props = {
      blogId: mount.getAttribute("blog-id"),
      blogHandle: mount.getAttribute("blog-handle") || "",
      limit: parseInt(mount.getAttribute("limit")) || 3,
      currentArticleId: mount.getAttribute("current-article-id"),
      columnsDesktop: parseInt(mount.getAttribute("columns-desktop")) || 3,
      imageRatio: mount.getAttribute("image-ratio") || "landscape",
      showImage: mount.getAttribute("show-image") !== "false",
      showAuthor: mount.getAttribute("show-author") === "true",
      showDate: mount.getAttribute("show-date") !== "false",
      showTags: mount.getAttribute("show-tags") === "true",
    };

    const app = createApp(BlogArticles, props);
    mount._vueApp = app;
    app.mount(mount);
  });

  // Mount SearchOverlay components (as Vue apps because of Teleport)
  const searchOverlayMounts = container.querySelectorAll("search-overlay");
  searchOverlayMounts.forEach((mount) => {
    if (mount._vueApp) return;

    const app = createApp(SearchOverlay);
    mount._vueApp = app;
    app.mount(mount);
  });


  // Initialize sticky header behavior (only once, not per mount)
  if (container === document) {
    const headerGroups = document.querySelectorAll(".header-group");

    headerGroups.forEach((headerGroup) => {
      const header = headerGroup.querySelector(".site-header");
      if (!header) return;
      
      // Check if transparent header is enabled and on homepage (regardless of sticky)
      const isTransparent = headerGroup.dataset.transparent === "true";
      const isHomepage = document.body.classList.contains("template-index");
      
      // Set initial transparent state on homepage
      if (isTransparent && isHomepage && window.scrollY === 0) {
        header.style.backgroundColor = "transparent";
        header.style.borderBottomColor = "transparent";
        header.classList.add("transparent-not-scrolled");
      }
      
      if (headerGroup.dataset.sticky === "true" && !header._stickyInitialized) {
        header._stickyInitialized = true;

        let lastScrollY = 0;
        let ticking = false;

        function updateHeader() {
          const currentScrollY = window.scrollY;
          const hideOnScroll = headerGroup.dataset.hideOnScroll === "true";
          const isTransparent = headerGroup.dataset.transparent === "true";
          const isHomepage = document.body.classList.contains("template-index");

          // Hide announcement bar by translating header group up
          if (currentScrollY > 0) {
            headerGroup.classList.add("announcement-hidden");
          } else {
            headerGroup.classList.remove("announcement-hidden");
          }

          // Apply scrolled state for shadow and color changes
          if (currentScrollY > 0) {
            header.classList.add("scrolled");
            header.classList.remove("transparent-not-scrolled");
          } else {
            header.classList.remove("scrolled");
            // Add transparent-not-scrolled class when at top of page and transparent is enabled
            if (isTransparent && isHomepage) {
              header.classList.add("transparent-not-scrolled");
            }
          }

          // Handle transparent header on homepage only - simplified
          if (isTransparent && isHomepage) {
            if (currentScrollY <= 50) {
              // Make transparent
              header.style.backgroundColor = "transparent";
              header.style.borderBottomColor = "transparent";
            } else {
              // Remove transparent
              header.style.backgroundColor = "";
              header.style.borderBottomColor = "";
            }
          }

          // Handle hide on scroll
          if (hideOnScroll) {
            const hideThreshold = 300; // Hide header after scrolling 300px

            if (currentScrollY > hideThreshold) {
              if (currentScrollY > lastScrollY) {
                // Scrolling down - hide header
                header.classList.add("hide-on-scroll");
                header.classList.remove("show-on-scroll");
              } else {
                // Scrolling up - show header
                header.classList.remove("hide-on-scroll");
                header.classList.add("show-on-scroll");
              }
            } else {
              // Above threshold, always show
              header.classList.remove("hide-on-scroll");
              header.classList.add("show-on-scroll");
            }
          }

          lastScrollY = currentScrollY;
          ticking = false;
        }

        window.addEventListener("scroll", function () {
          if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
          }
        });

        // Start monitoring scroll
        updateHeader();
      }
    });
  }
}

// Global Image Sizing Utility
window.getImageUrl = function (imageUrl, options = {}) {
  if (!imageUrl || imageUrl === "null" || imageUrl === "undefined") {
    return "";
  }

  // Default image sizes for common use cases
  const presets = {
    // Product images
    "product-card": { width: 800 }, // 2x for 400px display on retina
    "product-card-small": { width: 600 }, // 2x for 300px display
    "product-thumbnail": { width: 400 }, // For thumbnails and small images
    "product-gallery": { width: 1200 }, // For main product gallery
    "product-gallery-thumbnail": { width: 300 }, // Gallery thumbnails

    // Cart images
    "cart-item": { width: 300 }, // Cart drawer/page items
    "cart-item-small": { width: 150 }, // Mini cart items

    // Hero/banner images
    "hero-mobile": { width: 768 }, // Mobile hero images
    "hero-desktop": { width: 1920 }, // Desktop hero images
    banner: { width: 1200 }, // General banner images

    // Blog/article images
    "article-card": { width: 600 }, // Blog article cards
    "article-hero": { width: 1200 }, // Article hero images

    // Collection images
    "collection-card": { width: 800 }, // Collection listing cards

    // General sizes
    small: { width: 300 },
    medium: { width: 600 },
    large: { width: 1200 },
    xlarge: { width: 1920 },
  };

  // If preset is specified, use it
  if (options.preset && presets[options.preset]) {
    options = { ...presets[options.preset], ...options };
  }

  // Extract width and height parameters
  const { width, height, quality = 80, crop = null } = options;

  // For Shopline image URLs, we need to use their specific format: filename_WIDTHx.extension
  if (imageUrl.includes("myshopline.com") || imageUrl.includes("shopline")) {
    // Parse the URL to extract base path and extension
    const url = new URL(imageUrl);
    const pathname = url.pathname;

    // Extract filename and extension
    const lastSlashIndex = pathname.lastIndexOf("/");
    const basePath = pathname.substring(0, lastSlashIndex + 1);
    const filename = pathname.substring(lastSlashIndex + 1);

    // Remove existing size suffix if present (e.g., _300x, _400x600, etc.)
    const cleanFilename = filename
      .replace(/_\d+x\d*(?=\.[^.]*$)/, "")
      .replace(/_\d+x(?=\.[^.]*$)/, "");

    // Extract extension
    const dotIndex = cleanFilename.lastIndexOf(".");
    const nameOnly = cleanFilename.substring(0, dotIndex);
    const extension = cleanFilename.substring(dotIndex);

    // Build new filename with size
    let sizedFilename;
    if (width && height) {
      sizedFilename = `${nameOnly}_${width}x${height}${extension}`;
    } else if (width) {
      sizedFilename = `${nameOnly}_${width}x${extension}`;
    } else {
      sizedFilename = cleanFilename; // No size specified, use clean filename
    }

    // Construct the final URL
    const finalUrl = `${url.protocol}//${url.host}${basePath}${sizedFilename}`;

    // Add query parameters if needed (quality, etc.)
    const params = new URLSearchParams(url.search);
    if (quality !== 80) params.set("q", quality);
    if (crop) params.set("crop", crop);

    const paramString = params.toString();
    return paramString ? `${finalUrl}?${paramString}` : finalUrl;
  }

  // For other CDNs or direct image URLs, return as-is
  // (Could be extended to support other CDN formats)
  return imageUrl;
};

// Responsive image srcset generator
window.getImageSrcSet = function (
  imageUrl,
  sizes = [400, 600, 800, 1000, 1200]
) {
  if (!imageUrl || imageUrl === "null" || imageUrl === "undefined") {
    return "";
  }

  return sizes
    .map((size) => `${window.getImageUrl(imageUrl, { width: size })} ${size}w`)
    .join(", ");
};

// Helper for common responsive image tag generation
window.createResponsiveImageTag = function (imageUrl, options = {}) {
  const {
    alt = "",
    className = "",
    sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    widths = [400, 600, 800, 1000, 1200],
    loading = "lazy",
  } = options;

  if (!imageUrl || imageUrl === "null" || imageUrl === "undefined") {
    return "";
  }

  const srcset = window.getImageSrcSet(imageUrl, widths);
  const src = window.getImageUrl(imageUrl, {
    width: widths[Math.floor(widths.length / 2)],
  });

  return `<img 
    src="${src}"
    srcset="${srcset}"
    sizes="${sizes}"
    alt="${alt}"
    class="${className}"
    loading="${loading}"
  >`;
};

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
          (Shopline?.routes?.cart || "/cart") + ".js"
        );
        const cart = await response.json();

        // Note: Cart images from the API are already processed by Shopline
        // Manual URL parameters don't work with Shopline's CDN for PNG files

        this.state.items = cart.items;
        this.state.totalPrice = cart.total_price;
        this.state.itemCount = cart.item_count;
        document.dispatchEvent(
          new CustomEvent("cart:updated", { detail: cart })
        );
        return cart;
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    },

    async addItem(data) {
      try {
        let response;

        // Handle both FormData and JSON formats
        if (data instanceof FormData) {
          // Legacy FormData format
          response = await fetch(Shopline?.routes?.cart_add || "/cart/add", {
            method: "POST",
            body: data,
          });
        } else {
          // New Shopline AJAX API format
          response = await fetch("/api/carts/ajax-cart/add.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(data),
          });
        }

        const result = await response.json();
        await this.fetchCart();
        this.openDrawer();
        return result;
      } catch (error) {
        console.error("Failed to add item to cart:", error);
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

        const response = await fetch("/api/carts/ajax-cart/change.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(requestData),
        });

        const result = await response.json();
        await this.fetchCart();
        return result;
      } catch (error) {
        console.error("Failed to update cart:", error);
      }
    },

    async removeItem(variantId, lineNumber = null) {
      return this.updateItem(variantId, 0, lineNumber);
    },

    openDrawer() {
      this.state.isOpen = true;
      document.dispatchEvent(new CustomEvent("cart:open"));
    },

    closeDrawer() {
      this.state.isOpen = false;
      document.dispatchEvent(new CustomEvent("cart:close"));
    },
  };

  // Initialize cart on page load
  window.OrionCart.fetchCart();

  // Update cart count in header
  document.addEventListener("cart:updated", (e) => {
    const cartCount = e.detail.item_count;
    const cartCountElements = document.querySelectorAll(".cart-count");
    cartCountElements.forEach((el) => {
      if (cartCount > 0) {
        el.textContent = cartCount;
        el.style.opacity = "1";
      } else {
        el.style.opacity = "0";
      }
    });
  });
}

// Expose mountVueComponents globally for infinite scroll
window.mountVueComponents = mountVueComponents;

// Mount Vue components on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  mountVueComponents();
});

// Also mount immediately if DOM is already loaded
if (document.readyState !== 'loading') {
  mountVueComponents();
}

// Handle Shopline theme editor events
if (
  window.Shopline?.designMode ||
  window.location.href.includes("theme_preview_mode")
) {
  // Section load event - when a section is added or its settings change
  document.addEventListener("shopline:section:load", (event) => {
    const sectionElement =
      document.querySelector(`[data-section-id="${event.detail.sectionId}"]`) ||
      document;
    mountVueComponents(sectionElement);
  });

  // Section reorder event
  document.addEventListener("shopline:section:reorder", () => {
    mountVueComponents();
  });

  // Block select/deselect events for interactive components
  document.addEventListener("shopline:block:select", (event) => {
    const blockElement = document.querySelector(
      `[data-block-id="${event.detail.blockId}"]`
    );
    if (blockElement) {
      mountVueComponents(blockElement);
    }
  });
}

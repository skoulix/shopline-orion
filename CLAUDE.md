# Orion Theme - Shopline 2.0 Development Guide

## Project Overview

Orion is a modern Shopline 2.0 theme built with:

-   **Tailwind CSS 4** (Alpha) for styling
-   **Vue 3** for reactivity and component logic
-   **Vite** for building and bundling
-   **Shopline 2.0** theme architecture (HTML templates)

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (watches both Tailwind and Vue)
pnpm dev

# Build for production
pnpm build

# Lint & type check
pnpm lint
pnpm typecheck
```

## Project Structure

```
orion/
├── assets/              # Compiled CSS, JS, and static assets
├── config/              # Theme settings and configuration
├── layout/              # Main theme layouts (HTML)
├── locales/             # Translation files
├── sections/            # Theme sections (HTML files)
├── snippets/            # Reusable HTML snippets
├── src/                 # Source files
│   ├── components/      # Vue components
│   ├── main.js          # Vue app initialization
│   └── tailwind.css     # Tailwind input file
├── templates/           # Page templates (HTML)
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## Key Components Status

### ✅ Completed

#### Vue Components
-   **CartDrawer.vue** - Slide-out cart drawer with cart management
-   **QuantitySelector.vue** - Quantity input component with +/- buttons
-   **ProductVariantPicker.vue** - Product variant selection with color swatches
-   **MainHeader.vue** - Main navigation header with search overlay
-   **StickyHeader.vue** - Wrapper for sticky header behavior
-   **MobileMenu.vue** - Slide-out mobile navigation menu
-   **SiteFooter.vue** - Footer with newsletter, links, social, contact
-   **ProductCard.vue** - Product card with quick add/view, color swatches
-   **CollectionFilters.vue** - Filter sidebar with price, type, vendor filters
-   **CollectionGrid.vue** - Product grid with sorting, pagination, infinite scroll
-   **ProductGallery.vue** - Product image gallery with zoom and lightbox
-   **ProductInfo.vue** - Product information with add to cart functionality
-   **CartItem.vue** - Individual cart item component with quantity management
-   **CartSummary.vue** - Cart summary with promo codes and checkout

#### Theme Structure
-   **Layout** - theme.html with Vue component integration and proper Shopline tags
-   **Sections** - header, footer, hero-banner, collection-banner, featured-collection, cart sections, main-product
-   **Templates** - index.json, collection.json, cart.json, 404.json, product.json
-   **Config** - settings_schema.json, settings_data.json
-   **Locales** - en.json with all translations
-   **Snippets** - meta-tags, stylesheet, icons, pagination

#### Build System
-   **Vue Setup** - Custom elements for web components integration
-   **Tailwind Config** - Custom theme with primary/secondary colors
-   **Build Pipeline** - Vite + Tailwind build setup with ESM modules

### 📋 TODO

-   Customer account pages (login, register, account dashboard, orders, addresses)
-   Search functionality with predictive search
-   Product recommendations
-   Recently viewed products
-   Wishlist functionality
-   Additional page templates (about, contact, etc)
-   Blog templates (blog listing and article pages)
-   Additional utility sections (slideshow, testimonials)

## Vue Component Architecture

Components are defined as custom elements for seamless integration with Shopline HTML templates:

```javascript
// Define component
const CartDrawerElement = defineCustomElement(CartDrawer)

// Register as custom element
customElements.define('cart-drawer', CartDrawerElement)

// Use in HTML templates
<cart-drawer></cart-drawer>
```

## Cart State Management

Global cart state is managed through `window.OrionCart`:

```javascript
window.OrionCart = {
  state: { isOpen, items, totalPrice, itemCount },
  fetchCart(),      // Get current cart
  addItem(formData), // Add item to cart
  updateItem(key, quantity), // Update quantity
  removeItem(key),   // Remove from cart
  openDrawer(),      // Open cart drawer
  closeDrawer()      // Close cart drawer
}
```

## Styling Guidelines

### Tailwind Classes

-   Use Tailwind 4's new features (CSS variables, improved performance)
-   Follow the color scheme defined in `tailwind.config.js`
-   Primary colors: Red-based palette
-   Secondary colors: Gray/slate palette

### CSS Variables from Arise-Pro

Reference these CSS variables from arise-pro theme:

-   `--page-padding`: Responsive page padding
-   `--grid-horizontal-space`: Grid gap spacing
-   `--section-padding-top/bottom`: Section spacing
-   `--btn-*`: Button styling variables
-   `--input-*`: Form input styling variables

## Development Best Practices

1. **Component Development**

    - Keep components focused and reusable
    - Use Vue 3 Composition API
    - Emit events for parent communication

2. **HTML Template Integration**

    - Use custom elements for Vue components
    - Pass data via attributes/props
    - Use global event system for cross-component communication
    - Leverage Shopline's template variables

3. **Performance**

    - Lazy load heavy components
    - Use Vue's Teleport for modals/drawers
    - Optimize bundle size with Vite

4. **Testing**
    - Test components in isolation
    - Verify HTML template integration
    - Cross-browser testing

## API Endpoints

```javascript
window.routes = {
	cart_url: '/cart',
	cart_add_url: '/cart/add',
	cart_update_url: '/cart/update',
	cart_change_url: '/cart/change',
};
```

## Next Steps

1. Complete variant selector with size/color options
2. Build header with sticky behavior and search
3. Implement collection page with infinite scroll
4. Add product page with image zoom
5. Enhance mobile experience
6. Add PWA features

## Notes

-   Always test in Shopline theme editor
-   Ensure Vue components work without JavaScript (progressive enhancement)
-   Follow Shopline 2.0 best practices
-   Keep accessibility in mind (ARIA labels, keyboard navigation)

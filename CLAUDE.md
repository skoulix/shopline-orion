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
-   **CartDrawer.vue** - Slide-out cart drawer with cart management (mounted as Vue app, not custom element)
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
-   **CartItem.vue** - Individual cart item component with enhanced design (icon-based remove button, improved price display)
-   **CartSummary.vue** - Cart summary with promo codes and checkout

#### Theme Structure
-   **Layout** - theme.html with Vue component integration and proper Shopline tags
-   **Sections** - header, footer, hero-banner, collection-banner, featured-collection (with proper Shopline collection syntax), cart sections, main-product
-   **Templates** - index.json, collection.json, cart.json, 404.json, product.json
-   **Config** - settings_schema.json, settings_data.json
-   **Locales** - en.json with all translations
-   **Snippets** - meta-tags, stylesheet, icons, pagination

#### Build System
-   **Vue Setup** - Mix of custom elements and direct Vue app mounting (CartDrawer uses app mounting to avoid style isolation issues)
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

Components use a hybrid approach for integration with Shopline HTML templates:

### Custom Elements (Most Components)
```javascript
// Define component
const ProductCardElement = defineCustomElement(ProductCard)

// Register as custom element
customElements.define('product-card', ProductCardElement)

// Use in HTML templates
<product-card :product='{{json product}}'></product-card>
```

### Direct Vue App Mounting (CartDrawer)
To avoid style isolation issues with custom elements, CartDrawer is mounted as a regular Vue app:
```javascript
// Mount CartDrawer components
const cartDrawerMounts = document.querySelectorAll('.cart-drawer-mount')
cartDrawerMounts.forEach(mount => {
  const app = createApp(CartDrawer)
  app.mount(mount)
})

// Use in HTML templates
<div class="cart-drawer-mount"></div>
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
    - Consider style isolation when choosing between custom elements and app mounting

2. **HTML Template Integration**

    - Use custom elements for most Vue components
    - Use direct app mounting for components that need global styles (e.g., CartDrawer)
    - Pass data via attributes/props using `{{json}}` helper
    - Use global event system for cross-component communication
    - Leverage Shopline's template variables

3. **Shopline Template Syntax**

    - **Collection Picker (v20251201 docs)**:
      - `collection_picker` returns only a collection ID (string), not a full collection object
      - Purpose: "Select all available collections in the store" for displaying collections
      - Schema example:
        ```json
        {
          "id": "collection",
          "type": "collection_picker",
          "label": "Collection"
        }
        ```
      - To access collection data, find it in `all_collections` using the ID:
        ```handlebars
        {{#each all_collections}}
          {{#if (eq this.id section.settings.collection)}}
            {{!-- Access collection properties here --}}
            {{#each this.products limit=8}}
              {{!-- Product loop --}}
            {{/each}}
          {{/if}}
        {{/each}}
        ```
    - Use `{{#each collection.products limit=X}}` for iterating products once you have the collection object
    - Note: The arise theme may show direct access like `section.settings.collection.products`, but in standard Shopline implementation, you need to lookup the collection by ID first

4. **Performance**

    - Lazy load heavy components
    - Use Vue's Teleport for modals/drawers
    - Optimize bundle size with Vite

5. **Testing**
    - Test components in isolation
    - Verify HTML template integration
    - Cross-browser testing
    - Always check the Shopline CLI output for template compilation errors

## API Endpoints

### Cart Routes (v20251201)

```javascript
window.routes = {
	cart_url: '/cart',
	cart_add_url: '/cart/add',
	cart_update_url: '/cart/update',
	cart_change_url: '/cart/change',
};
```

### Shopline Cart AJAX API

#### Add to Cart
- **URL**: `/api/carts/ajax-cart/add.js`
- **Method**: POST
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "items": [
      {
        "id": "variant_id",      // Required: Product variant/SKU ID
        "quantity": 1,           // Required: Number to add
        "properties": {},        // Optional: Custom properties
        "groupId": ""           // Optional: Group identifier
      }
    ]
  }
  ```
- **Response**: Complete cart item details including pricing, discounts, and metadata
- **Note**: Supports adding multiple items in one request

#### Update Cart Item
- **URL**: `/cart/update`
- **Method**: POST
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "id": "variant_id",         // Required: Product variant/SKU ID
    "quantity": 2,              // Required: New quantity (0 to remove)
    "groupId": "",              // Optional: Group ID
    "properties": {},           // Optional: Custom properties
    "note": "",                 // Optional: Cart note
    "attributes": {}            // Optional: Cart attributes
  }
  ```
- **Response**: Full cart state with all items, totals, and discounts

#### Change Cart Item Quantity
- **URL**: `/api/carts/ajax-cart/change.js`
- **Method**: POST
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "id": "variant_id",         // Optional: Update by variant ID
    "line": 1,                  // Optional: Update by line number
    "quantity": 3,              // Required: New quantity
    "groupId": ""               // Optional: Update by group ID
  }
  ```
- **Response**: Updated cart state
- **Note**: Can update by ID, line position, or group ID

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

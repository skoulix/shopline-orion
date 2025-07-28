# Orion Theme - Shopline 2.0 Development Guide

## Project Overview

Orion is a modern Shopline 2.0 theme built with:

-   **Tailwind CSS 3** for styling
-   **Vue 3** for reactivity and component logic
-   **Vite** for building and bundling
-   **Shopline 2.0** theme architecture (HTML templates)
-   **Reference**: Using Arise theme as feature reference

## Reference Theme: Arise

We are using the Arise theme (`/arise` directory) as a reference for building Orion. Arise is a feature-complete Shopline 2.0 theme with:

- Traditional JavaScript/CSS architecture
- Extensive section library (40+ sections)
- Complete customer account pages
- Multi-language support (30+ languages)
- Advanced features like multi-level filtering, quick view, recently viewed products
- Comprehensive theme settings with CSS variables

**Key differences:**
- **Arise**: Vanilla JS/CSS, no build process, traditional approach
- **Orion**: Vue 3 + Tailwind CSS, modern build tools, component-based

When implementing features in Orion:
1. Check how Arise implements the feature
2. Adapt it to use Vue components and Tailwind classes
3. Maintain compatibility with Shopline's template system

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

### 📋 TODO (Priority Order - Reference Arise Theme)

#### High Priority
-   **Customer Account Pages** (Reference: `/arise/sections/main-account.html`, etc.)
    - Login page (`main-login.html`)
    - Register page (`main-register.html`) 
    - Account dashboard (`main-account.html`)
    - Order history (`main-order-list.html`)
    - Order details (`main-order-detail.html`)
    - Addresses (`main-addresses.html`)
-   **Search with Predictive Search** (Reference: `/arise/sections/predictive-search.html`)
-   **Blog Templates** (Reference: `/arise/sections/main-blog-list.html`, `main-article.html`)
    - Blog listing page
    - Article page with comments

#### Medium Priority
-   **Product Recommendations** (Reference: `/arise/sections/product-recommendations.html`)
-   **Recently Viewed Products** (Reference: `/arise/sections/product-recently-viewed.html`)
-   **Additional Sections from Arise**:
    - Slideshow/Hero Banner (`/arise/sections/slideshow.html`)
    - Testimonials (`/arise/sections/testimonials.html`)
    - Newsletter Signup (`/arise/sections/sign-up-and-save.html`)
    - Image with Text (`/arise/sections/image-with-text.html`)
    - Multi-column Text (`/arise/sections/text-columns-with-image.html`)
    - Video Section (`/arise/sections/video.html`)
    - Countdown Timer (`/arise/sections/count-down.html`)
    - Contact Form (`/arise/sections/contact-form.html`)

#### Low Priority
-   **Advanced Features**:
    - Multi-level filtering (Reference: `/arise/sections/multilevel-filter.html`)
    - Quick View Modal (Reference: `/arise/assets/component-product-quick-modal.js`)
    - Shoppable Images (`/arise/sections/shoppable-image.html`)
    - Collection List variations
-   **Page Templates**:
    - About page
    - Contact page (with map)
    - FAQ page
    - Store policies

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

-   Use Tailwind 3's features and utility classes
-   Follow the color scheme defined in `tailwind.config.js`
-   Primary colors: Red-based palette
-   Secondary colors: Gray/slate palette

### CSS Variables from Arise Theme

When porting sections from Arise, reference these CSS variables (defined in `/arise/snippets/theme-css-var.html`):

**Layout & Spacing:**
-   `--page-width`: Maximum page width (default: 1200px)
-   `--section-vertical-gap`: Vertical spacing between sections
-   `--grid-horizontal-space`: Horizontal grid gap
-   `--grid-vertical-space`: Vertical grid gap

**Typography:**
-   `--title-font`, `--body-font`: Font families
-   `--title-font-size`, `--body-font-size`: Base font sizes
-   `--title-line-height`, `--body-line-height`: Line heights

**Colors:**
-   `--color-page-background`: Page background
-   `--color-text`, `--color-light-text`: Text colors
-   `--color-button-background/text`: Button colors
-   `--color-sale`, `--color-discount`: Sale/discount colors
-   `--color-scheme-1/2/3-bg/text`: Color scheme variations

**Components:**
-   `--btn-*`: Button border, radius, shadow properties
-   `--input-*`: Form input styling properties
-   `--card-*`: Card component properties
-   `--product-card-*`: Product card specific properties
-   `--drawer-*`: Drawer/modal properties

**Note**: When implementing in Orion, map these to Tailwind utilities or CSS custom properties as needed.

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
            		{{! Access collection properties here }}
            		{{#each this.products limit=8}}
            			{{! Product loop }}
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

## Localization and Language Files

### Language File Structure

Shopline themes use two main localization files:

1. **`locales/en.json`** - General theme translations

    - Used for general theme text, customer-facing strings
    - Static text in templates
    - JavaScript strings
    - Customer account messages

2. **`locales/en.schema.json`** - Schema translations (IMPORTANT)
    - **Used for ALL section settings labels and descriptions**
    - Theme settings panel labels
    - Section names and descriptions
    - Setting group headers
    - Option labels for select/radio settings

### Important Guidelines

**When creating section settings:**

-   ✅ ALWAYS place setting labels in `en.schema.json`
-   ❌ DO NOT place section setting labels in `en.json`
-   Use the `t:` prefix to reference schema translations: `"label": "t:sections.header.settings.logo.label"`

**Example structure in `en.schema.json`:**

```json
{
	"sections": {
		"header": {
			"name": "Header",
			"settings": {
				"group_header__0": {
					"label": "Logo"
				},
				"logo": {
					"label": "Logo image"
				},
				"logo_width": {
					"label": "Logo width"
				}
			}
		}
	}
}
```

**Section schema example:**

```json
{
	"name": "t:sections.header.name",
	"settings": [
		{
			"type": "group_header",
			"label": "t:sections.header.settings.group_header__0.label"
		},
		{
			"type": "image_picker",
			"id": "logo",
			"label": "t:sections.header.settings.logo.label"
		}
	]
}
```

### Translation Keys Best Practice

-   Keep keys hierarchical and descriptive
-   Follow the pattern: `sections.[section-name].settings.[setting-id].label`
-   For options: `sections.[section-name].settings.[setting-id].options__[index].label`
-   For info text: `sections.[section-name].settings.[setting-id].info`

## Shopline Image Optimization

### Image Filters

Shopline provides image optimization filters similar to Shopify:

1. **`image_url` filter** - Optimizes images with size parameters

    ```handlebars
    {{image_url product.images.0 width=400}}
    {{image_url item.image width=300}}
    {{image_url data quality=quality}}
    ```

2. **`image_tag` helper** - Creates responsive img tags with srcset
    ```handlebars
    {{image_tag
    	(image_url data quality=quality)
    	class='product-image'
    	widths='375, 540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2160'
    	loading='lazy'
    	sizes='(max-width: 959px) 100vw, 50vw'
    	alt=data.alt
    }}
    ```

### Usage in Templates

-   For product cards: `{{image_url this.images.[0] width=800}}` (2x for retina displays)
-   For cart items: `{{image_url item.image width=150}}`
-   For thumbnails: `{{image_url image width=100}}`
-   For responsive images: Use `image_tag` with multiple widths

### Recommended Sizes

-   Product cards in grid: 800px (serves 400px display size on retina)
-   Product detail images: 1200px or use responsive `image_tag`
-   Cart drawer items: 150px
-   Thumbnails: 100-150px

### Best Practices

-   Always specify width to avoid loading full-size images
-   Use lazy loading for images below the fold
-   The arise theme uses predefined width breakpoints for responsive images
-   Images are automatically served in optimal formats (WebP when supported)

### Important Notes

-   **URL parameters (like `?w=150&h=150`) do NOT work with Shopline's CDN for image resizing**
-   The `image_url` filter only works in Handlebars templates, not in JavaScript
-   Cart API returns pre-optimized images that should be used as-is
-   For dynamic image optimization in JavaScript, consider using CSS to constrain display size rather than trying to modify URLs

## Shopline Global Object

Shopline provides a comprehensive global object that contains all the necessary data for theme development. **You should always use the Shopline global object instead of creating custom window objects.**

### Structure Overview
```javascript
Shopline = {
  // Shop information
  shop: {
    name: "Store Name",
    domain: "store.myshopline.com",
    currency: "USD",
    money_format: "${{amount}}",
    money_with_currency_format: "${{amount}} USD"
  },
  
  // Theme settings from settings_schema.json
  theme: {
    settings: {
      cart_type: "drawer",
      free_shipping_threshold: 50,
      show_free_shipping_bar: true,
      button_border_radius: 6,
      button_primary_bg: "#dc2626",
      // ... all other theme settings
    }
  },
  
  // Routes for cart, account, etc.
  routes: {
    cart: "/cart",
    cart_add: "/cart/add",
    cart_update: "/cart/update", 
    cart_change: "/cart/change",
    account: "/account",
    account_login: "/account/login",
    account_logout: "/account/logout",
    search: "/search"
  },
  
  // Currency formatting
  currency: {
    active: "USD",
    rate: 1,
    format: "${{amount}}"
  },
  
  // Locale information
  locale: {
    current: "en",
    available: ["en", "zh-CN"]
  },
  
  // Customer information (if logged in)
  customer: {
    id: 123,
    email: "customer@example.com",
    first_name: "John",
    last_name: "Doe"
    // ... other customer properties
  }
}
```

### Common Usage Examples

#### Accessing Theme Settings
```javascript
// Get cart type setting
const cartType = Shopline?.theme?.settings?.cart_type || 'drawer'

// Get free shipping threshold
const threshold = Shopline?.theme?.settings?.free_shipping_threshold || 50

// Get button styling
const buttonRadius = Shopline?.theme?.settings?.button_border_radius || 6
```

#### Using Routes
```javascript
// Get cart URL
const cartUrl = Shopline?.routes?.cart || '/cart'

// Add to cart endpoint
const addToCartUrl = Shopline?.routes?.cart_add || '/cart/add'

// Account URL
const accountUrl = Shopline?.routes?.account || '/account'
```

#### Currency Formatting
```javascript
// Format price with currency and locale
const formatMoney = (price) => {
  if (!price && price !== 0) return '$0.00'
  
  // Get currency and locale settings from Shopline
  const moneyFormat = Shopline?.shop?.money_format || '${{amount}}'
  const moneyWithCurrencyFormat = Shopline?.shop?.money_with_currency_format || '${{amount}} USD'
  const currency = Shopline?.shop?.currency || 'USD'
  const locale = Shopline?.locale?.current || 'en'
  
  // Format the number according to the locale
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  
  const amount = formatter.format(parseFloat(price))
  
  // Replace {{amount}} placeholder with formatted amount
  return moneyFormat.replace('{{amount}}', amount)
}
```

### Date Formatting
```javascript
// Format dates with locale
const formatDate = (dateString) => {
  const locale = Shopline?.locale?.current || 'en'
  const date = new Date(dateString)
  
  // Use Intl.DateTimeFormat for locale-aware formatting
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

// Example: "January 15, 2024" in English or "15 janvier 2024" in French
```

#### Shop Information
```javascript
// Get shop name
const shopName = Shopline?.shop?.name || 'My Store'

// Get shop currency
const currency = Shopline?.shop?.currency || 'USD'
```

### Important Notes
- **Never create custom window objects** like `window.routes`, `window.shop`, or `window.themeSettings`
- The only exception is `window.OrionCart` which is our custom cart state management system
- Always use optional chaining (`?.`) when accessing Shopline properties to avoid errors
- The Shopline object is automatically populated by the platform
- Global settings from `settings_schema.json` may not be directly accessible in section templates using `{{settings.variable}}` - use JavaScript to access them via `Shopline.theme.settings`
- The structure may vary slightly between different Shopline versions, always check what's available in your environment

### Internationalization Best Practices

When developing for Shopline themes, always use the platform's locale and currency settings:

1. **Currency Formatting**
   - Always use `Shopline.shop.money_format` for currency display
   - Use `Intl.NumberFormat` with `Shopline.locale.current` for proper number formatting
   - Never hardcode currency symbols or decimal separators

2. **Date Formatting**
   - Use `Intl.DateTimeFormat` with `Shopline.locale.current`
   - This ensures dates display correctly for all regions (MM/DD/YYYY vs DD/MM/YYYY)

3. **Number Formatting**
   - Use `Intl.NumberFormat` for any numeric displays (quantities, percentages, etc.)
   - Respects regional differences in thousand/decimal separators

4. **Text Content**
   - Use translation files (`locales/en.json`, `locales/en.schema.json`)
   - Never hardcode user-facing text in JavaScript or templates

Example utility functions:
```javascript
// Create a reusable formatter utility
const createFormatters = () => {
  const locale = Shopline?.locale?.current || 'en'
  const moneyFormat = Shopline?.shop?.money_format || '${{amount}}'
  
  return {
    money: (price) => {
      const formatter = new Intl.NumberFormat(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
      return moneyFormat.replace('{{amount}}', formatter.format(price))
    },
    
    date: (date, options = {}) => {
      return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        ...options
      }).format(new Date(date))
    },
    
    number: (num, options = {}) => {
      return new Intl.NumberFormat(locale, options).format(num)
    },
    
    percent: (num) => {
      return new Intl.NumberFormat(locale, {
        style: 'percent',
        minimumFractionDigits: 0
      }).format(num / 100)
    }
  }
}
```

### Debugging the Shopline Object
To explore what's available in the Shopline object in your environment:
```javascript
console.log('Shopline:', Shopline)
console.log('Shopline.shop:', Shopline.shop)
console.log('Shopline.theme:', Shopline.theme)
console.log('Shopline.routes:', Shopline.routes)
console.log('Shopline.currency:', Shopline.currency)
console.log('Shopline.locale:', Shopline.locale)
```

## API Endpoints

### Shopline Search
Shopline's search functionality primarily focuses on product search. The `search` object returns product results with the following properties:
- Product ID, variants, pricing information
- Product images (featured_image, images array)
- Availability status
- Product handle and URL
- Vendor information

Note: While some themes may show support for searching other content types (collections, articles, pages), in practice Shopline's search typically only returns product results.

### Shopline Collection Filtering
Shopline uses a facets-based filtering system for collections that requires server-side implementation:

1. **Facets System**: The Arise theme uses a `facets` snippet and `component-facets.js` for filtering
2. **AJAX Requests**: Filters are applied via AJAX requests to Shopline's filtering API
3. **URL Parameters**: While filter parameters can be added to URLs (e.g., `?filter.price=0-50`), the `paginate` helper doesn't automatically filter products based on these parameters
4. **Implementation**: Full filtering requires:
   - Using Shopline's facets components
   - Making AJAX requests to filter endpoints
   - Server-side rendering of filtered results

For the Orion theme, we've implemented a UI for filters that updates URL parameters, but actual product filtering requires integration with Shopline's facets API or a custom server-side implementation.

### Cart Routes (v20251201)

Cart routes are available via the Shopline global object:

```javascript
Shopline.routes = {
	cart: '/cart',
	cart_add: '/cart/add',
	cart_update: '/cart/update',
	cart_change: '/cart/change',
};
```

### Shopline Cart AJAX API

#### Add to Cart

-   **URL**: `/api/carts/ajax-cart/add.js`
-   **Method**: POST
-   **Headers**: `Content-Type: application/json`
-   **Request Body**:
    ```json
    {
    	"items": [
    		{
    			"id": "variant_id", // Required: Product variant/SKU ID
    			"quantity": 1, // Required: Number to add
    			"properties": {}, // Optional: Custom properties
    			"groupId": "" // Optional: Group identifier
    		}
    	]
    }
    ```
-   **Response**: Complete cart item details including pricing, discounts, and metadata
-   **Note**: Supports adding multiple items in one request

#### Update Cart Item

-   **URL**: `/cart/update`
-   **Method**: POST
-   **Headers**: `Content-Type: application/json`
-   **Request Body**:
    ```json
    {
    	"id": "variant_id", // Required: Product variant/SKU ID
    	"quantity": 2, // Required: New quantity (0 to remove)
    	"groupId": "", // Optional: Group ID
    	"properties": {}, // Optional: Custom properties
    	"note": "", // Optional: Cart note
    	"attributes": {} // Optional: Cart attributes
    }
    ```
-   **Response**: Full cart state with all items, totals, and discounts

#### Change Cart Item Quantity

-   **URL**: `/api/carts/ajax-cart/change.js`
-   **Method**: POST
-   **Headers**: `Content-Type: application/json`
-   **Request Body**:
    ```json
    {
    	"id": "variant_id", // Optional: Update by variant ID
    	"line": 1, // Optional: Update by line number
    	"quantity": 3, // Required: New quantity
    	"groupId": "" // Optional: Update by group ID
    }
    ```
-   **Response**: Updated cart state
-   **Note**: Can update by ID, line position, or group ID

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

<template>
  <div class="variant-picker">
    <!-- Single variant display -->
    <div v-if="variants.length === 1 && productOptions.length === 0" class="single-variant-info mb-6 p-4 bg-gray-50 rounded-lg">
      <div class="text-sm text-gray-600 mb-2">Selected Option:</div>
      <div class="font-medium text-gray-900">{{ variants[0].title }}</div>
    </div>
    
    <!-- Multiple variants or options -->
    <div v-else-if="productOptions.length > 0">
      <div v-for="option in productOptions" :key="option.name" class="variant-option mb-6">
      <h3 class="text-sm font-medium text-gray-900 mb-3">
        {{ option.name || 'Option' }}: <span class="font-normal text-gray-600">{{ getSelectedValue(option.name) || 'Select' }}</span>
      </h3>
      
      <!-- Image-based variant options -->
      <div v-if="hasImageOptions(option)" class="flex flex-wrap gap-3">
        <button
          v-for="(item, index) in getOptionValuesWithImages(option)"
          :key="item.value"
          type="button"
          :class="[
            'variant-image-button',
            isOptionSelected(option.name, item.value) ? 'variant-image-button--selected' : '',
            !isOptionAvailable(option.name, item.value) ? 'variant-image-button--unavailable' : ''
          ]"
          :title="item.value"
          :aria-label="`Select ${option.name} ${item.value}`"
          :disabled="!isOptionAvailable(option.name, item.value)"
          @click="selectOption(option.name, item.value)"
        >
          <img
            v-if="item.image"
            :src="getImageUrl(item.image, 100)"
            :alt="item.value"
            class="w-full h-full object-cover"
          />
          <span v-else class="text-xs">{{ item.value }}</span>
        </button>
      </div>
      
      <!-- Color swatches -->
      <div v-else-if="isColorOption(option.name)" class="flex flex-wrap gap-2">
        <button
          v-for="value in option.values"
          :key="value"
          type="button"
          :class="[
            'color-swatch',
            isOptionSelected(option.name, value) ? 'color-swatch--selected' : '',
            !isOptionAvailable(option.name, value) ? 'color-swatch--unavailable' : ''
          ]"
          :style="{ backgroundColor: getColorValue(value) }"
          :title="value"
          :aria-label="`Select ${option.name} ${value}`"
          :disabled="!isOptionAvailable(option.name, value)"
          @click.stop="selectOption(option.name, value)"
        >
          <span class="sr-only">{{ value }}</span>
          <span v-if="isOptionSelected(option.name, value)" class="color-swatch__checkmark">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </div>
      
      <!-- Size/Text options -->
      <div v-else class="flex flex-wrap gap-2">
        <button
          v-for="value in option.values"
          :key="value"
          type="button"
          :class="[
            'variant-button',
            isOptionSelected(option.name, value) ? 'variant-button--selected' : '',
            !isOptionAvailable(option.name, value) ? 'variant-button--unavailable' : ''
          ]"
          :aria-label="`Select ${option.name} ${value}`"
          :disabled="!isOptionAvailable(option.name, value)"
          @click.stop="selectOption(option.name, value)"
        >
          {{ value }}
        </button>
      </div>
    </div>
    </div>
    
    <!-- Single variant with options -->
    <div v-else-if="variants.length === 1 && productOptions.length > 0" class="single-variant-options">
      <div v-for="option in productOptions" :key="option.name" class="mb-4">
        <h3 class="text-sm font-medium text-gray-900 mb-2">{{ option.name }}:</h3>
        <div class="px-4 py-2 bg-gray-50 rounded-lg inline-block">
          <span class="text-sm font-medium text-gray-700">{{ variants[0][`option${productOptions.indexOf(option) + 1}`] || option.values[0] }}</span>
        </div>
      </div>
    </div>
    
    
    <!-- Debug info when no variants/options -->
    <div v-if="variants.length === 0 && productOptions.length === 0" class="variant-picker-empty">
    <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
      <p class="text-sm text-yellow-800 font-medium mb-2">Variant Picker Debug Info:</p>
      <p class="text-xs text-yellow-700">Product Data Loaded: {{ productData ? 'Yes' : 'No' }}</p>
      <p class="text-xs text-yellow-700">Number of Options: {{ productOptions.length }}</p>
      <p class="text-xs text-yellow-700">Number of Variants: {{ variants.length }}</p>
      <details class="mt-2">
        <summary class="text-xs text-yellow-700 cursor-pointer">View Raw Data</summary>
        <pre class="text-xs mt-2 overflow-auto">{{ JSON.stringify(productData, null, 2) }}</pre>
      </details>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: false,
    default: () => ({})
  },
  selectedVariantId: {
    type: [String, Number],
    default: null
  },
  updateUrl: {
    type: Boolean,
    default: true
  },
  sectionId: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['variant-change', 'media-change', 'product-info-update'])

// For custom element compatibility
const dispatchEvent = (eventName, detail) => {
  const el = document.getElementById('variantPicker')
  if (el) {
    el.dispatchEvent(new CustomEvent(eventName, { detail, bubbles: true }))
  }
}

const selectedOptions = ref({})
const selectedVariant = ref(null)

// Initialize product data from global variable if needed
const initProduct = () => {
  // Check if product was passed as prop
  if (props.product && props.product.id) {
    console.log('Using product from props:', props.product)
    return props.product
  }
  
  // Try to get from global variable
  if (window.productPageData && window.productPageData.product) {
    console.log('Using product from window.productPageData:', window.productPageData.product)
    return window.productPageData.product
  }
  
  console.log('No product data found, returning empty object')
  return {}
}

const productData = ref(initProduct())

const variants = computed(() => productData.value.variants || [])

// Generate options from variants if not provided
const productOptions = computed(() => {
  if (productData.value.options && productData.value.options.length > 0) {
    // Fix position values if they're 0-indexed
    return productData.value.options.map((option, index) => ({
      ...option,
      position: option.position || index + 1
    }))
  }
  
  // Generate options from variants
  const options = []
  if (variants.value.length > 0) {
    // Check for option1
    if (variants.value[0].option1) {
      const option1Values = [...new Set(variants.value.map(v => v.option1).filter(Boolean))]
      options.push({
        name: 'Size',
        position: 1,
        values: option1Values
      })
    }
    
    // Check for option2
    if (variants.value[0].option2) {
      const option2Values = [...new Set(variants.value.map(v => v.option2).filter(Boolean))]
      options.push({
        name: 'Color',
        position: 2,
        values: option2Values
      })
    }
    
    // Check for option3
    if (variants.value[0].option3) {
      const option3Values = [...new Set(variants.value.map(v => v.option3).filter(Boolean))]
      options.push({
        name: 'Option',
        position: 3,
        values: option3Values
      })
    }
  }
  
  return options
})

const optionsWithValues = computed(() => productData.value.options_with_values || productOptions.value)

onMounted(() => {
  // Update product data if needed
  productData.value = initProduct()
  
  // Debug logging
  console.log('ProductVariantPicker mounted with data:', productData.value)
  console.log('Product options:', productOptions.value)
  console.log('Variants:', variants.value)
  console.log('Options with values:', optionsWithValues.value)
  
  // Debug first variant structure
  if (variants.value.length > 0) {
    console.log('First variant structure:', variants.value[0])
  }
  
  // Debug first option structure
  if (productOptions.value.length > 0) {
    console.log('First option structure:', productOptions.value[0])
  }
  
  // Initialize selected options first
  if (variants.value.length > 0) {
    // Initialize with first available variant or selected variant
    let variantToSelect = null
    
    if (props.selectedVariantId) {
      variantToSelect = variants.value.find(v => v.id == props.selectedVariantId)
    }
    
    if (!variantToSelect) {
      variantToSelect = variants.value.find(v => v.available) || variants.value[0]
    }
    
    if (variantToSelect) {
      console.log('Initializing with variant:', variantToSelect)
      
      // Pre-populate selected options based on the variant
      if (variantToSelect.option1) {
        const option1 = productOptions.value.find(opt => opt.position === 1)
        if (option1) {
          selectedOptions.value[option1.name] = variantToSelect.option1
        }
      }
      
      if (variantToSelect.option2) {
        const option2 = productOptions.value.find(opt => opt.position === 2)
        if (option2) {
          selectedOptions.value[option2.name] = variantToSelect.option2
        }
      }
      
      if (variantToSelect.option3) {
        const option3 = productOptions.value.find(opt => opt.position === 3)
        if (option3) {
          selectedOptions.value[option3.name] = variantToSelect.option3
        }
      }
      
      // Use nextTick to ensure DOM is ready
      nextTick(() => {
        selectVariant(variantToSelect)
      })
    }
  }
})

const selectVariant = (variant) => {
  selectedVariant.value = variant
  
  // Update selected options based on variant
  productOptions.value.forEach((option, index) => {
    selectedOptions.value[option.name] = variant[`option${index + 1}`]
  })
  
  // Update URL if enabled
  if (props.updateUrl && variant) {
    updateURL(variant)
  }
  
  // Emit media change event if variant has featured media
  if (variant && variant.featured_media) {
    emit('media-change', variant.featured_media)
    dispatchEvent('media-change', variant.featured_media)
  }
  
  emit('variant-change', variant)
  dispatchEvent('variant-change', variant)
  
  console.log('Variant selected:', variant)
}

const updateURL = (variant) => {
  const url = new URL(window.location)
  if (variant && variant.id) {
    url.searchParams.set('sku', variant.id)
  } else {
    url.searchParams.delete('sku')
  }
  window.history.replaceState({}, document.title, url.toString())
}

const selectOption = (optionName, value) => {
  console.log('Option clicked:', optionName, value)
  
  selectedOptions.value[optionName] = value
  
  // Find matching variant
  const matchingVariant = variants.value.find(variant => {
    return productOptions.value.every((option, index) => {
      const selectedValue = selectedOptions.value[option.name]
      return variant[`option${index + 1}`] === selectedValue
    })
  })
  
  console.log('Matching variant found:', matchingVariant)
  
  if (matchingVariant) {
    selectVariant(matchingVariant)
    
    // Fetch updated product info via AJAX if section ID is provided
    if (props.sectionId) {
      fetchProductInfo(matchingVariant)
    }
  }
}

const fetchProductInfo = async (variant) => {
  if (!variant || !variant.id) return
  
  try {
    const response = await fetch(
      `${window.location.pathname}?sku=${variant.id}&section_id=${props.sectionId}`,
      {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    )
    
    if (!response.ok) throw new Error('Failed to fetch product info')
    
    const html = await response.text()
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    
    // Emit event with parsed HTML for parent to handle updates
    emit('product-info-update', {
      variant: variant,
      html: doc
    })
  } catch (error) {
    console.error('Error fetching product info:', error)
  }
}

const getSelectedValue = (optionName) => {
  return selectedOptions.value[optionName] || ''
}

// Watch for external variant changes
watch(() => props.selectedVariantId, (newId) => {
  if (newId) {
    const variant = variants.value.find(v => v.id == newId)
    if (variant) {
      selectVariant(variant)
    }
  }
})

const isOptionSelected = (optionName, value) => {
  return selectedOptions.value[optionName] === value
}

const isOptionAvailable = (optionName, value) => {
  // Check if any variant with this option value is available
  const optionIndex = productOptions.value.findIndex(opt => opt.name === optionName)
  
  return variants.value.some(variant => {
    const matchesValue = variant[`option${optionIndex + 1}`] === value
    
    // Check if other selected options match
    const otherOptionsMatch = productOptions.value.every((opt, idx) => {
      if (opt.name === optionName) return true
      const selectedValue = selectedOptions.value[opt.name]
      if (!selectedValue) return true
      return variant[`option${idx + 1}`] === selectedValue
    })
    
    return matchesValue && otherOptionsMatch && variant.available
  })
}

const isColorOption = (optionName) => {
  return optionName.toLowerCase().includes('color') || optionName.toLowerCase().includes('colour')
}

const getColorValue = (colorName) => {
  // Map color names to hex values
  const colorMap = {
    'black': '#000000',
    'white': '#FFFFFF',
    'red': '#EF4444',
    'blue': '#3B82F6',
    'green': '#10B981',
    'yellow': '#F59E0B',
    'purple': '#8B5CF6',
    'pink': '#EC4899',
    'gray': '#6B7280',
    'grey': '#6B7280',
    'brown': '#92400E',
    'navy': '#1E3A8A',
    'beige': '#D6D3D1',
    'orange': '#F97316',
  }
  
  return colorMap[colorName.toLowerCase()] || '#E5E7EB'
}

const formatMoney = (cents) => {
  const currency = window.Shopline?.shop?.currency || 'USD'
  const locale = window.Shopline?.locale?.current || 'en'
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(cents / 100)
}

const hasImageOptions = (option) => {
  // Check if this option has associated images
  return optionsWithValues.value.some(opt => 
    opt.name === option.name && opt.values_images && opt.values_images.length > 0
  )
}

const getOptionValuesWithImages = (option) => {
  const optionData = optionsWithValues.value.find(opt => opt.name === option.name)
  if (!optionData || !optionData.values_images) {
    return option.values.map(value => ({ value, image: null }))
  }
  return optionData.values_images
}

const getImageUrl = (image, width = 100) => {
  if (!image) return ''
  // If it's already a URL, return it
  if (typeof image === 'string') return image
  // If it's an image object with src
  if (image.src) return image.src
  return ''
}

const getInventoryMessage = () => {
  if (!selectedVariant.value) return ''
  const quantity = selectedVariant.value.inventory_quantity
  
  if (quantity === undefined || quantity === null) return ''
  if (quantity <= 0) return 'Out of stock'
  if (quantity <= 5) return `Only ${quantity} left in stock`
  if (quantity <= 20) return `${quantity} in stock`
  return 'In stock'
}
</script>

<style>
/* Variant Picker Styles - Using specific selectors to avoid conflicts */
.variant-picker .color-swatch {
  @apply w-10 h-10 rounded-full border-2 border-gray-300 relative overflow-hidden transition-all duration-200;
}

.variant-picker .color-swatch--selected {
  @apply border-gray-900 shadow-md;
}

.variant-picker .color-swatch--unavailable {
  @apply opacity-30 cursor-not-allowed;
}

.variant-picker .color-swatch--unavailable::after {
  content: '';
  @apply absolute inset-0 bg-white bg-opacity-70;
  background-image: linear-gradient(45deg, transparent 45%, currentColor 45%, currentColor 55%, transparent 55%);
}

.variant-picker .color-swatch__checkmark {
  @apply absolute inset-0 flex items-center justify-center text-white;
  background-color: rgba(0, 0, 0, 0.3);
}

.variant-picker .variant-button {
  @apply px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200;
}

.variant-picker .variant-button--selected {
  @apply border-gray-900 bg-gray-900 text-white hover:bg-gray-800;
}

.variant-picker .variant-button--unavailable {
  @apply opacity-30 cursor-not-allowed hover:bg-white line-through;
}

.variant-picker .variant-image-button {
  @apply w-16 h-16 rounded-lg border-2 border-gray-300 overflow-hidden transition-all duration-200 flex items-center justify-center;
}

.variant-picker .variant-image-button--selected {
  @apply border-gray-900 shadow-md ring-2 ring-gray-900 ring-offset-2;
}

.variant-picker .variant-image-button--unavailable {
  @apply opacity-30 cursor-not-allowed;
}

.variant-picker .variant-image-button--unavailable::after {
  content: '';
  @apply absolute inset-0 bg-white bg-opacity-70;
  background-image: linear-gradient(45deg, transparent 45%, currentColor 45%, currentColor 55%, transparent 55%);
}

/* Additional styles for the variant option wrapper */
.variant-picker .variant-option {
  @apply space-y-2;
}

.variant-picker h3 {
  @apply text-sm font-medium text-gray-900;
}
</style>
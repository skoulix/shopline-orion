<template>
  <div class="variant-picker">
    <div v-for="option in productOptions" :key="option.name" class="variant-option mb-6">
      <h3 class="text-sm font-medium text-gray-900 mb-3">
        {{ option.name }}: <span class="font-normal text-gray-600">{{ getSelectedValue(option.name) }}</span>
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
          @click="selectOption(option.name, value)"
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
          @click="selectOption(option.name, value)"
        >
          {{ value }}
        </button>
      </div>
    </div>
    
    <!-- Selected variant info -->
    <div v-if="selectedVariant" class="variant-info mt-6">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-4">
          <span class="text-2xl font-bold text-gray-900">
            {{ formatMoney(selectedVariant.price) }}
          </span>
          <span v-if="selectedVariant.compare_at_price > selectedVariant.price" class="text-lg text-gray-500 line-through">
            {{ formatMoney(selectedVariant.compare_at_price) }}
          </span>
        </div>
        
        <div v-if="selectedVariant.sku" class="text-sm text-gray-600">
          SKU: {{ selectedVariant.sku }}
        </div>
      </div>
      
      <div class="flex items-center justify-between">
        <div v-if="selectedVariant.inventory_quantity !== undefined" class="text-sm text-gray-600">
          {{ getInventoryMessage() }}
        </div>
        
        <div v-if="selectedVariant.available" class="text-sm text-green-600 font-medium">
          In Stock
        </div>
        <div v-else class="text-sm text-red-600 font-medium">
          Out of Stock
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
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

const selectedOptions = ref({})
const selectedVariant = ref(null)

const productOptions = computed(() => props.product.options || [])
const variants = computed(() => props.product.variants || [])
const optionsWithValues = computed(() => props.product.options_with_values || [])

onMounted(() => {
  // Initialize with first available variant or selected variant
  if (props.selectedVariantId) {
    const variant = variants.value.find(v => v.id == props.selectedVariantId)
    if (variant) {
      selectVariant(variant)
    }
  } else if (variants.value.length > 0) {
    const firstAvailable = variants.value.find(v => v.available) || variants.value[0]
    selectVariant(firstAvailable)
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
  }
  
  emit('variant-change', variant)
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
  selectedOptions.value[optionName] = value
  
  // Find matching variant
  const matchingVariant = variants.value.find(variant => {
    return productOptions.value.every((option, index) => {
      const selectedValue = selectedOptions.value[option.name]
      return variant[`option${index + 1}`] === selectedValue
    })
  })
  
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

<style scoped>
.color-swatch {
  @apply w-10 h-10 rounded-full border-2 border-gray-300 relative overflow-hidden transition-all duration-200;
}

.color-swatch--selected {
  @apply border-gray-900 shadow-md;
}

.color-swatch--unavailable {
  @apply opacity-30 cursor-not-allowed;
}

.color-swatch--unavailable::after {
  content: '';
  @apply absolute inset-0 bg-white bg-opacity-70;
  background-image: linear-gradient(45deg, transparent 45%, currentColor 45%, currentColor 55%, transparent 55%);
}

.color-swatch__checkmark {
  @apply absolute inset-0 flex items-center justify-center text-white;
  background-color: rgba(0, 0, 0, 0.3);
}

.variant-button {
  @apply px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200;
}

.variant-button--selected {
  @apply border-gray-900 bg-gray-900 text-white hover:bg-gray-800;
}

.variant-button--unavailable {
  @apply opacity-30 cursor-not-allowed hover:bg-white line-through;
}

.variant-image-button {
  @apply w-16 h-16 rounded-lg border-2 border-gray-300 overflow-hidden transition-all duration-200 flex items-center justify-center;
}

.variant-image-button--selected {
  @apply border-gray-900 shadow-md ring-2 ring-gray-900 ring-offset-2;
}

.variant-image-button--unavailable {
  @apply opacity-30 cursor-not-allowed;
}

.variant-image-button--unavailable::after {
  content: '';
  @apply absolute inset-0 bg-white bg-opacity-70;
  background-image: linear-gradient(45deg, transparent 45%, currentColor 45%, currentColor 55%, transparent 55%);
}
</style>
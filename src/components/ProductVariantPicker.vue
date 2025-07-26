<template>
  <div class="variant-picker">
    <div v-for="option in productOptions" :key="option.name" class="variant-option mb-6">
      <h3 class="text-sm font-medium text-gray-900 mb-3">
        {{ option.name }}: <span class="font-normal text-gray-600">{{ getSelectedValue(option.name) }}</span>
      </h3>
      
      <!-- Color swatches -->
      <div v-if="isColorOption(option.name)" class="flex flex-wrap gap-2">
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
    <div v-if="selectedVariant" class="mt-6 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <span class="text-2xl font-bold text-gray-900">
          {{ formatMoney(selectedVariant.price) }}
        </span>
        <span v-if="selectedVariant.compare_at_price > selectedVariant.price" class="text-lg text-gray-500 line-through">
          {{ formatMoney(selectedVariant.compare_at_price) }}
        </span>
      </div>
      
      <div v-if="selectedVariant.available" class="text-sm text-green-600 font-medium">
        In Stock
      </div>
      <div v-else class="text-sm text-red-600 font-medium">
        Out of Stock
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
  }
})

const emit = defineEmits(['variant-change'])

const selectedOptions = ref({})
const selectedVariant = ref(null)

const productOptions = computed(() => props.product.options || [])
const variants = computed(() => props.product.variants || [])

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
  
  emit('variant-change', variant)
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
    selectedVariant.value = matchingVariant
    emit('variant-change', matchingVariant)
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
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: window.Shopify?.currency?.active || 'USD'
  }).format(cents / 100)
}
</script>

<style scoped>
.color-swatch {
  @apply w-10 h-10 rounded-full border-2 border-gray-300 relative overflow-hidden transition-all duration-200 hover:scale-110;
}

.color-swatch--selected {
  @apply border-gray-900 shadow-md;
}

.color-swatch--unavailable {
  @apply opacity-30 cursor-not-allowed hover:scale-100;
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
</style>
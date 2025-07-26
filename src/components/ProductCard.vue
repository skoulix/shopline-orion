<template>
  <div class="product-card group relative">
    <div class="relative overflow-hidden rounded-lg bg-white">
      <!-- Product Image -->
      <a :href="product.url || '#'" class="block aspect-[3/4]">
        <img
          :src="currentImage"
          :alt="product.title"
          class="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
          @mouseenter="showSecondaryImage"
          @mouseleave="showPrimaryImage"
        />
        
        <!-- Sale Badge -->
        <div
          v-if="isOnSale"
          class="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 text-xs font-medium rounded"
        >
          {{ salePercentage }}% OFF
        </div>
        
        <!-- Out of Stock Badge -->
        <div
          v-if="!product.available"
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
        >
          <span class="bg-white text-secondary-900 px-4 py-2 font-medium rounded">
            Out of Stock
          </span>
        </div>
      </a>
      
      <!-- Quick Actions -->
      <div class="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          v-if="product.available && enableQuickAdd"
          @click="handleQuickAdd"
          variant="primary"
          size="small"
          :full-width="true"
        >
          Quick Add
        </Button>
        <Button
          v-if="enableQuickView"
          @click="handleQuickView"
          variant="secondary"
          size="small"
          :full-width="true"
          class="mt-2"
        >
          Quick View
        </Button>
      </div>
    </div>
    
    <!-- Product Info -->
    <div class="mt-4">
      <!-- Color Swatches -->
      <div v-if="hasColorOptions" class="mb-2">
        <div class="flex gap-1 flex-wrap">
          <button
            v-for="color in colorOptions"
            :key="color.value"
            @click="selectColor(color)"
            :title="color.value"
            :class="[
              'w-6 h-6 rounded-full border-2 transition-all',
              selectedColor === color.value ? 'border-secondary-900 scale-110' : 'border-secondary-300'
            ]"
            :style="{ backgroundColor: getColorCode(color.value) }"
          />
        </div>
      </div>
      
      <!-- Title -->
      <h3 class="text-sm font-medium text-secondary-900 line-clamp-2">
        <a :href="product.url || '#'" class="hover:text-primary-600 transition-colors">
          {{ product.title }}
        </a>
      </h3>
      
      <!-- Price -->
      <div class="mt-1 flex items-center gap-2">
        <span class="text-lg font-semibold text-secondary-900">
          {{ formatPrice(currentPrice) }}
        </span>
        <span
          v-if="compareAtPrice > currentPrice"
          class="text-sm text-secondary-500 line-through"
        >
          {{ formatPrice(compareAtPrice) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Button from './Button.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  enableQuickAdd: {
    type: Boolean,
    default: true
  },
  enableQuickView: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['quick-add', 'quick-view'])

const selectedColor = ref('')
const hovering = ref(false)

const currentImage = computed(() => {
  if (hovering.value && props.product.media?.[1]) {
    return props.product.media[1].src
  }
  return props.product.featured_media?.src || '/placeholder.jpg'
})

const hasColorOptions = computed(() => {
  return props.product.options?.some(opt => 
    opt.name.toLowerCase().includes('color') || opt.name.toLowerCase().includes('colour')
  )
})

const colorOptions = computed(() => {
  const colorOption = props.product.options?.find(opt => 
    opt.name.toLowerCase().includes('color') || opt.name.toLowerCase().includes('colour')
  )
  return colorOption?.values || []
})

const currentPrice = computed(() => {
  return props.product.price || 0
})

const compareAtPrice = computed(() => {
  return props.product.compare_at_price || 0
})

const isOnSale = computed(() => {
  return props.product.available && compareAtPrice.value > currentPrice.value
})

const salePercentage = computed(() => {
  if (!isOnSale.value) return 0
  return Math.round(((compareAtPrice.value - currentPrice.value) / compareAtPrice.value) * 100)
})

const formatPrice = (price) => {
  // This should use the shop's currency format
  return `$${(price / 100).toFixed(2)}`
}

const getColorCode = (colorName) => {
  // Map common color names to hex codes
  const colorMap = {
    'black': '#000000',
    'white': '#FFFFFF',
    'red': '#FF0000',
    'blue': '#0000FF',
    'green': '#008000',
    'yellow': '#FFFF00',
    'pink': '#FFC0CB',
    'purple': '#800080',
    'orange': '#FFA500',
    'brown': '#A52A2A',
    'gray': '#808080',
    'grey': '#808080',
    'navy': '#000080',
    'beige': '#F5F5DC',
    'cream': '#FFFDD0'
  }
  
  const lowerColor = colorName.toLowerCase()
  return colorMap[lowerColor] || `#${lowerColor.replace('#', '')}`
}

const showSecondaryImage = () => {
  if (props.product.media?.length > 1) {
    hovering.value = true
  }
}

const showPrimaryImage = () => {
  hovering.value = false
}

const selectColor = (color) => {
  selectedColor.value = color.value
  // In a real implementation, this would update the variant
}

const handleQuickAdd = () => {
  emit('quick-add', props.product)
}

const handleQuickView = () => {
  emit('quick-view', props.product)
}
</script>
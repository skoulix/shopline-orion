<template>
  <div class="cart-item">
    <div class="flex gap-4">
      <!-- Product Image -->
      <div class="cart-item-image">
        <a :href="item.url" class="block">
          <img 
            :src="item.image || '/assets/placeholder-product.svg'"
            :alt="item.product_title"
            class="w-full h-full object-cover rounded-md"
            loading="lazy"
          >
        </a>
      </div>
      
      <!-- Product Details -->
      <div class="cart-item-details flex-1">
        <div class="flex justify-between items-start mb-2">
          <div>
            <h3 class="font-medium text-gray-900">
              <a :href="item.url" class="hover:text-red-600 transition-colors">
                {{ item.product_title }}
              </a>
            </h3>
            <p v-if="item.variant_title && item.variant_title !== 'Default Title'" class="text-sm text-gray-500 mt-1">
              {{ item.variant_title }}
            </p>
            
            <!-- Product Properties -->
            <div v-if="item.properties && Object.keys(item.properties).length" class="mt-2 space-y-1">
              <p v-for="(value, key) in item.properties" :key="key" class="text-xs text-gray-600">
                <span class="font-medium">{{ key }}:</span> {{ value }}
              </p>
            </div>
          </div>
          
          <!-- Price on mobile -->
          <div class="text-right lg:hidden">
            <p class="font-medium text-gray-900">{{ formatPrice(item.final_line_price) }}</p>
            <p v-if="item.original_line_price > item.final_line_price" class="text-sm text-gray-500 line-through">
              {{ formatPrice(item.original_line_price) }}
            </p>
          </div>
        </div>
        
        <!-- Discounts -->
        <div v-if="item.discounts && item.discounts.length" class="mb-2">
          <div v-for="discount in item.discounts" :key="discount.id" class="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z" clip-rule="evenodd" />
            </svg>
            {{ discount.title }} (-{{ formatPrice(discount.amount) }})
          </div>
        </div>
        
        <!-- Quantity and Actions -->
        <div class="flex items-center justify-between mt-3">
          <div class="flex items-center gap-3">
            <quantity-selector
              v-model="localQuantity"
              :min="0"
              :max="maxQuantity"
              @update:modelValue="handleQuantityChange"
              :disabled="updating"
              class="w-24"
            ></quantity-selector>
            
            <button 
              type="button"
              @click="handleRemove"
              class="text-sm text-gray-500 hover:text-red-600 transition-colors"
              :disabled="updating"
            >
              {{ updating ? 'Removing...' : 'Remove' }}
            </button>
          </div>
          
          <!-- Price on desktop -->
          <div class="text-right hidden lg:block">
            <p class="font-medium text-gray-900">{{ formatPrice(item.final_line_price) }}</p>
            <p v-if="item.original_line_price > item.final_line_price" class="text-sm text-gray-500 line-through">
              {{ formatPrice(item.original_line_price) }}
            </p>
            <p v-if="item.original_line_price > item.final_line_price" class="text-xs text-green-600 font-medium">
              Save {{ calculateSavingsPercentage() }}%
            </p>
          </div>
        </div>
        
        <!-- Stock Warning -->
        <p v-if="showStockWarning" class="text-xs text-amber-600 mt-2">
          Only {{ item.variant.inventory_quantity }} left in stock
        </p>
        
        <!-- Error Message -->
        <p v-if="errorMessage" class="text-xs text-red-600 mt-2">
          {{ errorMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update', 'remove'])

// State
const localQuantity = ref(props.item.quantity)
const updating = ref(false)
const errorMessage = ref('')

// Computed
const maxQuantity = computed(() => {
  if (!props.item.variant) return 999
  if (props.item.variant.inventory_policy === 'continue') return 999
  return Math.min(props.item.variant.inventory_quantity || 999, 999)
})

const showStockWarning = computed(() => {
  return props.item.variant?.inventory_quantity && 
         props.item.variant.inventory_quantity <= 10 &&
         props.item.variant.inventory_policy !== 'continue'
})

// Methods
const formatPrice = (price) => {
  // This would use the actual money formatting from Shopline
  return `$${(price / 100).toFixed(2)}`
}

const calculateSavingsPercentage = () => {
  const savings = props.item.original_line_price - props.item.final_line_price
  return Math.round((savings / props.item.original_line_price) * 100)
}

const handleQuantityChange = async (newQuantity) => {
  if (updating.value) return
  
  updating.value = true
  errorMessage.value = ''
  
  try {
    await emit('update', {
      key: props.item.key,
      quantity: newQuantity
    })
    
    // If quantity is 0, it's effectively a remove
    if (newQuantity === 0) {
      emit('remove', props.item.key)
    }
  } catch (error) {
    console.error('Failed to update quantity:', error)
    errorMessage.value = 'Failed to update quantity. Please try again.'
    // Revert quantity on error
    localQuantity.value = props.item.quantity
  } finally {
    updating.value = false
  }
}

const handleRemove = async () => {
  if (updating.value) return
  
  updating.value = true
  errorMessage.value = ''
  
  try {
    await emit('remove', props.item.key)
  } catch (error) {
    console.error('Failed to remove item:', error)
    errorMessage.value = 'Failed to remove item. Please try again.'
  } finally {
    updating.value = false
  }
}

// Watch for external quantity changes
watch(() => props.item.quantity, (newQuantity) => {
  localQuantity.value = newQuantity
})
</script>

<style scoped>
.cart-item {
  @apply p-4 lg:p-6 border-b border-gray-200 last:border-b-0;
}

.cart-item-image {
  @apply flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24;
}

.cart-item-details {
  @apply min-w-0;
}

/* Loading state */
.cart-item[data-updating="true"] {
  @apply opacity-60 pointer-events-none;
}
</style>
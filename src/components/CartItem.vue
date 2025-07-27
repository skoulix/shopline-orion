<template>
  <div class="cart-item" :data-updating="updating">
    <div class="cart-item__content">
      <!-- Product Image -->
      <div class="cart-item__image">
        <a :href="item.url" class="cart-item__image-link">
          <img 
            :src="item.image || '/assets/placeholder-product.svg'"
            :alt="item.product_title"
            class="cart-item__image-img"
            loading="lazy"
          >
        </a>
      </div>
      
      <!-- Product Details -->
      <div class="cart-item__details">
        <div class="cart-item__header">
          <div class="cart-item__info">
            <h3 class="cart-item__title">
              <a :href="item.url" class="cart-item__title-link">
                {{ item.product_title }}
              </a>
            </h3>
            <p v-if="item.variant_title && item.variant_title !== 'Default Title'" class="cart-item__variant">
              {{ item.variant_title }}
            </p>
            
            <!-- Product Properties -->
            <div v-if="item.properties && Object.keys(item.properties).length" class="cart-item__properties">
              <p v-for="(value, key) in item.properties" :key="key" class="cart-item__property">
                <span class="cart-item__property-key">{{ key }}:</span> {{ value }}
              </p>
            </div>
          </div>
          
          <!-- Price on mobile -->
          <div class="cart-item__price cart-item__price--mobile">
            <p class="cart-item__price-current">{{ formatPrice(item.final_line_price) }}</p>
            <p v-if="item.original_line_price > item.final_line_price" class="cart-item__price-original">
              {{ formatPrice(item.original_line_price) }}
            </p>
          </div>
        </div>
        
        <!-- Discounts -->
        <div v-if="item.discounts && item.discounts.length" class="cart-item__discounts">
          <div v-for="discount in item.discounts" :key="discount.id" class="cart-item__discount">
            <svg class="cart-item__discount-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z" clip-rule="evenodd" />
            </svg>
            {{ discount.title }} (-{{ formatPrice(discount.amount) }})
          </div>
        </div>
        
        <!-- Quantity and Actions -->
        <div class="cart-item__actions">
          <div class="cart-item__actions-left">
            <QuantitySelector
              v-model="localQuantity"
              :min="0"
              :max="maxQuantity"
              @update:modelValue="handleQuantityChange"
              :disabled="updating"
            />
            
            <button 
              type="button"
              @click="handleRemove"
              class="cart-item__remove"
              :disabled="updating"
              aria-label="Remove item from cart"
            >
              <svg v-if="!updating" class="cart-item__remove-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <svg v-else class="cart-item__remove-icon cart-item__remove-icon--loading" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </div>
          
          <!-- Price on desktop -->
          <div class="cart-item__price cart-item__price--desktop">
            <p class="cart-item__price-current">{{ formatPrice(item.final_line_price) }}</p>
            <p v-if="item.original_line_price > item.final_line_price" class="cart-item__price-original">
              {{ formatPrice(item.original_line_price) }}
            </p>
            <p v-if="item.original_line_price > item.final_line_price" class="cart-item__price-savings">
              Save {{ calculateSavingsPercentage() }}%
            </p>
          </div>
        </div>
        
        <!-- Stock Warning -->
        <p v-if="showStockWarning" class="cart-item__warning">
          Only {{ item.variant.inventory_quantity }} left in stock
        </p>
        
        <!-- Error Message -->
        <p v-if="errorMessage" class="cart-item__error">
          {{ errorMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import QuantitySelector from './QuantitySelector.vue'

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
/* Reset base styles */
.cart-item * {
  box-sizing: border-box;
}

.cart-item p,
.cart-item h3 {
  margin: 0;
}

.cart-item a {
  color: inherit;
  text-decoration: none;
}

.cart-item button {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.cart-item svg {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}

.cart-item {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #374151;
  background-color: white;
}

.cart-item:last-child {
  border-bottom: 0;
}

@media (min-width: 1024px) {
  .cart-item {
    padding: 1.5rem;
  }
}

.cart-item__content {
  display: flex;
  gap: 1rem;
}

.cart-item__image {
  flex-shrink: 0;
  width: 5rem;
  height: 5rem;
  min-width: 5rem;
}

@media (min-width: 1024px) {
  .cart-item__image {
    width: 6rem;
    height: 6rem;
    min-width: 6rem;
  }
}

.cart-item__image-link {
  display: block;
  width: 100%;
  height: 100%;
}

.cart-item__image-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.375rem;
}

.cart-item__details {
  flex: 1;
  min-width: 0;
}

.cart-item__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.cart-item__info {
  flex: 1;
  padding-right: 1rem;
}

.cart-item__title {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
  color: #111827;
  margin: 0 0 0.25rem 0;
}

.cart-item__title-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.cart-item__title-link:hover {
  color: #dc2626;
}

.cart-item__variant {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
  margin-bottom: 0;
}

.cart-item__properties {
  margin-top: 0.5rem;
}

.cart-item__properties > * + * {
  margin-top: 0.25rem;
}

.cart-item__property {
  font-size: 0.75rem;
  color: #4b5563;
  margin: 0;
}

.cart-item__property-key {
  font-weight: 500;
}

.cart-item__price {
  text-align: right;
  flex-shrink: 0;
}

.cart-item__price--mobile {
  display: block;
}

.cart-item__price--desktop {
  display: none;
}

@media (min-width: 1024px) {
  .cart-item__price--mobile {
    display: none;
  }
  
  .cart-item__price--desktop {
    display: block;
  }
}

.cart-item__price-current {
  font-weight: 600;
  font-size: 1.125rem;
  color: #111827;
  margin: 0;
  letter-spacing: -0.025em;
}

.cart-item__price-original {
  font-size: 0.875rem;
  color: #9ca3af;
  text-decoration: line-through;
  margin: 0.25rem 0 0 0;
}

.cart-item__price-savings {
  font-size: 0.75rem;
  color: #10b981;
  font-weight: 600;
  margin: 0.25rem 0 0 0;
  background-color: #d1fae5;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  display: inline-block;
}

.cart-item__discounts {
  margin-bottom: 0.5rem;
}

.cart-item__discount {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #059669;
  background-color: #d1fae5;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.cart-item__discount-icon {
  width: 0.75rem;
  height: 0.75rem;
}

.cart-item__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
}

.cart-item__actions-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.cart-item__remove {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0.375rem;
  border-radius: 0.375rem;
}

.cart-item__remove:hover {
  color: #ef4444;
  background-color: #fee2e2;
}

.cart-item__remove:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.cart-item__remove-icon {
  width: 1.125rem;
  height: 1.125rem;
}

.cart-item__remove-icon--loading {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.cart-item__warning {
  font-size: 0.75rem;
  color: #d97706;
  margin-top: 0.5rem;
}

.cart-item__error {
  font-size: 0.75rem;
  color: #dc2626;
  margin-top: 0.5rem;
}

/* Loading state */
.cart-item[data-updating="true"] {
  opacity: 0.6;
  pointer-events: none;
}
</style>
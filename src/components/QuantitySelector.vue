<template>
  <div class="quantity-selector" :class="{ 'quantity-selector--small': size === 'small' }">
    <button
      type="button"
      class="quantity-button quantity-button--minus"
      :class="{ 'quantity-button--small': size === 'small' }"
      :disabled="modelValue <= min"
      @click="decrease"
      aria-label="Decrease quantity"
    >
      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
      </svg>
    </button>
    
    <input
      type="number"
      class="quantity-input"
      :class="{ 'quantity-input--small': size === 'small' }"
      :value="modelValue"
      :min="min"
      :max="max"
      @input="handleInput"
      @blur="handleBlur"
      aria-label="Quantity"
    />
    
    <button
      type="button"
      class="quantity-button quantity-button--plus"
      :class="{ 'quantity-button--small': size === 'small' }"
      :disabled="modelValue >= max"
      @click="increase"
      aria-label="Increase quantity"
    >
      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { computed, getCurrentInstance } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1
  },
  min: {
    type: Number,
    default: 1
  },
  max: {
    type: Number,
    default: 999
  },
  step: {
    type: Number,
    default: 1
  },
  size: {
    type: String,
    default: 'default', // 'default', 'small'
    validator: (value) => ['default', 'small'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'update'])
const instance = getCurrentInstance()

const value = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    const clampedValue = Math.max(props.min, Math.min(props.max, newValue))
    emit('update:modelValue', clampedValue)
    emit('update', clampedValue)
    
    // Dispatch custom event for non-Vue listeners when used as custom element
    if (instance?.vnode?.el?.parentElement?.tagName === 'QUANTITY-SELECTOR') {
      const element = instance.vnode.el.parentElement;
      const key = element.getAttribute('data-line-key');
      if (key) {
        const event = new CustomEvent('quantity-update', {
          detail: { key, value: clampedValue },
          bubbles: true
        });
        element.dispatchEvent(event);
      }
    }
  }
})

const decrease = () => {
  if (value.value > props.min) {
    value.value = value.value - props.step
  }
}

const increase = () => {
  if (value.value < props.max) {
    value.value = value.value + props.step
  }
}

const handleInput = (event) => {
  const newValue = parseInt(event.target.value) || props.min
  value.value = newValue
}

const handleBlur = (event) => {
  const newValue = parseInt(event.target.value) || props.min
  value.value = newValue
  event.target.value = value.value
}
</script>

<style scoped>
.quantity-selector {
  display: inline-flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: white;
}

.quantity-button {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  transition: all 0.2s;
  color: #4b5563;
  cursor: pointer;
  border: none;
}

.quantity-button:hover {
  background-color: #f3f4f6;
  color: #111827;
}

.quantity-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.quantity-button:disabled:hover {
  background-color: #f9fafb;
  color: #4b5563;
}

.quantity-button--minus {
  border-right: 1px solid #d1d5db;
}

.quantity-button--plus {
  border-left: 1px solid #d1d5db;
}

.quantity-input {
  width: 4rem;
  height: 2.5rem;
  text-align: center;
  border: 0;
  background-color: white;
  color: #111827;
  font-weight: 500;
  font-size: 0.875rem;
  -moz-appearance: textfield;
}

.quantity-input:focus {
  outline: none;
  box-shadow: none;
}

.quantity-input::-webkit-outer-spin-button,
.quantity-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Small variant styles */
.quantity-selector--small {
  border-radius: 0.375rem;
}

.quantity-button--small {
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
}

.quantity-button--small svg {
  width: 0.75rem;
  height: 0.75rem;
}

.quantity-input--small {
  width: 2.5rem;
  height: 2rem;
  font-size: 0.75rem;
  padding: 0.25rem;
}
</style>
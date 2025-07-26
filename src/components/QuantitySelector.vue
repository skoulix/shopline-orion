<template>
  <div class="quantity-selector">
    <button
      type="button"
      class="quantity-button quantity-button--minus"
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
import { computed } from 'vue'

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
  }
})

const emit = defineEmits(['update:modelValue', 'update'])

const value = computed({
  get: () => props.modelValue,
  set: (newValue) => {
    const clampedValue = Math.max(props.min, Math.min(props.max, newValue))
    emit('update:modelValue', clampedValue)
    emit('update', clampedValue)
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
  @apply inline-flex items-center border border-gray-300 rounded-lg overflow-hidden;
}

.quantity-button {
  @apply w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-gray-600 hover:text-gray-900;
}

.quantity-button:disabled {
  @apply opacity-30 cursor-not-allowed hover:bg-gray-50 hover:text-gray-600;
}

.quantity-button--minus {
  @apply border-r border-gray-300;
}

.quantity-button--plus {
  @apply border-l border-gray-300;
}

.quantity-input {
  @apply w-16 h-10 text-center border-0 focus:outline-none focus:ring-0 bg-white text-gray-900 font-medium;
  -moz-appearance: textfield;
}

.quantity-input::-webkit-outer-spin-button,
.quantity-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
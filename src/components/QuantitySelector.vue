<template>
  <div 
    class="inline-flex items-center overflow-hidden bg-white"
    :class="size === 'small' ? 'quantity-selector-small' : 'quantity-selector'"
    :style="{
      border: `var(--input-border-thickness, 1px) solid rgba(var(--color-entry-line, 61, 50, 89), var(--input-border-opacity-decimal, 1))`,
      borderRadius: 'var(--input-border-radius, 30px)'
    }"
  >
    <button
      type="button"
      class="flex items-center justify-center bg-gray-50 transition-all duration-200 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-50 disabled:hover:text-gray-600"
      :class="size === 'small' ? 'w-8 h-8 p-1' : 'w-10 h-10'"
      :style="{
        borderRight: `1px solid rgba(var(--color-entry-line, 61, 50, 89), var(--input-border-opacity-decimal, 1))`
      }"
      :disabled="modelValue <= min"
      @click="decrease"
      aria-label="Decrease quantity"
    >
      <svg 
        :class="size === 'small' ? 'w-3 h-3' : 'w-3 h-3'" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
      </svg>
    </button>
    
    <input
      type="number"
      class="quantity-input text-center bg-white text-gray-900 font-medium"
      :class="size === 'small' ? 'w-10 h-8 text-xs p-1' : 'w-16 h-10 text-sm'"
      :value="modelValue"
      :min="min"
      :max="max"
      @input="handleInput"
      @blur="handleBlur"
      aria-label="Quantity"
    />
    
    <button
      type="button"
      class="flex items-center justify-center bg-gray-50 transition-all duration-200 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-50 disabled:hover:text-gray-600"
      :class="size === 'small' ? 'w-8 h-8 p-1' : 'w-10 h-10'"
      :style="{
        borderLeft: `1px solid rgba(var(--color-entry-line, 61, 50, 89), var(--input-border-opacity-decimal, 1))`
      }"
      :disabled="modelValue >= max"
      @click="increase"
      aria-label="Increase quantity"
    >
      <svg 
        :class="size === 'small' ? 'w-3 h-3' : 'w-3 h-3'" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
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
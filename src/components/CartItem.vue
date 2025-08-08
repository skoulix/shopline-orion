<template>
  <div
    class="p-3 lg:p-4 border-b border-gray-200 last:border-b-0 bg-white hover:bg-gray-50 transition-colors"
    :data-updating="updating"
  >
    <div class="flex gap-3 lg:gap-4">
      <!-- Product Image -->
      <div class="flex-shrink-0">
        <a
          :href="item.url"
          class="block relative overflow-hidden rounded-lg bg-gray-100"
        >
          <img
            :src="optimizedImage"
            :alt="item.product_title"
            class="w-20 h-20 lg:w-24 lg:h-24 object-cover"
            loading="lazy"
          />
        </a>
      </div>

      <!-- Product Details -->
      <div class="flex-1 min-w-0">
        <div class="flex justify-between gap-4 mb-3">
          <div class="flex-1">
            <h3 class="text-base lg:text-lg font-medium mb-1">
              <a
                :href="item.url"
                class="text-gray-900 hover:text-gray-700 transition-colors"
              >
                {{ item.product_title }}
              </a>
            </h3>
            <p
              v-if="
                item.variant_title && item.variant_title !== 'Default Title'
              "
              class="text-sm text-gray-600 mb-2"
            >
              {{ item.variant_title }}
            </p>

            <!-- Product Properties -->
            <div
              v-if="item.properties && Object.keys(item.properties).length"
              class="space-y-1 mt-2"
            >
              <p
                v-for="(value, key) in item.properties"
                :key="key"
                class="text-xs text-gray-600"
              >
                <span class="font-medium">{{ key }}:</span>
                {{ value }}
              </p>
            </div>
          </div>

          <!-- Price on mobile -->
          <div class="lg:hidden text-right flex-shrink-0">
            <p class="text-base font-semibold text-gray-900 whitespace-nowrap">
              {{ formatPrice(item.line_price || item.price * item.quantity) }}
            </p>
            <p
              v-if="item.original_price && item.price < item.original_price"
              class="text-sm text-gray-500 line-through"
            >
              {{ formatPrice(item.original_price * item.quantity) }}
            </p>
          </div>
        </div>

        <!-- Discounts -->
        <div
          v-if="item.discounts && item.discounts.length"
          class="space-y-2 mb-3"
        >
          <div
            v-for="discount in item.discounts"
            :key="discount.id"
            class="flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded-lg"
          >
            <svg
              class="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z"
                clip-rule="evenodd"
              />
            </svg>
            {{ discount.title }} (-{{
              formatPrice(discount.amount || discount.total_allocated_amount)
            }})
          </div>
        </div>

        <!-- Quantity and Actions -->
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <QuantitySelector
              v-model="localQuantity"
              :min="0"
              :max="maxQuantity"
              @update:modelValue="handleQuantityChange"
              :disabled="updating"
              size="small"
            />

            <button
              type="button"
              @click="handleRemove"
              class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
              :disabled="updating"
              aria-label="Remove item from cart"
            >
              <svg
                v-if="!updating"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <svg
                v-else
                class="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </button>
          </div>

          <!-- Price on desktop -->
          <div class="hidden lg:block text-right flex-shrink-0">
            <p class="text-lg font-semibold text-gray-900 whitespace-nowrap">
              {{ formatPrice(item.line_price || item.price * item.quantity) }}
            </p>
            <p
              v-if="item.original_price && item.price < item.original_price"
              class="text-sm text-gray-500 line-through"
            >
              {{ formatPrice(item.original_price * item.quantity) }}
            </p>
            <p
              v-if="item.original_price && item.price < item.original_price"
              class="text-xs text-green-600 font-medium mt-1"
            >
              Save
              {{
                Math.round(
                  ((item.original_price - item.price) / item.original_price) *
                    100
                )
              }}%
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
import { ref, computed, watch } from "vue";
import QuantitySelector from "./QuantitySelector.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update", "remove"]);

// State
const localQuantity = ref(props.item.quantity);
const updating = ref(false);
const errorMessage = ref("");

// Computed
const maxQuantity = computed(() => {
  if (!props.item.variant) return 999;
  if (props.item.variant.inventory_policy === "continue") return 999;
  return Math.min(props.item.variant.inventory_quantity || 999, 999);
});

const showStockWarning = computed(() => {
  return (
    props.item.variant?.inventory_quantity &&
    props.item.variant.inventory_quantity <= 10 &&
    props.item.variant.inventory_policy !== "continue"
  );
});

const optimizedImage = computed(() => {
  const imageUrl = props.item.image || "/assets/placeholder-product.svg";

  // Use global image sizing function for cart items (150px width)
  return window.getImageUrl && imageUrl !== "/assets/placeholder-product.svg"
    ? window.getImageUrl(imageUrl, { preset: "cart-item" })
    : imageUrl;
});

// Methods
const formatPrice = (price) => {
  if (!price && price !== 0) return "$0.00";

  // Get currency and locale settings from Shopline
  const moneyFormat = Shopline?.shop?.money_format || "${{amount}}";
  const locale = Shopline?.locale?.current || "en";

  // Format the number according to the locale
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const amount = formatter.format(parseFloat(price));

  // Replace {{amount}} placeholder with formatted amount
  return moneyFormat.replace("{{amount}}", amount);
};

const handleQuantityChange = async (newQuantity) => {
  if (updating.value) return;

  updating.value = true;
  errorMessage.value = "";

  try {
    emit("update", {
      key: props.item.key,
      quantity: newQuantity,
    });

    // If quantity is 0, it's effectively a remove
    if (newQuantity === 0) {
      emit("remove", props.item.key);
    }
  } catch (error) {
    console.error("Failed to update quantity:", error);
    errorMessage.value = "Failed to update quantity. Please try again.";
    // Revert quantity on error
    localQuantity.value = props.item.quantity;
  } finally {
    updating.value = false;
  }
};

const handleRemove = async () => {
  if (updating.value) return;

  updating.value = true;
  errorMessage.value = "";

  try {
    emit("remove", props.item.key);
  } catch (error) {
    console.error("Failed to remove item:", error);
    errorMessage.value = "Failed to remove item. Please try again.";
  } finally {
    updating.value = false;
  }
};

// Watch for external quantity changes
watch(
  () => props.item.quantity,
  (newQuantity) => {
    localQuantity.value = newQuantity;
  }
);
</script>
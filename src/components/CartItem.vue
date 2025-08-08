<template>
  <div class="cart-item" :data-updating="updating">
    <div class="cart-item__content">
      <!-- Product Image -->
      <div class="cart-item__image">
        <a :href="item.url" class="cart-item__image-link">
          <img
            :src="optimizedImage"
            :alt="item.product_title"
            class="cart-item__image-img"
            loading="lazy"
          />
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
            <p
              v-if="
                item.variant_title && item.variant_title !== 'Default Title'
              "
              class="cart-item__variant"
            >
              {{ item.variant_title }}
            </p>

            <!-- Product Properties -->
            <div
              v-if="item.properties && Object.keys(item.properties).length"
              class="cart-item__properties"
            >
              <p
                v-for="(value, key) in item.properties"
                :key="key"
                class="cart-item__property"
              >
                <span class="cart-item__property-key">{{ key }}:</span>
                {{ value }}
              </p>
            </div>
          </div>

          <!-- Price on mobile -->
          <div class="cart-item__price cart-item__price--mobile">
            <p class="cart-item__price-current">
              {{ formatPrice(item.line_price || item.price * item.quantity) }}
            </p>
            <p
              v-if="item.original_price && item.price < item.original_price"
              class="cart-item__price-original"
            >
              {{ formatPrice(item.original_price * item.quantity) }}
            </p>
          </div>
        </div>

        <!-- Discounts -->
        <div
          v-if="item.discounts && item.discounts.length"
          class="cart-item__discounts"
        >
          <div
            v-for="discount in item.discounts"
            :key="discount.id"
            class="cart-item__discount"
          >
            <svg
              class="cart-item__discount-icon"
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
        <div class="cart-item__actions">
          <div class="cart-item__actions-left">
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
              class="cart-item__remove"
              :disabled="updating"
              aria-label="Remove item from cart"
            >
              <svg
                v-if="!updating"
                class="cart-item__remove-icon"
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
                class="cart-item__remove-icon cart-item__remove-icon--loading"
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
          <div class="cart-item__price cart-item__price--desktop">
            <p class="cart-item__price-current">
              {{ formatPrice(item.line_price || item.price * item.quantity) }}
            </p>
            <p
              v-if="item.original_price && item.price < item.original_price"
              class="cart-item__price-original"
            >
              {{ formatPrice(item.original_price * item.quantity) }}
            </p>
            <p
              v-if="item.original_price && item.price < item.original_price"
              class="cart-item__price-savings"
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
  const currency = Shopline?.shop?.currency || "USD";
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

const calculateSavingsPercentage = () => {
  if (!props.item.original_price || !props.item.price) return 0;
  const savings = props.item.original_price - props.item.price;
  return Math.round((savings / props.item.original_price) * 100);
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

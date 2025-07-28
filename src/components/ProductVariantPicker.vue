<template>
	<div class="variant-picker">
		<!-- Single variant display -->
		<div
			v-if="variants.length === 1 && productOptions.length === 0"
			class="single-variant-info mb-6 p-4 bg-gray-50 rounded-lg">
			<div class="text-sm text-gray-600 mb-2">Selected Option:</div>
			<div class="font-medium text-gray-900">{{ variants[0].title }}</div>
		</div>

		<!-- Multiple variants or options -->
		<div v-else-if="productOptions.length > 0">
			<div
				v-for="option in productOptions"
				:key="option.name"
				class="variant-option mb-6">
				<h3 class="text-sm font-medium text-gray-900 mb-3">
					{{ option.name || 'Option' }}:
					<span class="font-normal text-gray-600">{{
						getSelectedValue(option.name) || 'Select'
					}}</span>
				</h3>

				<!-- Image-based variant options -->
				<div
					v-if="hasImageOptions(option)"
					class="flex flex-wrap gap-3">
					<button
						v-for="(item, index) in getOptionValuesWithImages(
							option
						)"
						:key="item.value"
						type="button"
						:class="[
							'variant-image-button',
							isOptionSelected(option.name, item.value)
								? 'variant-image-button--selected'
								: '',
							!isOptionAvailable(option.name, item.value)
								? 'variant-image-button--unavailable'
								: '',
						]"
						:title="item.value"
						:aria-label="`Select ${option.name} ${item.value}`"
						:disabled="!isOptionAvailable(option.name, item.value)"
						@click="selectOption(option.name, item.value)">
						<img
							v-if="item.image"
							:src="getImageUrl(item.image, 100)"
							:alt="item.value"
							class="w-full h-full object-cover" />
						<span v-else class="text-xs">{{ item.value }}</span>
					</button>
				</div>

				<!-- Color swatches -->
				<div
					v-else-if="isColorOption(option.name)"
					class="color-swatches-wrapper"
					style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
					<button
						v-for="value in option.values"
						:key="value"
						type="button"
						:class="[
							'color-swatch',
							isOptionSelected(option.name, value)
								? 'color-swatch--selected'
								: '',
							!isOptionAvailable(option.name, value)
								? 'color-swatch--unavailable'
								: '',
						]"
						:style="getColorSwatchStyle(value)"
						:title="value"
						:aria-label="`Select ${option.name} ${value}`"
						:disabled="!isOptionAvailable(option.name, value)"
						@click.stop="selectOption(option.name, value)"
						@mouseenter="handleColorSwatchHover($event, value, true)"
						@mouseleave="handleColorSwatchHover($event, value, false)">
						<span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0;">{{ value }}</span>
						<span
							v-if="isOptionSelected(option.name, value)"
							class="color-swatch__checkmark"
							style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
							<!-- Universal checkmark with smart contrast -->
							<svg
								style="width: 1.25rem; height: 1.25rem; filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.5)) drop-shadow(-1px -1px 1px rgba(255,255,255,0.5));"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
									style="fill: white; stroke: black; stroke-width: 0.5px; paint-order: stroke;" />
							</svg>
						</span>
					</button>
				</div>

				<!-- Size/Text options -->
				<div v-else class="variant-buttons-wrapper" style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
					<button
						v-for="value in option.values"
						:key="value"
						type="button"
						:class="[
							'variant-button',
							isOptionSelected(option.name, value)
								? 'variant-button--selected'
								: '',
							!isOptionAvailable(option.name, value)
								? 'variant-button--unavailable'
								: '',
						]"
						:style="getButtonStyle(option.name, value)"
						:aria-label="`Select ${option.name} ${value}`"
						:disabled="!isOptionAvailable(option.name, value)"
						@click.stop="selectOption(option.name, value)"
						@mouseenter="$event.target.style.backgroundColor = isOptionSelected(option.name, value) ? 'rgb(31 41 55)' : 'rgb(249 250 251)'"
						@mouseleave="$event.target.style.backgroundColor = isOptionSelected(option.name, value) ? 'rgb(17 24 39)' : 'rgb(255 255 255)'">
						{{ value }}
					</button>
				</div>
			</div>
		</div>

		<!-- Single variant with options -->
		<div
			v-else-if="variants.length === 1 && productOptions.length > 0"
			class="single-variant-options">
			<div
				v-for="option in productOptions"
				:key="option.name"
				class="mb-4">
				<h3 class="text-sm font-medium text-gray-900 mb-2">
					{{ option.name }}:
				</h3>
				<div class="px-4 py-2 bg-gray-50 rounded-lg inline-block">
					<span class="text-sm font-medium text-gray-700">{{
						variants[0][
							`option${productOptions.indexOf(option) + 1}`
						] || option.values[0]
					}}</span>
				</div>
			</div>
		</div>

		<!-- Debug info when no variants/options -->
		<div
			v-if="variants.length === 0 && productOptions.length === 0 && !isInitialized"
			class="variant-picker-empty">
			<div class="p-4 bg-gray-50 border border-gray-200 rounded-md">
				<p class="text-sm text-gray-600">
					Loading variant options...
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue';

const props = defineProps({
	product: {
		type: Object,
		required: false,
		default: () => ({}),
	},
	selectedVariantId: {
		type: [String, Number],
		default: null,
	},
	updateUrl: {
		type: Boolean,
		default: true,
	},
	sectionId: {
		type: String,
		default: '',
	},
});

const emit = defineEmits([
	'variant-change',
	'media-change',
	'product-info-update',
]);

// For custom element compatibility
const dispatchEvent = (eventName, detail) => {
	const el = document.getElementById('variantPicker');
	if (el) {
		el.dispatchEvent(new CustomEvent(eventName, { detail, bubbles: true }));
	}
};

const selectedOptions = ref({});
const selectedVariant = ref(null);
const isInitialized = ref(false);

// Initialize product data from global variable if needed
const initProduct = () => {
	// Check if product was passed as prop
	if (props.product && props.product.id) {
		// Using product from props
		return props.product;
	}

	// Try to get from global variable
	if (window.productPageData && window.productPageData.product) {
		// Using product from window.productPageData
		return window.productPageData.product;
	}

	// No product data found, returning empty object
	return {};
};

const productData = ref({});

const variants = computed(() => productData.value.variants || []);

// Generate options from variants if not provided
const productOptions = computed(() => {
	if (productData.value.options && productData.value.options.length > 0) {
		// Fix position values if they're 0-indexed
		return productData.value.options.map((option, index) => ({
			...option,
			position: option.position || index + 1,
		}));
	}

	// Generate options from variants
	const options = [];
	if (variants.value.length > 0) {
		// Check for option1
		if (variants.value[0].option1) {
			const option1Values = [
				...new Set(
					variants.value.map((v) => v.option1).filter(Boolean)
				),
			];
			options.push({
				name: 'Size',
				position: 1,
				values: option1Values,
			});
		}

		// Check for option2
		if (variants.value[0].option2) {
			const option2Values = [
				...new Set(
					variants.value.map((v) => v.option2).filter(Boolean)
				),
			];
			options.push({
				name: 'Color',
				position: 2,
				values: option2Values,
			});
		}

		// Check for option3
		if (variants.value[0].option3) {
			const option3Values = [
				...new Set(
					variants.value.map((v) => v.option3).filter(Boolean)
				),
			];
			options.push({
				name: 'Option',
				position: 3,
				values: option3Values,
			});
		}
	}

	return options;
});

const optionsWithValues = computed(
	() => productData.value.options_with_values || productOptions.value
);

// Try to initialize product data with a retry mechanism
const tryInitializeProduct = async (retries = 5) => {
	for (let i = 0; i < retries; i++) {
		const data = initProduct();
		if (data && data.id) {
			productData.value = data;
			return true;
		}
		// Wait 100ms before retrying
		if (i < retries - 1) {
			await new Promise(resolve => setTimeout(resolve, 100));
		}
	}
	return false;
};

onMounted(async () => {
	// Try to initialize product data
	const initialized = await tryInitializeProduct();
	
	if (!initialized) {
		// Failed to initialize product data after retries
	}

	// Component has mounted and initialized

	// Initialize selected options first
	if (variants.value.length > 0) {
		// Initialize with first available variant or selected variant
		let variantToSelect = null;

		if (props.selectedVariantId) {
			variantToSelect = variants.value.find(
				(v) => v.id == props.selectedVariantId
			);
		}

		if (!variantToSelect) {
			variantToSelect =
				variants.value.find((v) => v.available) || variants.value[0];
		}

		if (variantToSelect) {
			// Initializing with variant

			// Always select the variant, even if it's the only one
			if (variants.value.length === 1 && productOptions.value.length === 0) {
				// For single variant with no options, directly select it
				nextTick(() => {
					selectVariant(variantToSelect);
				});
			} else {
				// Pre-populate selected options based on the variant
				if (variantToSelect.option1) {
					const option1 = productOptions.value.find(
						(opt) => opt.position === 1
					);
					if (option1) {
						selectedOptions.value[option1.name] =
							variantToSelect.option1;
					}
				}

				if (variantToSelect.option2) {
					const option2 = productOptions.value.find(
						(opt) => opt.position === 2
					);
					if (option2) {
						selectedOptions.value[option2.name] =
							variantToSelect.option2;
					}
				}

				if (variantToSelect.option3) {
					const option3 = productOptions.value.find(
						(opt) => opt.position === 3
					);
					if (option3) {
						selectedOptions.value[option3.name] =
							variantToSelect.option3;
					}
				}

				// Use nextTick to ensure DOM is ready
				nextTick(() => {
					selectVariant(variantToSelect);
				});
			}
		}
	} else {
		// No variants found during initialization
	}
});

const selectVariant = (variant) => {
	if (!variant) {
		// Attempted to select null/undefined variant
		return;
	}
	
	selectedVariant.value = variant;
	isInitialized.value = true;

	// Update selected options based on variant
	productOptions.value.forEach((option, index) => {
		selectedOptions.value[option.name] = variant[`option${index + 1}`];
	});

	// Update URL if enabled
	if (props.updateUrl && variant) {
		updateURL(variant);
	}

	// Emit media change event if variant has featured media
	if (variant && variant.featured_media) {
		emit('media-change', variant.featured_media);
		dispatchEvent('media-change', variant.featured_media);
	}

	emit('variant-change', variant);
	dispatchEvent('variant-change', variant);

	// Variant selected
};

const updateURL = (variant) => {
	const url = new URL(window.location);
	if (variant && variant.id) {
		url.searchParams.set('sku', variant.id);
	} else {
		url.searchParams.delete('sku');
	}
	window.history.replaceState({}, document.title, url.toString());
};

const selectOption = (optionName, value) => {
	// Option clicked

	selectedOptions.value[optionName] = value;

	// Find matching variant
	const matchingVariant = variants.value.find((variant) => {
		return productOptions.value.every((option, index) => {
			const selectedValue = selectedOptions.value[option.name];
			return variant[`option${index + 1}`] === selectedValue;
		});
	});

	// Matching variant found

	if (matchingVariant) {
		selectVariant(matchingVariant);

		// Fetch updated product info via AJAX if section ID is provided
		if (props.sectionId) {
			fetchProductInfo(matchingVariant);
		}
	}
};

const fetchProductInfo = async (variant) => {
	if (!variant || !variant.id) return;

	try {
		const response = await fetch(
			`${window.location.pathname}?sku=${variant.id}&section_id=${props.sectionId}`,
			{
				headers: {
					'X-Requested-With': 'XMLHttpRequest',
				},
			}
		);

		if (!response.ok) throw new Error('Failed to fetch product info');

		const html = await response.text();
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');

		// Emit event with parsed HTML for parent to handle updates
		emit('product-info-update', {
			variant: variant,
			html: doc,
		});
	} catch (error) {
		// Error fetching product info
	}
};

const getSelectedValue = (optionName) => {
	return selectedOptions.value[optionName] || '';
};

// Watch for external variant changes
watch(
	() => props.selectedVariantId,
	(newId) => {
		if (newId) {
			const variant = variants.value.find((v) => v.id == newId);
			if (variant) {
				selectVariant(variant);
			}
		}
	}
);

const isOptionSelected = (optionName, value) => {
	return selectedOptions.value[optionName] === value;
};

const isOptionAvailable = (optionName, value) => {
	// Check if any variant with this option value is available
	const optionIndex = productOptions.value.findIndex(
		(opt) => opt.name === optionName
	);

	return variants.value.some((variant) => {
		const matchesValue = variant[`option${optionIndex + 1}`] === value;

		// Check if other selected options match
		const otherOptionsMatch = productOptions.value.every((opt, idx) => {
			if (opt.name === optionName) return true;
			const selectedValue = selectedOptions.value[opt.name];
			if (!selectedValue) return true;
			return variant[`option${idx + 1}`] === selectedValue;
		});

		return matchesValue && otherOptionsMatch && variant.available;
	});
};

const isColorOption = (optionName) => {
	if (!optionName) return false;
	const name = optionName.toLowerCase();
	return (
		name === 'color' ||
		name === 'colour' ||
		name.includes('color') ||
		name.includes('colour')
	);
};

const getColorValue = (colorName) => {
	// Map color names to hex values
	const colorMap = {
		black: '#000000',
		white: '#FFFFFF',
		red: '#DC2626',
		blue: '#2563EB',
		green: '#16A34A',
		yellow: '#EAB308',
		purple: '#9333EA',
		pink: '#EC4899',
		gray: '#6B7280',
		grey: '#6B7280',
		brown: '#92400E',
		navy: '#1E3A8A',
		beige: '#D6D3D1',
		orange: '#EA580C',
		teal: '#14B8A6',
		cyan: '#06B6D4',
		indigo: '#4F46E5',
	};

	// Try direct color name first
	const directColor = colorMap[colorName.toLowerCase()];
	if (directColor) return directColor;

	// If not found, check if it's a hex color
	if (colorName.startsWith('#')) return colorName;

	// Default gray
	return '#E5E7EB';
};


const formatMoney = (cents) => {
	const currency = window.Shopline?.shop?.currency || 'USD';
	const locale = window.Shopline?.locale?.current || 'en';

	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currency,
	}).format(cents / 100);
};

const hasImageOptions = (option) => {
	// Check if this option has associated images
	return optionsWithValues.value.some(
		(opt) =>
			opt.name === option.name &&
			opt.values_images &&
			opt.values_images.length > 0
	);
};

const getOptionValuesWithImages = (option) => {
	const optionData = optionsWithValues.value.find(
		(opt) => opt.name === option.name
	);
	if (!optionData || !optionData.values_images) {
		return option.values.map((value) => ({ value, image: null }));
	}
	return optionData.values_images;
};

const getImageUrl = (image, width = 100) => {
	if (!image) return '';
	// If it's already a URL, return it
	if (typeof image === 'string') return image;
	// If it's an image object with src
	if (image.src) return image.src;
	return '';
};

const getInventoryMessage = () => {
	if (!selectedVariant.value) return '';
	const quantity = selectedVariant.value.inventory_quantity;

	if (quantity === undefined || quantity === null) return '';
	if (quantity <= 0) return 'Out of stock';
	if (quantity <= 5) return `Only ${quantity} left in stock`;
	if (quantity <= 20) return `${quantity} in stock`;
	return 'In stock';
};

const getButtonStyle = (optionName, value) => {
	const isSelected = isOptionSelected(optionName, value);
	const isAvailable = isOptionAvailable(optionName, value);
	
	const baseStyle = {
		padding: '0.5rem 1rem',
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: isSelected ? 'rgb(17 24 39)' : 'rgb(209 213 219)',
		borderRadius: '0.375rem',
		fontSize: '0.875rem',
		lineHeight: '1.25rem',
		fontWeight: '500',
		color: isSelected ? 'rgb(255 255 255)' : 'rgb(55 65 81)',
		backgroundColor: isSelected ? 'rgb(17 24 39)' : 'rgb(255 255 255)',
		transition: 'all 200ms',
		cursor: isAvailable ? 'pointer' : 'not-allowed',
		opacity: isAvailable ? '1' : '0.3',
		textDecoration: isAvailable ? 'none' : 'line-through',
		display: 'inline-block',
		textAlign: 'center',
		userSelect: 'none'
	};
	
	return baseStyle;
};

const getColorSwatchStyle = (value) => {
	const isSelected = isOptionSelected('Color', value);
	const isAvailable = isOptionAvailable('Color', value);
	const color = getColorValue(value);
	const isWhite = color.toLowerCase() === '#ffffff' || value.toLowerCase() === 'white';
	
	const baseStyle = {
		width: '2.5rem',
		height: '2.5rem',
		borderRadius: '50%',
		borderWidth: isSelected ? '3px' : '2px',
		borderStyle: 'solid',
		borderColor: isSelected ? 'rgb(17 24 39)' : (isWhite ? 'rgb(229 231 235)' : 'rgb(229 231 235)'),
		backgroundColor: color,
		position: 'relative',
		overflow: 'hidden',
		transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
		cursor: isAvailable ? 'pointer' : 'not-allowed',
		opacity: isAvailable ? '1' : '0.4',
		boxShadow: isSelected 
			? '0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
			: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		transform: isSelected ? 'scale(1.1)' : 'scale(1)'
	};
	
	return baseStyle;
};

const handleColorSwatchHover = (event, value, isHovering) => {
	const isSelected = isOptionSelected('Color', value);
	const isAvailable = isOptionAvailable('Color', value);
	
	if (!isAvailable) return;
	
	if (isHovering) {
		event.target.style.transform = isSelected ? 'scale(1.1)' : 'scale(1.05)';
		event.target.style.boxShadow = isSelected 
			? '0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
			: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
	} else {
		event.target.style.transform = isSelected ? 'scale(1.1)' : 'scale(1)';
		event.target.style.boxShadow = isSelected 
			? '0 0 0 2px white, 0 0 0 4px rgb(17 24 39), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
			: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
	}
};
</script>

<style>
/* Variant Picker Styles */
.variant-picker .color-swatch {
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 9999px;
	border-width: 2px;
	border-color: rgb(229 231 235);
	position: relative;
	overflow: hidden;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 200ms;
	cursor: pointer;
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}

.variant-picker .color-swatch:hover {
	border-color: rgb(156 163 175);
}

.variant-picker .color-swatch--selected {
	border-color: rgb(17 24 39);
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}

.variant-picker .color-swatch--unavailable {
	opacity: 0.3;
	cursor: not-allowed;
}

.variant-picker .color-swatch--unavailable::after {
	content: '';
	position: absolute;
	inset: 0;
	background-color: rgba(255, 255, 255, 0.7);
	background-image: linear-gradient(
		45deg,
		transparent 45%,
		currentColor 45%,
		currentColor 55%,
		transparent 55%
	);
}

.variant-picker .color-swatch__checkmark {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	background-color: rgba(0, 0, 0, 0.3);
}

.variant-picker .variant-button {
	padding: 0.5rem 1rem;
	border-width: 1px;
	border-color: rgb(209 213 219);
	border-radius: 0.375rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	color: rgb(55 65 81);
	background-color: rgb(255 255 255);
	transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 200ms;
}

.variant-picker .variant-button:hover:not(:disabled) {
	background-color: rgb(249 250 251);
}

.variant-picker .variant-button--selected {
	border-color: rgb(17 24 39);
	background-color: rgb(17 24 39);
	color: rgb(255 255 255);
}

.variant-picker .variant-button--selected:hover {
	background-color: rgb(31 41 55);
}

.variant-picker .variant-button--unavailable {
	opacity: 0.3;
	cursor: not-allowed;
	text-decoration: line-through;
}

.variant-picker .variant-button--unavailable:hover {
	background-color: rgb(255 255 255);
}

.variant-picker .variant-image-button {
	width: 4rem;
	height: 4rem;
	border-radius: 0.5rem;
	border-width: 2px;
	border-color: rgb(209 213 219);
	overflow: hidden;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 200ms;
	display: flex;
	align-items: center;
	justify-content: center;
}

.variant-picker .variant-image-button--selected {
	border-color: rgb(17 24 39);
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
	--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
	box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
	--tw-ring-color: rgb(17 24 39);
	--tw-ring-offset-width: 2px;
}

.variant-picker .variant-image-button--unavailable {
	opacity: 0.3;
	cursor: not-allowed;
}

.variant-picker .variant-image-button--unavailable::after {
	content: '';
	position: absolute;
	inset: 0;
	background-color: rgba(255, 255, 255, 0.7);
	background-image: linear-gradient(
		45deg,
		transparent 45%,
		currentColor 45%,
		currentColor 55%,
		transparent 55%
	);
}

/* Additional styles for the variant option wrapper */
.variant-picker .variant-option {
	margin-bottom: 1.5rem;
}

.variant-picker h3 {
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;
	color: rgb(17 24 39);
	margin-bottom: 0.75rem;
}
</style>

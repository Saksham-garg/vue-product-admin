<script setup lang="ts">
import { calculatePriceDetails } from "utils/price";
import type { Product } from "types/productType";
import "./ProductCard.scss";
import { useUiStore } from "store/uiStore";
import { computed } from "vue";

const props = defineProps<{
  product: Product;
}>();

const ui = useUiStore();

const netPrice = props.product.price.toFixed(2);
const { grossPrice } = calculatePriceDetails(
  props.product.price,
  props.product.taxRate ?? 0
);

const displayPrice = computed(() => {
  return ui.displayGross ? grossPrice : `${netPrice} €`;
});
</script>

<template>
  <div class="product-card">
    <h3 class="product-card__title">{{ product.title }}</h3>

    <div class="product-card__info">
      <div class="product-card__price">
        <span class="product-card__price-label">Price:</span>
        <span class="product-card__price-value">{{ displayPrice }}</span>
      </div>

      <div class="product-card__category">
        <span class="product-card__category-label">Category:</span>
        <span class="product-card__category-value">{{ product.category }}</span>
      </div>
    </div>

    <div class="product-card__actions">
      <button @click="$emit('edit')" class="product-card__button">
        <span>Edit</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="product-card__button-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5h2M12 3v2m4 0h2a2 2 0 012 2v2M3 11V9a2 2 0 012-2h2m0 0V5a2 2 0 012-2h2m0 0h2m2 0h2a2 2 0 012 2v2m0 0v2m0 2v2a2 2 0 01-2 2h-2m0 0v2a2 2 0 01-2 2h-2m0 0H9a2 2 0 01-2-2v-2m0 0H5a2 2 0 01-2-2v-2"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

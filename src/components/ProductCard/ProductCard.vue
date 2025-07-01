<script setup lang="ts">
import { calculatePriceDetails } from "utils/price";
import type { Product } from "types/productType";
import "./ProductCard.scss";

const props = defineProps<{
  product: Product;
}>();

const netPrice = props.product.price.toFixed(2);
const { grossPrice, taxAmount } = calculatePriceDetails(
  props.product.price,
  props.product.taxRate ?? 0
);
</script>

<template>
  <div class="product-card">
    <h3 class="product-card__title">{{ product.title }}</h3>
    <div class="product-card__prices">
      <span class="product-card__price-label">Net:</span>
      <span class="product-card__price-value">{{ netPrice }} €</span>
    </div>
    <div class="product-card__prices">
      <span class="product-card__price-label">Gross:</span>
      <span class="product-card__price-value">{{ grossPrice }}</span>
    </div>
    <div class="product-card__category">
      Category: <strong>{{ product.category }}</strong>
    </div>
    <div class="product-card__actions">
      <button @click="$emit('edit')" class="product-card__button">Edit</button>
    </div>
  </div>
</template>

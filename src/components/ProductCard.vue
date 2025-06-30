<script setup lang="ts">
import { calculatePriceDetails } from "utils/price";
import type { Product } from "../types/productType";

const props = defineProps<{
  product: Product;
}>();

const netPrice = props.product.price.toFixed(2);
const { grossPrice } = calculatePriceDetails(
  props.product.price,
  props.product.taxRate ?? 0
);
</script>

<template>
  <div class="product-card">
    <h3>{{ product.title }}</h3>
    <p>Net: {{ netPrice }} €</p>
    <p>Gross: {{ grossPrice }}</p>
    <p>Category: {{ product.category }}</p>
    <button @click="$emit('edit')">Edit</button>
  </div>
</template>

<style scoped lang="scss">
.product-card {
  border: 1px solid #ddd;
  padding: 1rem;
}
</style>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from "../store/productStore";
import ProductCard from "components/ProductCard.vue";
import { storeToRefs } from "pinia";

const store = useProductStore();
const { products } = storeToRefs(store);
const router = useRouter();

onMounted(() => {
  store.fetchProducts();
});

function refreshProducts() {
  store.fetchProducts();
}

function editProduct(id: number) {
  router.push(`/product/${id}`);
}
</script>

<template>
  <div class="product-list">
    <button @click="refreshProducts">Refresh</button>
    <div class="grid">
      <ProductCard
        v-for="p in products"
        :key="p.id"
        :product="p"
        @edit="editProduct(p.id)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-list {
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
}
</style>

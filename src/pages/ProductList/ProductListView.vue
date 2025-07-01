<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from "../../store/productStore";
import { storeToRefs } from "pinia";
import ProductCard from "components/ProductCard/ProductCard.vue";
import ProductCardSkeleton from "components/ProductCardSkeleton/ProductCardSkeleton.vue";
import "./ProductList.scss";

const store = useProductStore();
const { products, loading } = storeToRefs(store);
const router = useRouter();

onMounted(() => {
  if (store.products.length === 0) {
    store.fetchProducts();
  }
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
    <div class="product-list__header">
      <h1 class="product-list__title">Product Administration</h1>
      <button class="product-list__refresh" @click="refreshProducts">
        Refresh
      </button>
    </div>

    <div class="product-list__grid">
      <template v-if="loading">
        <ProductCardSkeleton v-for="n in 10" :key="n" />
      </template>
      <template v-else>
        <ProductCard
          v-for="p in products"
          :key="p.id"
          :product="p"
          @edit="() => editProduct(p.id)"
        />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

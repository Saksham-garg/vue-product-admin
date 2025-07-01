<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "../../store/productStore";
import { type Product } from "types/productType";
import ProductEditForm from "components/ProductEditForm/ProductEditForm.vue";

const route = useRoute();
const router = useRouter();
const store = useProductStore();

const id = Number(route.params.id);
const product = ref<Product | null>(null);

async function loadProduct() {
  if (store.products.length === 0) {
    await store.fetchProducts();
  }

  const found = store.products.find((p) => p.id === id);
  if (found) {
    product.value = found;
  } else {
    product.value = null;
  }
}

onMounted(loadProduct);

function onSave(updatedProduct: Product) {
  store.updateProduct(updatedProduct);
  router.push("/");
}

function onCancel() {
  router.push("/");
}
</script>

<template>
  <div v-if="product">
    <h1>Edit Product</h1>
    <ProductEditForm :product="product" @save="onSave" @cancel="onCancel" />
  </div>
  <div v-else>
    <p>Product not found.</p>
  </div>
</template>

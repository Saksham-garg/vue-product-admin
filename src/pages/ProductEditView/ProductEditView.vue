<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "../../store/productStore";
import { type Product } from "../../types/productType";
import ProductEditForm from "components/ProductEditForm/ProductEditForm.vue";
import { useToast } from "composables/useToast";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner.vue";

const route = useRoute();
const router = useRouter();
const store = useProductStore();
const toast = useToast();
const id = Number(route.params.id);
const product = ref<Product | null>(null);

const isSaving = ref(false);

async function loadProduct() {
  if (store.products.length === 0) {
    await store.fetchProducts();
  }

  const found = store.products.find((p: Product) => p.id === id);
  if (found) {
    product.value = found;
  } else {
    product.value = null;
    router.replace("/");
  }
}

onMounted(loadProduct);

function fakeSave(updatedProduct: Product) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      store.updateProduct(updatedProduct);
      resolve();
    }, 1000);
  });
}

async function onSave(updatedProduct: Product) {
  isSaving.value = true;

  await fakeSave(updatedProduct);
  isSaving.value = false;
  toast.show("Product saved!");
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
    <LoadingSpinner v-if="isSaving" />
  </div>
  <div v-else>
    <p>Product not found.</p>
  </div>
</template>

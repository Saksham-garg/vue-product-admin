<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { calculatePriceDetails } from "utils/price";
import { Product } from "types/productType";
import "./ProductEditForm.scss";

const props = defineProps<{ product: Product }>();
const emit = defineEmits<{
  (e: "save", value: Product): void;
  (e: "cancel"): void;
}>();

const form = ref<Product>({ ...props.product });

watch(
  () => props.product,
  (newVal) => {
    form.value = { ...newVal };
  }
);

const priceDetails = computed(() =>
  calculatePriceDetails(form.value.price, form.value.taxRate ?? 0)
);

function save() {
  emit("save", { ...form.value });
}
</script>

<template>
  <form class="product-edit-form" @submit.prevent="save">
    <label>
      Name
      <input v-model="form.title" required />
    </label>

    <label>
      Net Price (€)
      <input type="number" v-model.number="form.price" min="0" step="0.01" />
    </label>

    <label>
      Tax Rate
      <select v-model.number="form.taxRate">
        <option :value="0">0%</option>
        <option :value="7">7%</option>
        <option :value="19">19%</option>
      </select>
    </label>

    <label>
      Category
      <input v-model="form.category" required />
    </label>

    <p class="product-edit-form__price">
      Gross Price: <strong>{{ priceDetails.grossPrice }}</strong>
    </p>
    <p class="product-edit-form__price">
      Tax Amount: <strong>{{ priceDetails.taxAmount }}</strong>
    </p>

    <div class="product-edit-form__actions">
      <button
        type="submit"
        class="product-edit-form__button product-edit-form__button--save"
      >
        Save
      </button>
      <button
        type="button"
        @click="$emit('cancel')"
        class="product-edit-form__button product-edit-form__button--cancel"
      >
        Cancel
      </button>
    </div>
  </form>
</template>

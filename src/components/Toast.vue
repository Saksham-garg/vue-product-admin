<script setup lang="ts">
import { useToast } from "../composables/useToast";
const { message } = useToast();
</script>

<template>
  <div v-if="message" class="toast">{{ message }}</div>
</template>


<style scoped lang="scss">
.toast {
  position: fixed;
  top: 40px;
  right: 20px;
  background: #333;
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
}
</style>

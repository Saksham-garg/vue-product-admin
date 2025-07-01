<script setup lang="ts">
import { RouterView } from "vue-router";
import Toast from "./components/Toast.vue";
import AppHeader from "./components/AppHeader/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <RouterView />
  <Toast />
</template>

<style scoped></style>

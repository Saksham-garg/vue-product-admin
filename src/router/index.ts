import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import ProductListView from "pages/ProductList/ProductListView.vue";
import ProductEditView from "pages/ProductEditView/ProductEditView.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: ProductListView },
  { path: "/product/:id", component: ProductEditView },
  { path: "/:catchAll(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

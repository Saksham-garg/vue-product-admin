import { defineStore } from "pinia";
import type { Product } from "types/productType";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);

        this.products = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          category: item.category,
          taxRate: 19, // Default tax rate for new items
        }));
        console.log(this.products);
      } catch (e) {
        this.error = "Failed to load products";
        console.error(e);
      } finally {
        this.loading = false;
      }
    },

    updateProduct(updatedProduct: Product) {
      const index = this.products.findIndex(
        (p: Product) => p.id === updatedProduct.id
      );
      if (index !== -1) {
        this.products[index] = { ...updatedProduct };
      }
    },

    getProductById(id: number): Product | undefined {
      return this.products.find((p: Product) => p.id === id);
    },
  },
});

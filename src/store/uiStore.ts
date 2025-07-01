import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
  state: () => ({
    displayGross: true
  }),
  actions: {
    toggleDisplayMode() {
      this.displayGross = !this.displayGross;
    }
  }
});

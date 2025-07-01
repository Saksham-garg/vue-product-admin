<script setup lang="ts">
import { useUiStore } from "store/uiStore";

const ui = useUiStore();
</script>

<template>
  <header class="app-header">
    <h1 class="app-header__title">Product Admin Panel</h1>

    <div class="app-header__actions">
      <button
        class="app-header__toggle"
        @click="ui.toggleDisplayMode"
      >
        Display Mode: 
        <span class="app-header__mode">
          {{ ui.displayGross ? 'Gross €' : 'Net €' }}
        </span>
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;

  &__title {
    font-size: 1.5rem;
    margin: 0;
  }

  &__actions {
    display: flex;
    gap: 1rem;
  }

  &__toggle {
    background: #fff;
    color: #333;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;

    &:hover {
      background: #ddd;
    }
  }

  &__mode {
    font-weight: bold;
    margin-left: 0.5rem;
  }
}
</style>

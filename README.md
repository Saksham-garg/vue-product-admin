# 📦 Product Admin Panel

> **Vue Challenge – Task 3**
> A single-page Vue 3 admin panel to manage products, including EU tax calculations, global state, and modern SCSS styling.

---

## 🚀 Demo

🔗 [Demo deployed on Netlify](https://vue-product-admin.netlify.app/)

---

## 📝 Features

✅ Fetches products from [FakeStore API](https://fakestoreapi.com/products)
✅ Displays product list in a responsive grid
✅ Edit screen with:

* net price
* tax rate (0 / 7 / 19 %)
* gross price calculation
* live tax breakdown
  ✅ Global state via **Pinia**
  ✅ SCSS styling with BEM
  ✅ Toast notifications
  ✅ Loading spinner and skeleton cards
  ✅ Display mode toggle (net vs gross)
  ✅ Fully type-safe (TypeScript)
  ✅ Vite bundling for fast development

---

## ⚙️ Tech Stack

* **Vue 3** (Composition API)
* **Vite**
* **Vue Router**
* **Pinia**
* **SCSS (BEM)**
* Optional testing with **Vitest** + **Vue Test Utils**

---

## 🗂️ Project Structure

```
src/
  assets/         → static assets
  components/     → reusable UI components
  composables/    → composables like useToast
  pages/          → route views (Product List, Edit page)
  router/         → Vue Router config
  store/          → Pinia stores (product, ui)
  styles/         → global SCSS variables
  types/          → TypeScript interfaces
  utils/          → small helpers like price calculator
```

---

## 🏗️ Architecture Decisions

### Global State

* Chose **Pinia** for modern Vue 3 state management
* Products stored globally so list and edit pages stay in sync

### Styling

* BEM for maintainable SCSS
* No Tailwind/UI libraries to match challenge rules
* Responsive grid for product list

### Tax Logic

* Implemented as composable: `usePriceCalculator`
* Always formats prices to 2 decimals and adds the € symbol

### Routing

* Redirects to home if product not found

### UX

* Toast feedback for save/cancel
* Skeleton cards for loading
* Single source of truth for display mode

---

## 💻 Setup

```bash
# install dependencies
npm install

# run in dev mode
npm run dev

# build for production
npm run build
```

---

## ✅ Functional Requirements Covered

* [x] Product List with responsive grid
* [x] Edit product details with live tax breakdown
* [x] Global state updates reflected across views
* [x] Price formatting with €
* [x] Simulated save with fake API delay
* [x] Toasts and loading UI
* [x] Optional display toggle (Net/Gross)

---

## 🌟 Bonus Features Implemented

* Skeleton loading cards
* Toast notifications
* Display mode toggle

---


## 🔬 Tests

To run tests (if added):

```bash
npm run test
```

*(currently only unit test for price calculation)*

---



## 🚀 Author

\[Saksham garg]
[GitHub Profile](#https://github.com/Saksham-garg)

---


## ✨ How to Improve Further

* Add unit and integration tests
* Enhance dark mode support
* Add accessibility improvements
* Polish animations

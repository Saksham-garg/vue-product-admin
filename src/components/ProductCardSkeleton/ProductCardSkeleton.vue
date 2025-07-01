<template>
  <div class="product-card skeleton">
    <div class="skeleton__title shimmer"></div>

    <div class="skeleton__line shimmer"></div>
    <div class="skeleton__line shimmer"></div>

    <div class="skeleton__button shimmer"></div>
  </div>
</template>

<style scoped lang="scss">
.product-card.skeleton {
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.shimmer {
  position: relative;
  background-color: #e0e0e0;
  overflow: hidden;
  border-radius: 4px;
}

.shimmer::after {
  content: "";
  position: absolute;
  top: 0;
  left: -150px;
  width: 100px;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(250px);
  }
}

.skeleton__title {
  height: 24px;
  width: 80%;
}

.skeleton__line {
  height: 16px;
  width: 60%;
}

.skeleton__button {
  height: 36px;
  width: 100px;
  align-self: flex-end;
  border-radius: 6px;
}
</style>

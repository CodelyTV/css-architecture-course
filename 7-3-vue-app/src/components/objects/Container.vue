<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.container {
  max-width: variables.$max-width;
  margin: 0 auto;
  padding: variables.$spacing variables.$spacing-s;
}
</style>

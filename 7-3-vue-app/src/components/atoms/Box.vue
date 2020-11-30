<template>
  <div class="box">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.box {
  padding: 1.63rem;
  color: variables.$text-inverted-color;
  background: rgba(variables.$background-darker-color, 0.3);
  border-radius: 0.37rem;
}
</style>

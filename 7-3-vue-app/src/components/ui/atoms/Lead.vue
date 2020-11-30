<template>
  <p class="lead">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.lead {
  font-size: variables.$fs-lead;
  line-height: 1.65;
}
</style>

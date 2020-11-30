<template>
  <component :is="tag" class="container">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.container {
  max-width: variables.$max-width;
  margin: 0 auto;
  padding: variables.$spacing variables.$spacing-s;
}
</style>

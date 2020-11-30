<template>
  <component :is="tag" class="title">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "h2",
      validator(value) {
        return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.title {
  font-size: variables.$fs-title-l;
}
</style>

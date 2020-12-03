<template>
  <component :is="tag" class="max-w-6xl mx-auto my-0 p-4">
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

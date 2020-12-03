<template>
  <component
    :is="tag"
    :class="
      `px-7 py-3 | rounded-md | font-semibold text-white text-center uppercase no-underline | hover:text-white | ${blockClass} ${themeClass}`
    "
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "a",
      validator(value) {
        return ["a", "button", "router-link"].includes(value);
      },
    },
    theme: {
      type: String,
      default: "default",
      validator(value) {
        const themes = ["primary", "default"];
        return themes.includes(value);
      },
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    blockClass() {
      return this.block ? "block w-full" : "inline-block";
    },
    themeClass() {
      return this.theme === "primary" && "bg-green hover:bg-green-dark";
    },
  },
};
</script>

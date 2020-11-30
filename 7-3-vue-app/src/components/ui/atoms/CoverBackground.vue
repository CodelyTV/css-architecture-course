<template>
  <section :class="`cover-background cover-background--${background}`">
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      required: true,
      validator(value) {
        const backgrounds = ["plant", "kayak"];
        return backgrounds.includes(value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.cover-background {
  color: variables.$text-inverted-color;
  background-color: variables.$background-dark-color;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  &--plant {
    background-image: url("/img/bg/plant.jpg");
  }

  &--kayak {
    background-image: url("/img/bg/kayak.jpg");
  }
}
</style>

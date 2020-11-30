<template>
  <Box class="cta-box">
    <h3 class="cta-box__title">
      <slot name="header" />
    </h3>
    <span class="cta-box__note">{{ note }}</span>
    <div class="cta-box__content">
      <slot />
    </div>
    <Button theme="primary" class="cta-box__cta" :href="link">
      {{ cta }}
    </Button>
  </Box>
</template>

<script>
import Box from "@/components/atoms/Box.vue";
import Button from "@/components/atoms/Button.vue";

export default {
  props: {
    cta: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
  },
  components: {
    Box,
    Button,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.cta-box {
  position: relative;
  padding-bottom: 4rem;

  &__title {
    margin: 0;
    margin: 0.5em 0 1em;
    padding-bottom: 1em;
    border-bottom: 2px solid rgba(variables.$border-inverted-color, 0.3);
  }

  &__note {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: variables.$fs-pill;
    text-transform: uppercase;
  }

  &__cta {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  &__content > * {
    margin-bottom: 0.5em;
  }
}
</style>

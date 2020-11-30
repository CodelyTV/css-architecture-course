<template>
  <Container class="cta">
    <h4 class="cta__title">Invierte en ti y mejora como profesional</h4>
    <Button
      theme="primary"
      href="https://pro.codely.tv/subscribe?utm_source=courses-landing&utm_medium=landing&utm_campaign=internal&utm_content=bottom-cta"
    >
      👉 Suscríbete ahora 👈
    </Button>
  </Container>
</template>

<script>
import Container from "@/components/objects/Container.vue";
import Button from "@/components/atoms/Button.vue";

export default {
  components: {
    Container,
    Button,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";
@use "@/assets/styles/tools/_mixins.scss";

.cta {
  @include mixins.justify;

  padding-top: variables.$spacing-l;
  padding-bottom: variables.$spacing-l;

  &__title {
    margin: 0;
    font-weight: 400;
    font-size: variables.$fs-lead;
  }
}
</style>

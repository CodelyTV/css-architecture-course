<template>
  <Container tag="section" class="partners">
    <Lead class="partners__title">Cursos facilitados por: <br /></Lead>

    <UiList horizontal>
      <img
        alt="Coding Stones"
        src="https://codely.tv/pro/img/partners/coding-stones.png"
        class="partners__logo"
      />
      <img
        alt="Habla Computing"
        src="https://codely.tv/pro/img/partners/habla-computing.png"
        class="partners__logo"
      />
      <img
        alt="Karumi"
        src="https://codely.tv/pro/img/partners/karumi.png"
        class="partners__logo"
      />
      <img
        alt="SmokingBrains"
        src="https://codely.tv/pro/img/partners/smoking-brains.png"
        class="partners__logo"
      />
      <img
        alt="CodelyTV"
        src="https://codely.tv/pro/img/partners/codelytv.png"
        class="partners__logo"
      />
    </UiList>
  </Container>
</template>

<script>
import Container from "@/components/ui/objects/Container.vue";
import UiList from "@/components/ui/objects/UiList.vue";
import Lead from "@/components/ui/atoms/Lead.vue";

export default {
  components: {
    Container,
    UiList,
    Lead,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";
@use "@/assets/styles/tools/_mixins.scss";

.partners {
  @include mixins.justify;

  padding-top: variables.$spacing-l;
  padding-bottom: variables.$spacing-l;

  &__title {
    margin: 0;
    color: gray;
  }

  &__logo {
    display: block;
    max-height: 1.6rem;
  }

  .ui-list--horizontal {
    gap: 3.25rem;
  }
}
</style>

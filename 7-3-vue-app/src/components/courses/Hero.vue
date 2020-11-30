<template>
  <CoverBackground background="plant">
    <Container class="hero">
      <div class="hero__info">
        <Title tag="h1">Cursos para programadores&nbsp;🚀<br /></Title>
        <Lead>
          Aprende de profesionales con experiencia en cursos prácticos y sin
          rodeos. Mejora tus habilidades, especialízate, y sigue avanzando en tu
          carrera.
        </Lead>
        <Button theme="primary" href="#subscription" target="_self">
          👇 Más información 👇
        </Button>
      </div>
      <div class="hero__media">
        <VideoThumbnail thumbnailUrl="img/bg/cursos-codelytv-pro.png" />
        <p>
          Cursos de principios SOLID, Domain-Driven Design, Arquitectura
          Hexagonal, Docker, CQRS, Microservicios, Kubernetes, Testing y mucho
          más.
        </p>
      </div>
    </Container>
  </CoverBackground>
</template>

<script>
import Container from "@/components/ui/objects/Container.vue";
import Button from "@/components/ui/atoms/Button.vue";
import CoverBackground from "@/components/ui/atoms/CoverBackground.vue";
import Lead from "@/components/ui/atoms/Lead.vue";
import Title from "@/components/ui/atoms/Title.vue";
import VideoThumbnail from "@/components/ui/molecules/VideoThumbnail.vue";

export default {
  components: {
    Container,
    Button,
    CoverBackground,
    Lead,
    Title,
    VideoThumbnail,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";
@use "@/assets/styles/tools/_mixins.scss";

.hero {
  @include mixins.sidebar($sidebar-position: "first-child");

  padding-top: variables.$spacing-l;
  padding-bottom: variables.$spacing-l;

  &__info {
    padding-right: 2rem;
    font-size: variables.$fs-lead;
  }

  &__media {
    max-width: 33rem;
    margin: 0 auto;
  }

  p {
    opacity: 0.9;
  }

  .btn {
    margin-top: 1rem;
  }
}
</style>

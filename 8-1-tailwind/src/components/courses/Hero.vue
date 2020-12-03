<template>
  <CoverBackground background="plant">
    <Container class="flex flex-wrap gap-4 | py-14">
      <div class="basis-1/2 flex-grow | pr-8 min-w-min">
        <Title tag="h1" class="mt-0"
          >Cursos para programadores&nbsp;🚀<br
        /></Title>
        <Lead class="opacity-90">
          Aprende de profesionales con experiencia en cursos prácticos y sin
          rodeos. Mejora tus habilidades, especialízate, y sigue avanzando en tu
          carrera.
        </Lead>
        <Button
          theme="primary"
          href="#subscription"
          target="_self"
          class="mt-4"
        >
          👇 Más información 👇
        </Button>
      </div>
      <div class="max-w-lg mx-auto">
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

<style scoped>
/* .hero {
  @include mixins.sidebar($sidebar-position: "first-child");

  padding-top: variables.$spacing-l;
  padding-bottom: variables.$spacing-l;
} */
</style>

<template>
  <Container tag="section" class="flex items-center justify-between | py-16">
    <Lead class="text-gray-600">Cursos facilitados por: <br /></Lead>

    <ul class="flex flex-wrap gap-10">
      <li>
        <img
          alt="Coding Stones"
          src="https://codely.tv/pro/img/partners/coding-stones.png"
        />
      </li>
      <li>
        <img
          alt="Habla Computing"
          src="https://codely.tv/pro/img/partners/habla-computing.png"
        />
      </li>
      <li>
        <img alt="Karumi" src="https://codely.tv/pro/img/partners/karumi.png" />
      </li>
      <li>
        <img
          alt="SmokingBrains"
          src="https://codely.tv/pro/img/partners/smoking-brains.png"
        />
      </li>
      <li>
        <img
          alt="CodelyTV"
          src="https://codely.tv/pro/img/partners/codelytv.png"
        />
      </li>
    </ul>
  </Container>
</template>

<script>
import Container from "@/components/ui/objects/Container.vue";
import Lead from "@/components/ui/atoms/Lead.vue";

export default {
  components: {
    Container,
    Lead,
  },
};
</script>

<style scoped>
img {
  @apply block max-h-8;
}
</style>

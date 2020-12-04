<template>
  <section>
    <Container class="flex-centered gap-4 | text-gray-500">
      <Pill>🏭 Empresas</Pill>
      <span>
        Grandes y pequeñas empresas mejoran día a día con los
        <a href="https://codely.tv/pro/teams">planes para empresas</a>
      </span>
    </Container>
  </section>
</template>

<script>
import Container from "@/components/ui/objects/Container.vue";
import Pill from "@/components/ui/atoms/Pill.vue";

export default {
  components: {
    Container,
    Pill,
  },
};
</script>

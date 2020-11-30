<template>
  <section>
    <Container class="business-callout">
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

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.business-callout {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  color: variables.$text-muted-color;
}
</style>

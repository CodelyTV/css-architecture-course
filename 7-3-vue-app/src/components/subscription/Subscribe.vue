<template>
  <CoverBackground background="kayak">
    <Container class="subscribe">
      <div>
        <h2>+40 cursos avanzados,<br />prácticos y al grano</h2>
        <Lead>
          👌 <strong>Apostamos por la calidad</strong>. Tanto en el formato como
          en el contenido.
        </Lead>
        <Lead>
          🔝 Hemos juntado <strong>profesionales del sector</strong> para que
          nos resuman su experiencia en cursos y todos podamos aprender de
          ellos.
        </Lead>
        <Lead>
          🚀 <strong>Cada mes publicamos nuevos cursos</strong> para que puedas
          seguir aprendiendo y avanzando como desarrollador.
        </Lead>
      </div>

      <CtaBox
        note="Sin permanencia mínima"
        cta="👉 SUSCRÍBETE AHORA 👈"
        link="https://pro.codely.tv/subscribe?utm_source=courses-landing&utm_medium=landing&utm_campaign=internal&utm_content=subscription"
      >
        <template v-slot:header>
          Suscripción mensual<br /><strong>29€</strong>
        </template>
        <UiList>
          <span>💻 Acceso a todos los cursos ya publicados</span>
          <span>
            👌 Contenido de calidad impartido por profesionales con amplia
            experiencia
          </span>
          <span>🚀 Nuevo contenido cada semana</span>
          <span>🙌 Acceso a la comunidad CodelyTV Pro</span>
          <span>🔖 Certificados al completar cursos</span>
        </UiList>
      </CtaBox>
    </Container>
  </CoverBackground>
</template>

<script>
import Container from "@/components/ui/objects/Container.vue";
import UiList from "@/components/ui/objects/UiList.vue";
import CoverBackground from "@/components/ui/atoms/CoverBackground.vue";
import Lead from "@/components/ui/atoms/Lead.vue";
import CtaBox from "@/components/ui/molecules/CtaBox.vue";

export default {
  components: {
    Container,
    UiList,
    CoverBackground,
    Lead,
    CtaBox,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";
@use "@/assets/styles/tools/_mixins.scss";

.subscribe {
  @include mixins.sidebar(
    $sidebar-position: "first-child",
    $min-width: 60%,
    $side-width: 25rem
  );

  padding-top: variables.$spacing-l;
  padding-bottom: 5rem;

  > :first-child {
    padding-right: 10vw;
  }
}
</style>

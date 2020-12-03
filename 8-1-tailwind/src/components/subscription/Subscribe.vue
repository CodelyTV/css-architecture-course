<template>
  <CoverBackground background="kayak">
    <Container class="grid md:grid-cols-12 gap-8 | pt-12 pb-20">
      <div class="md:col-span-6">
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
        class="md:col-span-6 lg:col-start-9 lg:col-span-4"
      >
        <template v-slot:header>
          Suscripción mensual<br /><strong>29€</strong>
        </template>
        <ul>
          <li>
            <span>💻 Acceso a todos los cursos ya publicados</span>
          </li>
          <li>
            <span>
              👌 Contenido de calidad impartido por profesionales con amplia
              experiencia
            </span>
          </li>
          <li><span>🚀 Nuevo contenido cada semana</span></li>
          <li><span>🙌 Acceso a la comunidad CodelyTV Pro</span></li>
          <li><span>🔖 Certificados al completar cursos</span></li>
        </ul>
      </CtaBox>
    </Container>
  </CoverBackground>
</template>

<script>
import Container from "@/components/ui/objects/Container.vue";
import CoverBackground from "@/components/ui/atoms/CoverBackground.vue";
import Lead from "@/components/ui/atoms/Lead.vue";
import CtaBox from "@/components/ui/molecules/CtaBox.vue";

export default {
  components: {
    Container,
    CoverBackground,
    Lead,
    CtaBox,
  },
};
</script>

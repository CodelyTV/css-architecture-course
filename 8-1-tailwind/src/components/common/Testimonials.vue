<template>
  <CoverBackground background="plant">
    <Container class="py-24">
      <Title tag="h2" class="mb-12">¿Qué dicen de nosotros?<br /></Title>
      <div class="grid grid-cols-autofill-15 gap-8">
        <Quote
          v-for="quote in quotes"
          :key="quote.text"
          :quote="quote.text"
          :author="quote.author"
        />
      </div>
    </Container>
  </CoverBackground>
</template>

<script>
import Container from "@/components/ui/objects/Container.vue";
import CoverBackground from "@/components/ui/atoms/CoverBackground.vue";
import Title from "@/components/ui/atoms/Title.vue";
import Quote from "@/components/ui/molecules/Quote.vue";

export default {
  components: {
    Container,
    CoverBackground,
    Title,
    Quote,
  },
  data() {
    return {
      quotes: [
        {
          text:
            "Llevo casi 14 años en esto y me flipa la cantidad de conocimientos que me siguen faltando. Vuestros cursos me ayudan a asumirlos.",
          author: {
            name: "Joan Miralles",
            img: "img/testimonios/joan-miralles.jpg",
            role: "Arquitecto Software - Brújula",
          },
        },
        {
          text:
            "Me lo he pasado genial trasteando con un proyecto real en CQRS. No solo he aprendido CQRS, poder ver todo el código me ha hecho                         aprender otras buenas prácticas, he conocido librerías muy             interesantes y aprendido a testear APIs",
          author: {
            name: "Miguel Ángel Sánchez",
            img: "img/testimonios/miguel-angel-sanchez.jpg",
            role: "Backend Lead - Beroomers",
          },
        },
        {
          text:
            "Los contenidos son modernos y relevantes para la industria del software y las buenas prácticas de programación. Los conocimientos se presentan de manera amigable y crítica a la vez, logrando así un aprendizaje más profundo",
          author: {
            name: "Luis Rodriguez",
            img: "img/testimonios/luis-rodriguez.jpg",
            role: "Desarrollador Java - ICBC Argentina",
          },
        },
        {
          text:
            "La labor que hacéis entre todos creando contenido y generando comunidad hace que uno se sienta orgulloso de su profesión. Súper recomendable para programadores con experiencia y de obligado consumo para juniors o gente que quiera aprender sin tener que comerse libracos o post en inglés",
          author: {
            name: "Edu Salguero",
            img: "img/testimonios/edu-salguero.jpeg",
            role: "Software Developer - GamersWalk",
          },
        },
        {
          text:
            "Por muchas charlas, meetups y conferencias que vayas, necesitas ponerte a practicar para asentar conocimientos. CodelyTV Pro me permite ver en detalle algunos aspectos y despejar dudas. ¡Ya he podido deployar mi aplicación en AWS!",
          author: {
            name: "Sergio de Candelario",
            img: "img/testimonios/sergio-de-candelario.jpg",
            role: "Fullstack Developer - Addiliate",
          },
        },
        {
          text:
            "Es un placer aprender con profesores de tal calibre, con experiencia en el campo y capaces de explicar conceptos complejos de forma sencilla",
          author: {
            name: "Fernando Ripoll",
            img: "img/testimonios/fernando-ripoll.jpg",
            role: "Solution Engineer - Giant Swarm",
          },
        },
        {
          text:
            "CodelyTV Pro me permite estar al dia sobre tendencias y buenas prácticas tanto de la tecnologia como de su gestión. Muy útil",
          author: {
            name: "Marc Monguió",
            img: "img/testimonios/marc-monguio.jpg",
            role: "CTO - JobFluent.com",
          },
        },

        {
          text:
            "Los cursos son muy amenos y esa frescura los hace ideales para que enganchen desde el principio",
          author: {
            name: "Antonio Manuel Rubio",
            img: "img/testimonios/antonio-manuel-rubio.jpg",
            role: "CTO - Actualpacs",
          },
        },
      ],
    };
  },
};
</script>

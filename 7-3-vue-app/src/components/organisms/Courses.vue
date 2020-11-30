<template>
  <section class="courses">
    <Container>
      <Title>👌 Cursos disponibles</Title>

      <Dropdown class="courses__filters" />

      <div class="courses__grid">
        <Card
          v-for="course in courses"
          :key="course.slug"
          :info="course"
          class="courses__item"
        >
          <p>
            {{ course.description }}
          </p>
          <Button theme="primary" block :href="course.link"
            >Empezar curso</Button
          >
        </Card>
      </div>
    </Container>
  </section>
</template>

<script>
import Container from "@/components/objects/Container.vue";
import Button from "@/components/atoms/Button.vue";
import Title from "@/components/atoms/Title.vue";
import Card from "@/components/molecules/Card.vue";
import Dropdown from "@/components/molecules/Dropdown.vue";
import { api } from "@/services/api";

export default {
  components: {
    Container,
    Button,
    Title,
    Card,
    Dropdown,
  },
  data() {
    return {
      courses: [],
    };
  },
  async created() {
    this.courses = (await api.getCourses()).map((course) => {
      return {
        ...course,
        meta: course.authors,
        img: `/img/cursos/${course.img}`,
        link: `https://pro.codely.tv/library/${course.slug}`,
      };
    });
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.courses {
  background: variables.$background-light-color;
  border-bottom: 1px solid variables.$border-inverted-color;

  &__filters {
    margin-bottom: 3rem;
  }

  &__grid {
    gap: 1.87rem;
    column-width: 18rem;
  }

  &__item {
    margin-bottom: 1.87rem;
    break-inside: avoid;
  }
}
</style>

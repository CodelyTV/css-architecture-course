<template>
  <section class="bg-gray-100 border-b border-gray-200">
    <Container>
      <Title>👌 Cursos disponibles</Title>

      <Dropdown class="mb-12" />

      <div class="col-w-md gap-7">
        <Card
          v-for="course in courses"
          :key="course.slug"
          :info="course"
          class="bi-avoid mb-7"
        >
          <p class="mb-4">
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
import Container from "@/components/ui/objects/Container.vue";
import Button from "@/components/ui/atoms/Button.vue";
import Title from "@/components/ui/atoms/Title.vue";
import Card from "@/components/ui/molecules/Card.vue";
import Dropdown from "@/components/ui/molecules/Dropdown.vue";
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

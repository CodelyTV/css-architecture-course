<template>
  <Hero />
  <BusinessCallout />
  <Subscribe />
  <Courses />
  <Partners />
  <Testimonials />
  <Cta />
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/organisms/Hero.vue";
import BusinessCallout from "@/components/organisms/BusinessCallout.vue";
import Subscribe from "@/components/organisms/Subscribe.vue";
import Courses from "@/components/organisms/Courses.vue";
import Partners from "@/components/organisms/Partners.vue";
import Testimonials from "@/components/organisms/Testimonials.vue";
import Cta from "@/components/organisms/Cta.vue";

export default {
  name: "Home",
  components: {
    Hero,
    BusinessCallout,
    Subscribe,
    Courses,
    Partners,
    Testimonials,
    Cta,
  },
};
</script>

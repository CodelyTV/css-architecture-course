<template>
  <Hero />
  <BusinessCallout />
  <Subscribe />
  <Collection />
  <Partners />
  <Testimonials />
  <Cta />
</template>

<script>
// @ is an alias to /src
import BusinessCallout from "@/components/common/BusinessCallout.vue";
import Partners from "@/components/common/Partners.vue";
import Testimonials from "@/components/common/Testimonials.vue";
import Hero from "@/components/courses/Hero.vue";
import Collection from "@/components/courses/Collection.vue";
import Subscribe from "@/components/subscription/Subscribe.vue";
import Cta from "@/components/subscription/Cta.vue";

export default {
  name: "Home",
  components: {
    Hero,
    BusinessCallout,
    Subscribe,
    Collection,
    Partners,
    Testimonials,
    Cta
  }
};
</script>

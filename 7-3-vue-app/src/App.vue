<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/organisms/Header.vue";
import Footer from "@/components/organisms/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

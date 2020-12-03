<template>
  <Container class="flex flex-wrap items-center justify-between | py-12">
    <h4 class="text-lg">Invierte en ti y mejora como profesional</h4>
    <Button
      theme="primary"
      href="https://pro.codely.tv/subscribe?utm_source=courses-landing&utm_medium=landing&utm_campaign=internal&utm_content=bottom-cta"
    >
      👉 Suscríbete ahora 👈
    </Button>
  </Container>
</template>

<script>
import Container from "@/components/ui/objects/Container.vue";
import Button from "@/components/ui/atoms/Button.vue";

export default {
  components: {
    Container,
    Button,
  },
};
</script>

<template>
  <Box class="relative pb-16">
    <h3 class="my-4 pb-4 | border-b-2 border-gray-100 border-opacity-30">
      <slot name="header" />
    </h3>
    <span class="absolute top-6 right-6 | uppercase text-xs">{{ note }}</span>
    <div class="children:mb-2">
      <slot />
    </div>
    <Button
      theme="primary"
      class="absolute bottom-0 left-0 right-0 | rounded-t-none | text-center"
      :href="link"
    >
      {{ cta }}
    </Button>
  </Box>
</template>

<script>
import Box from "@/components/ui/atoms/Box.vue";
import Button from "@/components/ui/atoms/Button.vue";

export default {
  props: {
    cta: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
  },
  components: {
    Box,
    Button,
  },
};
</script>

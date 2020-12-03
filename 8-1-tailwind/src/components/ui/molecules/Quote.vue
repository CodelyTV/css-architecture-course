<template>
  <div>
    <Box>
      {{ quote }}
    </Box>
    <div class="flex items-start gap-4 | mt-4">
      <img :alt="author.name" :src="author.img" class="w-20 rounded-full" />
      <div>
        <h5 class="font-semibold">{{ author.name }}</h5>
        <span>{{ author.role }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Box from "@/components/ui/atoms/Box.vue";

export default {
  props: {
    quote: {
      type: String,
    },
    author: {
      type: Object,
      required: true,
    },
  },
  components: {
    Box,
  },
};
</script>

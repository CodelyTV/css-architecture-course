<template>
  <div class="quote">
    <Box>
      {{ quote }}
    </Box>
    <div class="quote__attribution">
      <img :alt="author.name" :src="author.img" class="quote__image" />
      <div>
        <h5 class="quote__author">{{ author.name }}</h5>
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

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";
@use "@/assets/styles/tools/_mixins.scss";

.quote {
  &__attribution {
    @include mixins.sidebar($side-width: 3.25rem, $gap: 1.62rem);

    align-items: flex-start;
    margin-top: 1rem;
  }

  &__author {
    margin: 0;
    font-weight: 600;
    font-size: variables.$fs-body;
  }

  &__image {
    max-width: 3.25rem;
    border-radius: 50%;
  }
}
</style>

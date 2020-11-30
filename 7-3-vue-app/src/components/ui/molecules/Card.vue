<template>
  <article class="card">
    <img class="card__img" :alt="info.title" :src="info.img" />
    <h4 class="card__title">
      <a :href="info.link" target="_blank">
        {{ info.title }}
      </a>
    </h4>
    <strong class="card__meta">{{ info.meta }}</strong>
    <slot />
  </article>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.card {
  padding: 1rem;
  color: variables.$text-muted-color;
  background: variables.$background-lighter-color;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  &__img {
    display: block;
    width: calc(100% + 2rem);
    max-width: none;
    margin: -1rem -1rem 0;
    border-radius: 5px 5px 0 0;
  }

  &__title {
    margin-bottom: 0.5rem;
    font-weight: 400;
    font-size: variables.$fs-lead;
    line-height: 1.3;

    a {
      text-decoration: none;
    }
  }

  &__meta {
    display: block;
    margin-bottom: 0.5rem;
  }
}
</style>

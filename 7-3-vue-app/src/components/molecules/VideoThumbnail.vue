<template>
  <div class="video-thumbnail">
    <img
      alt="Vídeo introducción cursos CodelyTV Pro"
      :src="thumbnailUrl"
      class="video-thumbnail__img"
    />
    <button
      aria-label="Reproducir Vídeo"
      class="video-thumbnail__play video-thumbnail__play--large"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    thumbnailUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.video-thumbnail {
  position: relative;

  &__img {
    display: block;
    margin-bottom: 1.6rem;
    border-radius: 0.5rem;
  }

  &__play {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 5em;
    height: 5em;
    background: variables.$background-lighter-color;
    border: none;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      margin-top: -5px;
      margin-top: -3px;
      margin-left: -4px;
      border-color: transparent transparent transparent
        variables.$background-dark-color;
      border-style: solid;
      border-width: 6px 0 6px 12px;
      content: "";
    }

    &--large {
      width: 7.4em;
      height: 7.4em;
    }

    &:hover {
      box-shadow: 0 23px 40px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>

<template>
  <div class="dropdown">
    <span class="dropdown__label">Categoría:</span>
    <div class="dropdown__field">
      <UiList class="dropdown__list">
        <span class="dropdown__item dropdown__item--active">Todas</span>
      </UiList>
    </div>
  </div>
</template>

<script>
import UiList from "@/components/objects/UiList.vue";

export default {
  components: {
    UiList,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.dropdown {
  display: flex;
  align-items: center;
  justify-content: center;

  &__label {
    display: inline-block;
    margin-right: 1rem;
    vertical-align: middle;
  }

  &__field {
    position: relative;
    display: inline-block;
    min-width: 143px;
    height: 3.71428571em;
    padding: 1rem;
    background: variables.$background-lighter-color;
    border: 1px solid variables.$border-inverted-color;
    border-radius: 6px;
  }

  &__list {
    position: absolute;
    top: 1rem;
    left: 1rem;
    max-height: 1.85714286em;
    overflow: hidden;
  }

  &__item {
    display: none;

    &--active {
      display: block;
      color: variables.$primary-dark-color;

      &::after {
        position: relative;
        bottom: 2px;
        display: inline-block;
        margin-left: 6px;
        font-size: 8px;
        transform: scaleX(1.4) scaleY(0.9);
        content: "\25bc";
      }
    }
  }
}
</style>

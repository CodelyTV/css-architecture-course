<template>
  <span class="pill"><slot /></span>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";

.pill {
  display: inline-block;
  padding: 0.5rem 0.65rem;
  color: variables.$text-inverted-color;
  font-weight: 700;
  font-size: variables.$fs-pill;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  background: variables.$background-darker-color;
  border-radius: 50px;
}
</style>

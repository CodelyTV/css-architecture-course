<template>
  <section
    :class="
      `bg-gray-900 bg-fixed bg-cover bg-center bg-no-repeat bg-${background} | text-white`
    "
  >
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      required: true,
      validator(value) {
        const backgrounds = ["plant", "kayak"];
        return backgrounds.includes(value);
      },
    },
  },
};
</script>

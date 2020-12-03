<template>
  <article class="overflow-hidden | rounded-lg bg-white shadow | text-gray-600">
    <img class="mb-4 w-full" :alt="info.title" :src="info.img" />
    <div class="m-4">
      <h4 class="mb-2 text-lg">
        <a
          :href="info.link"
          target="_blank"
          class="no-underline text-green hover:text-green-dark"
        >
          {{ info.title }}
        </a>
      </h4>
      <strong class="mb-2 block">{{ info.meta }}</strong>
      <slot />
    </div>
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

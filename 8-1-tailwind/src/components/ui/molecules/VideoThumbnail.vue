<template>
  <div class="relative">
    <img
      alt="Vídeo introducción cursos CodelyTV Pro"
      :src="thumbnailUrl"
      class="block mb-6 | rounded"
    />
    <button
      aria-label="Reproducir Vídeo"
      class="absolute top-1/2 left-1/2 | w-28 h-28 flex items-center justify-center | bg-white rounded-full | transform -translate-x-1/2 -translate-y-1/2 | pointer hover:shadow-xl"
    >
      <svg
        class="w-16 text-gray-800"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M8 5v14l11-7z" fill="currentColor" />
      </svg>
    </button>
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

<template>
  <header
    class="sticky top-0 left-0 z-40 | w-full | bg-gray-900 shadow-lg | text-white"
  >
    <Container tag="nav" class="flex-justified | py-4">
      <a href="https://codely.tv">
        <img
          alt="Logo CodelyTV"
          src="https://codely.tv/pro/img/codelytv/logo-codelytv.png"
          class="block max-h-10"
        />
      </a>
      <ul class="flex flex-wrap gap-4">
        <li>
          <a href="https://codely.tv/pro/cursos">Cursos</a>
        </li>
        <li>
          <a href="https://codely.tv/pro/teams">Empresas</a>
        </li>
        <li>
          <a
            href="https://codely.tv/pro/comunidades"
            title="Patrocinio comunidades de desarrollo"
            >Comunidades</a
          >
        </li>
        <li>
          <a
            href="https://www.youtube.com/CodelyTV?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=header-menu"
            rel="nofollow"
            target="_blank"
            >YouTube</a
          >
        </li>
        <li>
          <a href="https://codely.tv/blog">Blog</a>
        </li>
        <li>
          <a
            href="/cdn-cgi/l/email-protection#11627e617e63657451727e75747d683f65672e4264737b7472652c4a527e75747d6845474c31527e7f657072657e31667473"
            rel="nofollow"
            >Contacta</a
          >
        </li>
        <li>
          <a
            href="https://pro.codely.tv/auth/sign-in/?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=header-menu"
            rel="nofollow"
            class="ml-8"
            >Inicia sesión</a
          >
        </li>
        <li>
          <a
            href="/pro/cursos"
            class="px-4 py-2 | border-2 border-green rounded | uppercase"
            >Suscríbete</a
          >
        </li>
      </ul>
    </Container>
  </header>
</template>

<script>
import Container from "@/components/ui/objects/Container.vue";

export default {
  components: {
    Container,
  },
};
</script>

<style scoped>
a {
  @apply font-semibold text-white no-underline hover:text-white hover:text-opacity-80;
}
</style>

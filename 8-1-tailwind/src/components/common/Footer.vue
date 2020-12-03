<template>
  <footer class="bg-gray-900">
    <Container class="flex flex-wrap items-center justify-between">
      <ul class="flex flex-wrap gap-4">
        <li>
          <a href="https://codely.tv/pro/cursos"> Cursos </a>
        </li>
        <li>
          <a href="https://codely.tv/pro/teams"> Empresas </a>
        </li>
        <li>
          <a
            href="https://codely.tv/pro/comunidades"
            title="Patrocinio comunidades de desarrollo"
          >
            Comunidades
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/CodelyTV?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=footer"
            rel="nofollow"
            target="_blank"
          >
            YouTube
          </a>
        </li>
        <li>
          <a href="https://codely.tv/blog"> Blog </a>
        </li>
        <li>
          <a
            href="/cdn-cgi/l/email-protection#1b68746b74696f7e5b78747f7e7762356f6d24486e79717e786f264058747f7e77624f4d463b5874756f7a786f743b6c7e79"
            rel="nofollow"
          >
            Contacta
          </a>
        </li>
      </ul>

      <ul class="flex flex-wrap gap-4">
        <li>
          <a
            href="https://www.youtube.com/CodelyTV?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=footer"
            rel="nofollow"
            target="_blank"
          >
            <img src="img/icons/youtube.svg" alt="YouTube" />
          </a>
        </li>
        <li>
          <a href="https://github.com/CodelyTV/" rel="nofollow" target="_blank">
            <img src="img/icons/github.svg" alt="github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/CodelyTV/"
            rel="nofollow"
            target="_blank"
          >
            <img src="img/icons/instagram.svg" alt="instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/codelytv/"
            rel="nofollow"
            target="_blank"
          >
            <img src="img/icons/linkedin.svg" alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/CodelyTV" rel="nofollow" target="_blank">
            <img src="img/icons/twitter.svg" alt="twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/CodelyTV/"
            rel="nofollow"
            target="_blank"
          >
            <img src="img/icons/facebook.svg" alt="facebook" />
          </a>
        </li>
      </ul>
    </Container>
    <Container class="pb-16 | border-t border-gray-500">
      <ul class="flex flex-wrap gap-4">
        <li><a href="https://codely.tv/pro/aviso-legal"> Aviso legal </a></li>
        <li>
          <a href="https://codely.tv/pro/condiciones-generales"
            >Condiciones generales
          </a>
        </li>
        <li>
          <a href="https://codely.tv/pro/politica-privacidad">
            Política de privacidad
          </a>
        </li>
        <li>
          <a href="https://codely.tv/pro/politica-cookies">
            Política de cookies
          </a>
        </li>
      </ul>
    </Container>
  </footer>
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
  @apply no-underline text-gray-200 text-sm text-opacity-70 hover:text-white hover:text-opacity-100;
}

img {
  @apply block w-4 ml-2 opacity-70 hover:opacity-100;
}

footer > :first-child a {
  @apply uppercase font-bold;
}
</style>

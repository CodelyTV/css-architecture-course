<template>
  <footer class="footer">
    <Container class="footer__links">
      <UiList horizontal>
        <a href="https://codely.tv/pro/cursos"> Cursos </a>
        <a href="https://codely.tv/pro/teams"> Empresas </a>
        <a
          href="https://codely.tv/pro/comunidades"
          title="Patrocinio comunidades de desarrollo"
        >
          Comunidades
        </a>
        <a
          href="https://www.youtube.com/CodelyTV?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=footer"
          rel="nofollow"
          target="_blank"
        >
          YouTube
        </a>
        <a href="https://codely.tv/blog"> Blog </a>
        <a
          href="/cdn-cgi/l/email-protection#1b68746b74696f7e5b78747f7e7762356f6d24486e79717e786f264058747f7e77624f4d463b5874756f7a786f743b6c7e79"
          rel="nofollow"
        >
          Contacta
        </a>
      </UiList>

      <UiList horizontal>
        <a
          href="https://www.youtube.com/CodelyTV?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=footer"
          rel="nofollow"
          target="_blank"
        >
          <img src="img/icons/youtube.svg" alt="YouTube" />
        </a>
        <a href="https://github.com/CodelyTV/" rel="nofollow" target="_blank">
          <img src="img/icons/github.svg" alt="github" />
        </a>
        <a
          href="https://www.instagram.com/CodelyTV/"
          rel="nofollow"
          target="_blank"
        >
          <img src="img/icons/instagram.svg" alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/company/codelytv/"
          rel="nofollow"
          target="_blank"
        >
          <img src="img/icons/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://twitter.com/CodelyTV" rel="nofollow" target="_blank">
          <img src="img/icons/twitter.svg" alt="twitter" />
        </a>
        <a
          href="https://www.facebook.com/CodelyTV/"
          rel="nofollow"
          target="_blank"
        >
          <img src="img/icons/facebook.svg" alt="facebook" />
        </a>
      </UiList>
    </Container>
    <Container class="footer__legal">
      <UiList horizontal>
        <a href="https://codely.tv/pro/aviso-legal"> Aviso legal </a>

        <a href="https://codely.tv/pro/condiciones-generales">
          Condiciones generales
        </a>
        <a href="https://codely.tv/pro/politica-privacidad">
          Política de privacidad
        </a>
        <a href="https://codely.tv/pro/politica-cookies">
          Política de cookies
        </a>
      </UiList>
    </Container>
  </footer>
</template>

<script>
import Container from "@/components/ui/objects/Container.vue";
import UiList from "@/components/ui/objects/UiList.vue";

export default {
  components: {
    Container,
    UiList,
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/_variables.scss";
@use "@/assets/styles/tools/_mixins.scss";

.footer {
  background: variables.$background-dark-color;

  &__links {
    @include mixins.justify;

    font-weight: 700;
    font-size: variables.$fs-footer;
    text-transform: uppercase;

    img {
      max-width: 1rem;
      margin-left: 0.5rem;
    }
  }

  &__legal {
    padding-bottom: variables.$spacing-l;
    border-top: 1px solid variables.$border-color;
  }

  a {
    color: variables.$text-inverted-color;
    text-decoration: none;
    opacity: 0.7;
    transition: all 0.2s;

    &:hover,
    &:focus {
      color: variables.$text-inverted-color;
      opacity: 1;
    }
  }
}
</style>

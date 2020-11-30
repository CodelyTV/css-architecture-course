<template>
  <header class="header">
    <Container tag="nav" class="header__nav">
      <a href="https://codely.tv">
        <img
          alt="Logo CodelyTV"
          src="https://codely.tv/pro/img/codelytv/logo-codelytv.png"
          class="header__brand"
        />
      </a>
      <UiList horizontal>
        <a href="https://codely.tv/pro/cursos" class="header__link">Cursos</a>
        <a href="https://codely.tv/pro/teams" class="header__link">Empresas</a>
        <a
          href="https://codely.tv/pro/comunidades"
          title="Patrocinio comunidades de desarrollo"
          class="header__link"
          >Comunidades</a
        >
        <a
          href="https://www.youtube.com/CodelyTV?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=header-menu"
          rel="nofollow"
          target="_blank"
          class="header__link"
          >YouTube</a
        >
        <a href="https://codely.tv/blog" class="header__link">Blog</a>

        <a
          href="/cdn-cgi/l/email-protection#11627e617e63657451727e75747d683f65672e4264737b7472652c4a527e75747d6845474c31527e7f657072657e31667473"
          rel="nofollow"
          class="header__link"
          >Contacta</a
        >
        <a
          href="https://pro.codely.tv/auth/sign-in/?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=header-menu"
          rel="nofollow"
          class="header__link header__link--separator"
          >Inicia sesión</a
        >
        <a href="/pro/cursos" class="header__link header__link--cta"
          >Suscríbete</a
        >
      </UiList>
    </Container>
  </header>
</template>

<script>
import Container from "@/components/objects/Container.vue";
import UiList from "@/components/objects/UiList.vue";

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

.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: variables.$z-menu;
  width: 100%;
  color: variables.$text-inverted-color;
  background: variables.$background-dark-color;
  box-shadow: 0 6px 24px -12px variables.$background-darker-color;

  &__brand {
    display: block;
    max-height: 2.3rem;
  }

  &__nav {
    @include mixins.justify;

    padding-top: variables.$spacing-s;
    padding-bottom: variables.$spacing-s;
  }

  &__link {
    color: variables.$text-inverted-color;
    font-weight: 600;
    font-size: variables.$fs-menu;
    letter-spacing: 0.03em;
    text-decoration: none;

    &--separator {
      margin-left: 1.75rem;
    }

    &--cta {
      padding: 0.4em 1em;
      font-size: 0.95em;
      text-transform: uppercase;
      border: solid 2px variables.$primary-color;
      border-radius: 2px;
    }

    &:hover {
      color: variables.$text-inverted-color;
      opacity: 0.8;
    }
  }
}
</style>

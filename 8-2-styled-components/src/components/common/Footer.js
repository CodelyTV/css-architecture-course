import styled from "styled-components";
import { Container } from "../ui/objects/Container";
import { Justify } from "../ui/objects/Justify";
import { UiList } from "../ui/objects/UiList";

const Wrapper = styled.footer`
  background: ${(props) => props.theme.backgroundDarkColor};

  & > *:not(:last-child) {
    font-weight: 700;
    font-size: ${(props) => props.theme.fsFooter};
    text-transform: uppercase;

    img {
      max-width: 1rem;
      margin-left: 0.5rem;
    }
  }

  & > :last-child {
    padding-bottom: ${(props) => props.theme.spacingL};
    border-top: 1px solid ${(props) => props.theme.borderColor};
  }

  a {
    color: ${(props) => props.theme.textInvertedColor};
    text-decoration: none;
    opacity: 0.7;
    transition: all 0.2s;

    &:hover,
    &:focus {
      color: ${(props) => props.theme.textInvertedColor};
      opacity: 1;
    }
  }
`;

export function Footer() {
  return (
    <Wrapper>
      <Justify>
        <Container>
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
            <a
              href="https://github.com/CodelyTV/"
              rel="nofollow"
              target="_blank"
            >
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
            <a
              href="https://twitter.com/CodelyTV"
              rel="nofollow"
              target="_blank"
            >
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
      </Justify>
      <Container>
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
    </Wrapper>
  );
}

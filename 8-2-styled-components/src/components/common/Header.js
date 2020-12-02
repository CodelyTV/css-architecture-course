import styled from "styled-components";
import { Container } from "../ui/objects/Container";
import { Justify } from "../ui/objects/Justify";
import { UiList } from "../ui/objects/UiList";

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: ${(props) => props.theme.zMenu};
  width: 100%;
  color: ${(props) => props.theme.textInvertedColor};
  background: ${(props) => props.theme.backgroundDarkColor};
  box-shadow: 0 6px 24px -12px ${(props) => props.theme.backgroundDarkerColor};
  img {
    display: block;
    max-height: 2.3rem;
  }
`;

const HeaderNav = styled(Container)`
  padding-top: ${(props) => props.theme.spacingS};
  padding-bottom: ${(props) => props.theme.spacingS};

  a {
    color: ${(props) => props.theme.textInvertedColor};
    font-weight: 600;
    font-size: ${(props) => props.theme.fsMenu};
    letter-spacing: 0.03em;
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.textInvertedColor};
      opacity: 0.8;
    }
  }
`;

const Login = styled.a`
  margin-left: 1.75rem;
`;

const Subscribe = styled.a`
  padding: 0.4em 1em;
  font-size: 0.95em;
  text-transform: uppercase;
  border: solid 2px ${(props) => props.theme.primaryColor};
  border-radius: 2px;
`;

export function MainHeader() {
  return (
    <Header>
      <Justify>
        <HeaderNav tag="nav">
          <a href="https://codely.tv">
            <img
              alt="Logo CodelyTV"
              src="https://codely.tv/pro/img/codelytv/logo-codelytv.png"
            />
          </a>
          <UiList horizontal>
            <a href="https://codely.tv/pro/cursos">Cursos</a>
            <a href="https://codely.tv/pro/teams">Empresas</a>
            <a
              href="https://codely.tv/pro/comunidades"
              title="Patrocinio comunidades de desarrollo"
            >
              Comunidades
            </a>
            <a
              href="https://www.youtube.com/CodelyTV?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=header-menu"
              rel="nofollow"
              target="_blank"
            >
              YouTube
            </a>
            <a href="https://codely.tv/blog">Blog</a>

            <a
              href="/cdn-cgi/l/email-protection#11627e617e63657451727e75747d683f65672e4264737b7472652c4a527e75747d6845474c31527e7f657072657e31667473"
              rel="nofollow"
            >
              Contacta
            </a>
            <Login
              href="https://pro.codely.tv/auth/sign-in/?utm_source=cursos&utm_medium=landing&utm_campaign=internal&utm_content=header-menu"
              rel="nofollow"
            >
              Inicia sesión
            </Login>
            <Subscribe href="/pro/cursos">Suscríbete</Subscribe>
          </UiList>
        </HeaderNav>
      </Justify>
    </Header>
  );
}

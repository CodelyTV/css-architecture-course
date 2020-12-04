import styled from "styled-components";
import { Container } from "../ui/objects/Container";
import { Button } from "../ui/atoms/Button";
import { CoverBackground } from "../ui/atoms/CoverBackground";
import { Lead } from "../ui/atoms/Lead";
import { Title } from "../ui/atoms/Title";
import { VideoThumbnail } from "../ui/molecules/VideoThumbnail";
import { includeSidebar } from "../ui/utils/includeSidebar";

const HeroContainer = styled(Container)`
  ${includeSidebar({
    sidebarPosition: "first-child",
  })}
  padding-top: ${(props) => props.theme.spacingL};
  padding-bottom: ${(props) => props.theme.spacingL};

  > :first-child {
    padding-right: 2rem;
    font-size: ${(props) => props.theme.fsLead};
  }

  > :last-child {
    max-width: 33rem;
    margin: 0 auto;
  }

  p {
    opacity: 0.9;
  }
`;

const HeroButton = styled(Button)`
  margin-top: 1rem;
`;

export function Hero() {
  return (
    <CoverBackground bg="plant">
      <HeroContainer>
        <div>
          <Title tag="h1">
            Cursos para programadores&nbsp;🚀
            <br />
          </Title>
          <Lead>
            Aprende de profesionales con experiencia en cursos prácticos y sin
            rodeos. Mejora tus habilidades, especialízate, y sigue avanzando en
            tu carrera.
          </Lead>
          <HeroButton variant="primary">👇 Más información 👇</HeroButton>
        </div>
        <div>
          <VideoThumbnail
            alt="Vídeo introducción cursos CodelyTV Pro"
            thumbnailUrl="img/bg/cursos-codelytv-pro.png"
          />
          <p>
            Cursos de principios SOLID, Domain-Driven Design, Arquitectura
            Hexagonal, Docker, CQRS, Microservicios, Kubernetes, Testing y mucho
            más.
          </p>
        </div>
      </HeroContainer>
    </CoverBackground>
  );
}

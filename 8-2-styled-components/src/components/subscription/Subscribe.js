import styled from "styled-components";
import { CoverBackground } from "../ui/atoms/CoverBackground";
import { Lead } from "../ui/atoms/Lead";
import { Container } from "../ui/objects/Container";
import { UiList } from "../ui/objects/UiList";
import { Sidebar } from "../ui/objects/Sidebar";
import { CtaBox } from "../ui/molecules/CtaBox";

const SubscribeContainer = styled(Container)`
  padding-top: ${(props) => props.theme.spacingL};
  padding-bottom: 5rem;

  > :first-child {
    padding-right: 10vw;
  }
`;
export function Subscribe() {
  return (
    <CoverBackground bg="kayak">
      <Sidebar
        sidebarPosition="first-child"
        minWidth="60%"
        sidebarWidth="25rem"
      >
        <SubscribeContainer>
          <div>
            <h2>
              +40 cursos avanzados,
              <br />
              prácticos y al grano
            </h2>
            <Lead>
              👌 <strong>Apostamos por la calidad</strong>. Tanto en el formato
              como en el contenido.
            </Lead>
            <Lead>
              🔝 Hemos juntado <strong>profesionales del sector</strong> para
              que nos resuman su experiencia en cursos y todos podamos aprender
              de ellos.
            </Lead>
            <Lead>
              🚀 <strong>Cada mes publicamos nuevos cursos</strong> para que
              puedas seguir aprendiendo y avanzando como desarrollador.
            </Lead>
          </div>

          <CtaBox
            note="Sin permanencia mínima"
            cta="👉 SUSCRÍBETE AHORA 👈"
            link="https://pro.codely.tv/subscribe?utm_source=courses-landing&utm_medium=landing&utm_campaign=internal&utm_content=subscription"
            header={
              <span>
                Suscripción mensual
                <br />
                <strong>29€</strong>
              </span>
            }
          >
            <UiList>
              <span>💻 Acceso a todos los cursos ya publicados</span>
              <span>
                👌 Contenido de calidad impartido por profesionales con amplia
                experiencia
              </span>
              <span>🚀 Nuevo contenido cada semana</span>
              <span>🙌 Acceso a la comunidad CodelyTV Pro</span>
              <span>🔖 Certificados al completar cursos</span>
            </UiList>
          </CtaBox>
        </SubscribeContainer>
      </Sidebar>
    </CoverBackground>
  );
}

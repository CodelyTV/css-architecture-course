import styled from "styled-components";
import { Button } from "../ui/atoms/Button";
import { Container } from "../ui/objects/Container";

const CtaContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.spacingL};
  padding-bottom: ${(props) => props.theme.spacingL};

  h4 {
    margin: 0;
    font-weight: 400;
    font-size: ${(props) => props.theme.fsLead};
  }
`;

export function Cta() {
  return (
    <CtaContainer>
      <h4>Invierte en ti y mejora como profesional</h4>
      <Button
        as="a"
        variant="primary"
        href="https://pro.codely.tv/subscribe?utm_source=courses-landing&utm_medium=landing&utm_campaign=internal&utm_content=bottom-cta"
      >
        👉 Suscríbete ahora 👈
      </Button>
    </CtaContainer>
  );
}

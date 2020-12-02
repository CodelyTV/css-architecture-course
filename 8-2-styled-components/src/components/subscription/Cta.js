import styled from "styled-components";
import { Button } from "../ui/atoms/Button";
import { Container } from "../ui/objects/Container";
import { Justify } from "../ui/objects/Justify";

const CtaContainer = styled(Container)`
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
    <Justify>
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
    </Justify>
  );
}

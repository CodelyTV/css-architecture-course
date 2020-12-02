import styled from "styled-components";
import { Pill } from "../ui/atoms/Pill";
import { Container } from "../ui/objects/Container";

const CalloutContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textMutedColor};
`;

export function BusinessCallout() {
  return (
    <CalloutContainer as="section">
      <Pill>🏭 Empresas</Pill>
      <span>
        Grandes y pequeñas empresas mejoran día a día con los
        <a href="https://codely.tv/pro/teams">planes para empresas</a>
      </span>
    </CalloutContainer>
  );
}

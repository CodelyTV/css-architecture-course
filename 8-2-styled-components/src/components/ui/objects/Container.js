import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing} ${(props) => props.theme.spacingS};
`;

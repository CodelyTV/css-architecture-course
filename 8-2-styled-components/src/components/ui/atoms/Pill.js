import styled from "styled-components";

export const Pill = styled.div`
  display: inline-block;
  padding: 0.5rem 0.65rem;
  color: ${(props) => props.theme.textInvertedColor};
  font-weight: 700;
  font-size: ${(props) => props.theme.fsPill};
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  background: ${(props) => props.theme.backgroundDarkerColor};
  border-radius: 50px;
`;

import styled from "styled-components";

export const CoverBackground = styled.section`
  color: ${(props) => props.theme.textInvertedColor};
  background-color: ${(props) => props.theme.backgroundDarkColor};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-image: url(${(props) =>
    (props.bg === "plant" && "/img/bg/plant.jpg") ||
    (props.bg === "kayak" && "/img/bg/kayak.jpg")});
`;

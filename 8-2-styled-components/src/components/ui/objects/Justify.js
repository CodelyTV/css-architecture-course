import styled from "styled-components";

export const Justify = styled.div.attrs((props) => ({
  alignItems: props.alignItems || "center",
}))`
  > * {
    display: flex;
    flex-wrap: wrap;
    align-items: ${(props) => props.alignItems};
    justify-content: space-between;
  }
`;

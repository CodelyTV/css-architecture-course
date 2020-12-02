import styled from "styled-components";

export const Sidebar = styled.div.attrs((props) => ({
  sidebarPosition: props.sidebarPosition || "last-child",
  sidebarWidth: props.sidebarWidth || "auto",
  minWidth: props.minWidth || "50%",
  gap: props.gap || "1rem",
}))`
  > * {
    display: flex;
    flex-wrap: wrap;
    gap: ${(props) => props.gap};

    > * {
      flex-basis: ${(props) => props.sidebarWidth};
      flex-grow: 1;
    }

    > ${(props) => ":" + props.sidebarPosition} {
      min-width: ${(props) => props.minWidth};
      flex-basis: 0;
      flex-grow: 999;
    }
  }
`;

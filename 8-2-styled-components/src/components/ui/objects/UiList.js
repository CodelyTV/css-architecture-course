import styled, { css } from "styled-components";

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  ${(props) =>
    props.horizontal &&
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
    `}
`;

export function UiList(props) {
  return (
    <List {...props}>
      {props.children.map((child) => (
        <li>{child}</li>
      ))}
    </List>
  );
}

import styled, { css } from "styled-components";

export const Button = styled.button`
  display: ${(props) => (props.block ? "block" : "inline-block")};
  width: ${(props) => (props.block ? "100%" : "auto")};
  padding: 0.75rem 1.87rem;
  color: ${(props) => props.theme.textInvertedColor};
  font-weight: 600;
  font-size: ${(props) => props.theme.fsBtn};
  letter-spacing: 0.03em;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) =>
    props.variant === "primary" &&
    css`
      background: ${props.theme.primaryColor};
      &:hover,
      &:focus {
        color: ${props.theme.textInvertedColor};
        background: ${props.theme.primaryDarkColor};
      }
    `};
`;

import styled from "styled-components";

const Article = styled.article`
  padding: 1rem;
  color: ${(props) => props.theme.textMutedColor};
  background: ${(props) => props.theme.backgroundLighterColor};
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  img {
    display: block;
    width: calc(100% + 2rem);
    max-width: none;
    margin: -1rem -1rem 0;
    border-radius: 5px 5px 0 0;
  }
  strong {
    display: block;
    margin-bottom: 0.5rem;
  }
  h4 {
    margin-bottom: 0.5rem;
    font-weight: 400;
    font-size: ${(props) => props.theme.fsLead};
    line-height: 1.3;

    a {
      text-decoration: none;
    }
  }
`;

export function Card(props) {
  return (
    <Article className={props.className}>
      <img alt={props.info.title} src={props.info.img} />
      <h4>
        <a href={props.info.link} target="_blank">
          {props.info.title}
        </a>
      </h4>
      <strong>{props.info.meta}</strong>
      {props.children}
    </Article>
  );
}

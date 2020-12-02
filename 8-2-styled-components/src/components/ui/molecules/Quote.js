import styled from "styled-components";
import { Box } from "../atoms/Box";

const Attribution = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1.62rem;

  > * {
    flex-basis: 3.25rem;
    flex-grow: 1;
  }

  > :last-child {
    min-width: 50%;
    flex-basis: 0;
    flex-grow: 999;
  }

  img {
    max-width: 3.25rem;
    border-radius: 50%;
  }

  h5 {
    margin: 0;
    font-weight: 600;
    font-size: ${(props) => props.theme.fsBody};
  }
`;

export function Quote(props) {
  return (
    <div>
      <Box>{props.quote}</Box>
      <Attribution>
        <img alt={props.author.name} src={props.author.img} />
        <div>
          <h5>{props.author.name}</h5>
          <span>{props.author.role}</span>
        </div>
      </Attribution>
    </div>
  );
}

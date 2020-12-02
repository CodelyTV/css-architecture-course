import styled from "styled-components";
import { Sidebar } from "../objects/Sidebar";
import { Box } from "../atoms/Box";

const Attribution = styled.div`
  margin-top: 1rem;
  align-items: flex-start;

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
      <Sidebar gap="1.62rem" sidebarWidth="3.25rem">
        <Attribution>
          <img alt={props.author.name} src={props.author.img} />
          <div>
            <h5>{props.author.name}</h5>
            <span>{props.author.role}</span>
          </div>
        </Attribution>
      </Sidebar>
    </div>
  );
}

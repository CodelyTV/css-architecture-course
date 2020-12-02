import styled from "styled-components";
import { Box } from "../atoms/Box";
import { Button } from "../atoms/Button";

const WrapperBox = styled(Box)`
  position: relative;
  padding-bottom: 4rem;
`;

const Title = styled.h3`
  margin: 0;
  margin: 0.5em 0 1em;
  padding-bottom: 1em;
  border-bottom: 2px solid rgba(236, 236, 236, 0.3);
`;

const Note = styled.span`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: ${(props) => props.theme.fsPill};
  text-transform: uppercase;
`;

const Stacked = styled.div`
  > * {
    margin-bottom: 0.5em;
  }
`;

const CtaBtn = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

export function CtaBox(props) {
  return (
    <WrapperBox>
      <Title>{props.header}</Title>
      <Note>{props.note}</Note>
      <Stacked>{props.children}</Stacked>
      <CtaBtn as="a" variant="primary" href={props.link}>
        {props.cta}
      </CtaBtn>
    </WrapperBox>
  );
}

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  max-height: 1.85714286em;
  overflow: hidden;
`;

const Label = styled.label`
  display: inline-block;
  margin-right: 1rem;
  vertical-align: middle;
`;

const Field = styled.div`
  position: relative;
  display: inline-block;
  min-width: 143px;
  height: 3.71428571em;
  padding: 1rem;
  background: ${(props) => props.theme.lighterColor};
  border: 1px solid ${(props) => props.theme.borderInvertedColor};
  border-radius: 6px;
`;

const Option = styled.span`
  display: block;
  color: ${(props) => props.theme.primaryDarkColor};

  i {
    position: relative;
    bottom: 2px;
    display: inline-block;
    margin-left: 6px;
    font-size: 8px;
    transform: scaleX(1.4) scaleY(0.9);
    content: "";
  }
`;

export function Dropdown(props) {
  return (
    <Wrapper className={props.className}>
      <Label>Categoría:</Label>
      <Field>
        <List>
          <Option>
            Todas
            <i>▼</i>
          </Option>
        </List>
      </Field>
    </Wrapper>
  );
}

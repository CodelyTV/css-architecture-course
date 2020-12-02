import styled from "styled-components";

const Thumbnail = styled.div`
  position: relative;

  img {
    display: block;
    margin-bottom: 1.6rem;
    border-radius: 0.5rem;
  }
`;

const Play = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 7.4em;
  height: 7.4em;
  background: ${(props) => props.theme.backgroundLighterColor};
  border: none;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    margin-top: -5px;
    margin-top: -3px;
    margin-left: -4px;
    border-color: transparent transparent transparent
      ${(props) => props.theme.backgroundDarkColor};
    border-style: solid;
    border-width: 6px 0 6px 12px;
    content: "";
  }

  &:hover {
    box-shadow: 0 23px 40px rgba(0, 0, 0, 0.2);
  }
`;

export function VideoThumbnail(props) {
  return (
    <Thumbnail>
      <img alt={props.alt} src={props.thumbnailUrl} />
      <Play aria-label="Reproducir Vídeo"></Play>
    </Thumbnail>
  );
}

import styled from "styled-components";

export const Container = styled.figure`
  display: flex;
  width: clamp(3rem, 5vw, 4rem);
  height: clamp(4rem, 5vw, 5.25rem);
  overflow: hidden;
  position: relative;

  box-shadow: 0 5px 10px rgba(#000, .8);
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateZ(0);
  transition: .5s;
  filter: grayscale(100%);

  &:hover {
    transform: translateY(-3px) scale(1.05) rotateX(15deg);
    filter: grayscale(0%);

    figcaption {
      transform: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  figcaption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: .7rem;
    font-weight: bold;
    transition: .5s;
    background-color: var(--backgroundTextContent);
    transform: translateY(100%);
  }
`;

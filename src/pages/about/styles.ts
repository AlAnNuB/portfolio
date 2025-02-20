import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const TextContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--backgroundTextContent);
  backdrop-filter: blur(4px);
  width: 50%;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SubTitle = styled.h3`
  font-size: clamp(1rem, 1.5vw, 2rem);
  font-weight: 300;
  letter-spacing: 1px;
  opacity: .5;
  margin-bottom: 1rem;
`;

export const ImageBox = styled.div`
  display: flex;
  width: 20rem;
  height: 20rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
    -webkit-box-reflect: below 1px linear-gradient(transparent, transparent, #0001);
    transform-origin: center;
    transform: perspective(900px) rotateY(-25deg);
    transition: 0.5s;
  }

  img:hover {
    transform: perspective(900px) rotateY(0deg);
  }

  @media (max-width: 768px) {
   width: 10rem;
   height: 10rem;
 }
`;

export const Description = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  background: transparent;
  text-align: center;
`;

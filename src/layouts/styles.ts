import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0 1rem;
  transition: all 0.5s linear;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
`;
export const LinkContent = styled.div<{ $isActive: boolean }>`
  position: relative;
  padding: 0.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    display: none;
  }

  & ::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    border-radius: ${(props) => (props.$isActive ? "5px" : "0")};
    border-left: ${(props) => (props.$isActive ? "2px solid #f0f8ff" : "none")};
    background-color: ${({ theme }) => theme.color};
    transition: all 0.5s linear;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1.5rem;
  overflow: auto;
`;

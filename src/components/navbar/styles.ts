import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  height: 4rem;

  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;

  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border: 1px solid #2E2F34;
  backdrop-filter: blur(10px);
  border-radius: 50px;

  @media (max-width: 1200px) {
    margin: 1rem 1rem 0 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
  
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color};
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const LinkContent = styled.div<{ $isActive: boolean }>`
  position: relative;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${({ theme, $isActive }) => ($isActive ? theme.primaryColor : theme.color)};
  transition: all 0.3s ease;
  font-weight: 400;

  span {
    visibility: visible;
    opacity: 1;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme, $isActive }) => ($isActive ? theme.primaryColor : "transparent")};
    transition: all 0.3s ease;
  }

  &:hover::after {
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;

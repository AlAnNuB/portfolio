import styled from "styled-components";

export const Navigation = styled.nav`
  display: none;
  height: 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border-bottom: 1px solid ${({ theme }) => theme.borderSidebar};
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

export const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: var(--font-semibold);
  color: ${({ theme }) => theme.color};
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export const MenuPanel = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border-left: 1px solid ${({ theme }) => theme.borderSidebar};
  backdrop-filter: blur(20px);
  transition: right 0.3s ease;
  z-index: 100;
`;

export const NavLinks = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 2rem .5rem;
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
  font-weight: var(--font-semibold);
  width: 100%;

  span {
    visibility: visible;
    opacity: 1;
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

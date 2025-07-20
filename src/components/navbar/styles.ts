import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  height: 4rem;

  max-width: var(--max-width);
  margin: 0 auto;
  margin-top: 2rem;

  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.backgroundSidebar};
  border: 1px solid ${({ theme }) => theme.borderSidebar};
  backdrop-filter: blur(10px);
  border-radius: 50px;

  @media (max-width: var(--max-width)) {
    margin: 1rem 1rem 0 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
  
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: var(--font-semibold);
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
  font-size: 1.125rem;
  color: ${({ theme, $isActive }) => ($isActive ? theme.primaryColor : theme.color)};
  transition: all 0.3s ease;
  font-weight: var(--font-semibold);

  span {
    visibility: visible;
    opacity: 1;
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }

`;

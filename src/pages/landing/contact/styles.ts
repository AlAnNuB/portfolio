import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.black};
  padding: 5rem 2rem 3rem;

  @media (max-width: 48rem) {
    padding: 3.5rem 1rem 2rem;
  }
`;

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.gaps["7xl"]};
  align-items: stretch;

  @media (max-width: 64rem) {
    grid-template-columns: 1fr;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gaps["3xl"]};
  width: 100%;
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.md};
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white18};
  transition: border-color ${({ theme }) => theme.motion.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.eyebrow};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const Value = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  min-height: 2.75rem;
  display: inline-flex;
  align-items: center;
  transition:
    color ${({ theme }) => theme.motion.base},
    transform ${({ theme }) => theme.motion.base};

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
    transform: translateX(0.25rem);
  }
`;

export const PhotoFrame = styled.div`
  border-radius: ${({ theme }) => theme.radii.sm};
  overflow: hidden;
  height: 100%;
  min-height: 26.25rem;
  max-height: 32.5rem;
  background: ${({ theme }) => theme.colors.surface};
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.white08};
  box-shadow: ${({ theme }) => theme.shadows.photo};

  @media (max-width: 64rem) {
    min-height: 16.25rem;
    max-height: 22.5rem;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 18%;
  transition: transform 400ms ease;

  ${PhotoFrame}:hover & {
    transform: scale(1.03);
  }
`;

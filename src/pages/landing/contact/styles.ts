import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.black};
  padding: 80px 32px 48px;

  @media (max-width: 768px) {
    padding: 56px 16px 32px;
  }
`;

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(250, 250, 250, 0.18);
  transition: border-color 200ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.yellow};
  }
`;

export const Label = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.yellow};
`;

export const Value = styled.a`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  transition:
    color 200ms ease,
    transform 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.yellow};
    transform: translateX(4px);
  }
`;

export const PhotoFrame = styled.div`
  border-radius: ${({ theme }) => theme.radiusSm};
  overflow: hidden;
  height: 100%;
  min-height: 420px;
  max-height: 520px;
  background: #18171f;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);

  @media (max-width: 1024px) {
    min-height: 260px;
    max-height: 360px;
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

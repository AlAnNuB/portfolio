import styled from "styled-components";

const Wrapper = styled.header<{ $tone: "light" | "dark" }>`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.yellow};
  flex-shrink: 0;
`;

const Label = styled.p<{ $tone: "light" | "dark" }>`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ $tone, theme }) => ($tone === "dark" ? theme.white : theme.black)};
`;

type SectionHeaderProps = {
  title: string;
  tone?: "light" | "dark";
};

export const SectionHeader = ({ title, tone = "light" }: SectionHeaderProps) => {
  return (
    <Wrapper $tone={tone}>
      <Dot />
      <Label $tone={tone}>{title}</Label>
    </Wrapper>
  );
};

import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.header)<{ $tone: "light" | "dark" }>`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
`;

const HexIcon = styled(motion.svg)<{ $tone: "light" | "dark" }>`
  width: 14px;
  height: 16px;
  flex-shrink: 0;
  fill: ${({ $tone, theme }) => ($tone === "dark" ? theme.yellow : theme.black)};
`;

const Label = styled.p<{ $tone: "light" | "dark" }>`
  font-size: 13px;
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
    <Wrapper $tone={tone} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
      <HexIcon
        $tone={tone}
        viewBox="0 0 24 28"
        initial={{ scale: 0, rotate: -30 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.1 }}
      >
        <polygon points="12,0 24,6.9 24,20.8 12,27.7 0,20.8 0,6.9" />
      </HexIcon>
      <Label $tone={tone}>{title}</Label>
    </Wrapper>
  );
};

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { AnimatedCounter } from "./counter";

type ProgressBarProps = {
  label: string;
  percentage: number;
  delay?: number;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.md};
  width: 100%;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.nav};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;

const Value = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  font-variant-numeric: tabular-nums;
  color: ${({ theme }) => theme.colors.yellow};
`;

const Track = styled.div`
  width: 100%;
  height: 0.375rem;
  background: ${({ theme }) => theme.colors.white12};
  border-radius: ${({ theme }) => theme.radii.control};
  overflow: hidden;
  position: relative;
`;

const Bar = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.colors.yellow};
  border-radius: ${({ theme }) => theme.radii.control};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1rem;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.transparent},
      ${({ theme }) => theme.colors.white45}
    );
    border-radius: ${({ theme }) => theme.radii.control};
  }
`;

export const AnimatedProgressBar = ({ label, percentage, delay = 0 }: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <Container ref={ref}>
      <InfoRow>
        <Label>{label}</Label>
        <Value>
          <AnimatedCounter to={percentage} suffix="%" delay={delay} />
        </Value>
      </InfoRow>
      <Track>
        <Bar
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${percentage}%` } : { width: "0%" }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 1.2,
                  delay,
                  ease: [0.16, 1, 0.3, 1],
                }
          }
        />
      </Track>
    </Container>
  );
};

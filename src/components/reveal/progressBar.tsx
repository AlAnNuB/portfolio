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
  gap: 8px;
  width: 100%;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
`;

const Value = styled.span`
  font-size: 12px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
  color: ${({ theme }) => theme.yellow};
`;

const Track = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(250, 250, 250, 0.12);
  border-radius: 999px;
  overflow: hidden;
  position: relative;
`;

const Bar = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.yellow};
  border-radius: 999px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 16px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45));
    border-radius: 999px;
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

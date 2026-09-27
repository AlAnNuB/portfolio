import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode, useRef } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "fade" | "scale";

type RevealProps = {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  width?: "fit-content" | "100%";
  once?: boolean;
};

const getVariants = (direction: RevealDirection, distance: number): Variants => {
  const offset = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    fade: { x: 0, y: 0 },
    scale: { x: 0, y: 0, scale: 0.9 },
  }[direction];

  return {
    hidden: {
      opacity: 0,
      ...offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
  };
};

export const Reveal = ({ children, direction = "up", delay = 0, duration = 0.6, distance = 32, className, width = "100%", once = true }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = getVariants(direction, distance);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom smooth ease-out (cubic bezier)
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

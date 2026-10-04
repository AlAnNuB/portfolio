import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { type MouseEvent, useRef } from "react";
import styled from "styled-components";
import { theme } from "@/styles/themes";

type Point = {
  x: number;
  y: number;
};

type HoneycombAvatarProps = {
  src: string;
  alt: string;
};

const VIEWBOX_WIDTH = 600;
const VIEWBOX_HEIGHT = 700;
const HEX_RADIUS = 72;
const LINE_COLOR = theme.colors.yellow;

// 2 - 3 - 4 - 3 - 2 regular honeycomb formation
const cells: Point[] = [
  // Row 0
  { x: 237.5, y: 118 },
  { x: 362.5, y: 118 },
  // Row 1
  { x: 175, y: 226 },
  { x: 300, y: 226 },
  { x: 425, y: 226 },
  // Row 2 (center row)
  { x: 112.5, y: 334 },
  { x: 237.5, y: 334 },
  { x: 362.5, y: 334 },
  { x: 487.5, y: 334 },
  // Row 3
  { x: 175, y: 442 },
  { x: 300, y: 442 },
  { x: 425, y: 442 },
  // Row 4
  { x: 237.5, y: 550 },
  { x: 362.5, y: 550 },
];

const photoCells = cells;

function getHexagonPoints({ x, y }: Point, radius = HEX_RADIUS) {
  return Array.from({ length: 6 }, (_, index) => {
    const angle = (Math.PI / 3) * index + Math.PI / 6;
    return `${x + radius * Math.cos(angle)},${y + radius * Math.sin(angle)}`;
  }).join(" ");
}

const Frame = styled(motion.div)`
  width: min(${({ theme }) => theme.sizes.avatarDesktop}, 100%);
  aspect-ratio: 600 / 700;
  margin-inline: auto;
  isolation: isolate;
  perspective: 62.5rem;

  @media (max-width: 74.94rem) {
    width: min(${({ theme }) => theme.sizes.avatarWide}, 100%);
  }

  @media (max-width: 63.94rem) {
    width: min(${({ theme }) => theme.sizes.avatarTablet}, 100%);
  }

  @media (max-width: 47.94rem) {
    width: min(${({ theme }) => theme.sizes.avatarMobile}, 78vw);
  }

  @media (max-width: 30rem) {
    width: min(${({ theme }) => theme.sizes.avatarMobileSmall}, 74vw);
  }
`;

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;

  .background-cell,
  .photo-cell {
    fill: ${({ theme }) => theme.colors.yellow};
  }

  .honeycomb-line {
    fill: none;
    stroke: ${LINE_COLOR};
    stroke-width: 2.2;
    vector-effect: non-scaling-stroke;
    stroke-linejoin: round;
  }

  .avatar-image {
    mix-blend-mode: darken;
  }

  @media (max-width: 47.94rem) {
    .honeycomb-line {
      stroke-width: 1.6;
    }
  }

  @media (max-width: 30rem) {
    .honeycomb-line {
      stroke-width: 1.3;
    }
  }
`;

export const HoneycombAvatar = ({ src, alt }: HoneycombAvatarProps) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const xPct = (event.clientX - rect.left) / rect.width - 0.5;
    const yPct = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Frame
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [0, -8, 0],
              }
        }
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Svg viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} role="img" aria-label={alt}>
          <defs>
            <clipPath id="avatar-honeycomb-clip">
              {photoCells.map((cell, index) => (
                <polygon key={`photo-${index}`} points={getHexagonPoints(cell)} />
              ))}
            </clipPath>
          </defs>

          <g>
            {cells.map((cell, index) => (
              <polygon className="background-cell" key={`background-${index}`} points={getHexagonPoints(cell)} />
            ))}
          </g>

          <g>
            {photoCells.map((cell, index) => (
              <polygon className="photo-cell" key={`photo-cell-${index}`} points={getHexagonPoints(cell)} />
            ))}
          </g>

          {/* Photo clipped to the entire honeycomb silhouette, using mix-blend-mode: darken */}
          <g clipPath="url(#avatar-honeycomb-clip)">
            <image className="avatar-image" href={src} x="35" y="0" width="530" height="620" preserveAspectRatio="xMidYMid slice" />
          </g>

          {/* Honeycomb grid overlay lines */}
          <g>
            {cells.map((cell, index) => (
              <motion.polygon
                className="honeycomb-line"
                key={`line-${index}`}
                points={getHexagonPoints(cell)}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + index * 0.03,
                  ease: "easeOut",
                }}
              />
            ))}
          </g>
        </Svg>
      </motion.div>
    </Frame>
  );
};

import styled from "styled-components";

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
const LINE_COLOR = "#FCDB74";

const cells: Point[] = [
  // 2 - 3 - 4 - 3 - 2: regular honeycomb rows
  { x: 237.5, y: 118 },
  { x: 362.5, y: 118 },
  { x: 175, y: 226 },
  { x: 300, y: 226 },
  { x: 425, y: 226 },
  { x: 112.5, y: 334 },
  { x: 237.5, y: 334 },
  { x: 362.5, y: 334 },
  { x: 487.5, y: 334 },
  { x: 175, y: 442 },
  { x: 300, y: 442 },
  { x: 425, y: 442 },
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

const Frame = styled.div`
  width: 480px;
  aspect-ratio: 600 / 700;
  margin-inline: auto;
  isolation: isolate;

  @media (max-width: 1199px) {
    width: 420px;
  }

  @media (max-width: 1023px) {
    width: 340px;
  }

  @media (max-width: 767px) {
    width: 270px;
  }

  @media (max-width: 480px) {
    width: 210px;
  }
`;

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;

  .background-cell,
  .photo-cell {
    fill: ${({ theme }) => theme.yellow};
  }

  .honeycomb-line,
  .side-line {
    fill: none;
    stroke: ${LINE_COLOR};
    stroke-width: 2;
    vector-effect: non-scaling-stroke;
    stroke-linejoin: round;
  }

  .avatar-image {
    mix-blend-mode: darken;
  }

  @media (prefers-reduced-motion: no-preference) {
    .background-cell,
    .honeycomb-line,
    .side-line {
      stroke-dasharray: 600;
      stroke-dashoffset: 600;
      animation: honeycomb-draw 900ms ease forwards;
    }
  }

  @media (max-width: 767px) {
    .honeycomb-line {
      stroke-width: 1.5;
    }
  }

  @media (max-width: 480px) {
    .honeycomb-line {
      stroke-width: 1.25;
    }
  }

  @keyframes honeycomb-appear {
    from {
      opacity: 0;
      transform: scale(0.9);
      transform-origin: center;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes honeycomb-draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export const HoneycombAvatar = ({ src, alt }: HoneycombAvatarProps) => {
  return (
    <Frame>
      <Svg
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        role="img"
        aria-label={alt}
      >
        <defs>
          <clipPath id="avatar-honeycomb-clip">
            {photoCells.map((cell, index) => (
              <polygon key={`photo-${index}`} points={getHexagonPoints(cell)} />
            ))}
          </clipPath>
        </defs>

        <g>
          {cells.map((cell, index) => (
            <polygon
              className="background-cell"
              key={`background-${index}`}
              points={getHexagonPoints(cell)}
              style={{ animationDelay: `${index * 60}ms` }}
            />
          ))}
        </g>

        <g>
          {photoCells.map((cell, index) => (
            <polygon
              className="photo-cell"
              key={`photo-cell-${index}`}
              points={getHexagonPoints(cell)}
            />
          ))}
        </g>

        <g clipPath="url(#avatar-honeycomb-clip)">
          <image
            className="avatar-image"
            href={src}
            x="35"
            y="0"
            width="530"
            height="620"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>

        <g>
          {cells.map((cell, index) => (
            <polygon
              className="honeycomb-line"
              key={`line-${index}`}
              points={getHexagonPoints(cell)}
              style={{ animationDelay: `${400 + index * 60}ms` }}
            />
          ))}
        </g>
      </Svg>
    </Frame>
  );
};

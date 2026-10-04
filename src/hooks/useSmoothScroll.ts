import { useCallback, useEffect, useRef } from "react";

const easeInOut = (progress: number) =>
  progress < 0.5
    ? 2 * progress ** 2
    : 1 - ((-2 * progress + 2) ** 2) / 2;

export const useSmoothScroll = () => {
  const animationFrame = useRef<number | null>(null);

  const scrollToSection = useCallback((section: HTMLElement) => {
    if (animationFrame.current !== null) {
      cancelAnimationFrame(animationFrame.current);
    }

    const header = document.querySelector<HTMLElement>("header");
    const headerOffset = header?.getBoundingClientRect().height ?? 0;
    const targetPosition = Math.max(
      0,
      window.scrollY + section.getBoundingClientRect().top - headerOffset,
    );
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = Math.min(900, Math.max(450, Math.abs(distance) * 0.5));
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min(1, (currentTime - startTime) / duration);
      window.scrollTo(0, startPosition + distance * easeInOut(progress));

      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(animate);
      } else {
        animationFrame.current = null;
      }
    };

    animationFrame.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    return () => {
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return scrollToSection;
};

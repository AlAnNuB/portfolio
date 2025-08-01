import { SidebarButtonProps } from "@/types/ISidebarButtonProps";
import { useCallback, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "./useDebounce";

export const useScrollChangePage = (sections: SidebarButtonProps[]) => {
  const navigate = useNavigate();

  const activePath = useLocation().pathname;
  const toutchStartY = useRef<number | null>(null);

  const pathIndex = sections.map((item) => item.path === activePath).findIndex((item) => item);

  const listenScrollEvent = useCallback(
    (e: WheelEvent) => {
      if (e.deltaY > 0 && pathIndex >= 0 && pathIndex < sections.length - 1) {
        // scroll down
        navigate(sections[pathIndex + 1].path);
      }
      if (e.deltaY < 0 && pathIndex > 0 && pathIndex < sections.length) {
        //scroll up
        navigate(sections[pathIndex - 1].path);
      }
      return;
    },
    [navigate, pathIndex, sections],
  );

  const listenTouchStartEvent = useCallback((e: TouchEvent) => {
    toutchStartY.current = e.touches[0].clientY;
  }, []);

  const listTouchEndEvent = useCallback(
    (e: TouchEvent) => {
      if (toutchStartY.current === null) return;

      const endY = e.changedTouches[0].clientY;
      const deltaY = toutchStartY.current - endY;

      const swipeThreshold = 50;
      if (deltaY > swipeThreshold && pathIndex >= 0 && pathIndex < sections.length - 1) {
        // Arrastou para cima
        navigate(sections[pathIndex + 1].path);
      } else if (deltaY < -swipeThreshold && pathIndex > 0 && pathIndex < sections.length) {
        // Arrastou para baixo
        navigate(sections[pathIndex - 1].path);
      }

      toutchStartY.current = null;
    },
    [navigate, pathIndex, sections],
  );

  const debouncedListenScrollEvent = useDebounce(listenScrollEvent, 300);

  useEffect(() => {
    window.addEventListener("wheel", debouncedListenScrollEvent);
    window.addEventListener("touchstart", listenTouchStartEvent);
    window.addEventListener("touchend", listTouchEndEvent);

    return () => {
      window.removeEventListener("wheel", listenScrollEvent);
      window.removeEventListener("touchstart", listenTouchStartEvent);
      window.removeEventListener("touchend", listTouchEndEvent);
    };
  }, [listenScrollEvent, listenTouchStartEvent, listTouchEndEvent]);
};

import { useEffect } from "react";
import { useSpring } from "framer-motion";
import { MotionBox } from "../MotionBox";
import { useBreakpointValue } from "@chakra-ui/react";

export const CustomCursor = () => {
  const [cursorWidth, cursorHeight] = [10, 10];

  // Framer Motion spring animation for cursor position
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const isDesktop = useBreakpointValue({ base: false, md: true });

  useEffect(() => {
    if (!isDesktop) return;

    const updateCursorPos = (e: MouseEvent) => {
      x.set(e.clientX - cursorWidth / 2);
      y.set(e.clientY - cursorHeight / 2);
    };

    window.addEventListener("mousemove", updateCursorPos);

    return () => window.removeEventListener("mousemove", updateCursorPos);
  }, [x, y, cursorWidth, cursorHeight, isDesktop]);

  if (!isDesktop) return null;

  return (
    <MotionBox
      style={{
        position: "fixed",
        left: x,
        top: y,
        height: `${cursorHeight}px`,
        width: `${cursorWidth}px`,
        backgroundColor: "black",
        pointerEvents: "none",
        zIndex: 2000,
      }}
    />
  );
};

import { useEffect } from "react";
import { useSpring } from "framer-motion";
import { MotionBox } from "../MotionBox";

export const CustomCursor = () => {
  // Framer Motion spring animation for cursor position
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const updateCursorPos = (e: MouseEvent) => {
      // Update spring values
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", updateCursorPos);

    return () => window.removeEventListener("mousemove", updateCursorPos);
  }, [x, y]); // Dependencies updated to include x and y springs

  return (
    <MotionBox
      style={{
        position: "fixed",
        left: x,
        top: y,
        height: "10px",
        width: "10px",
        backgroundColor: "black",
        pointerEvents: "none",
        zIndex: 100,
      }}
    />
  );
};

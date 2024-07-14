import { useEffect, useState } from "react";
import { useSpring, motion } from "framer-motion";

export const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Framer Motion spring animation for cursor position
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const updateCursorPos = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      // Update spring values
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", updateCursorPos);

    return () => window.removeEventListener("mousemove", updateCursorPos);
  }, [x, y]); // Dependencies updated to include x and y springs

  return (
    <motion.div
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

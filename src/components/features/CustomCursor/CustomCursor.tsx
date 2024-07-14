import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

export const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Spring animations for cursor position
  const [{ x, y }, setSpring] = useSpring(() => ({ x: 0, y: 0 }));

  useEffect(() => {
    const updateCursorPos = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      // Update spring values
      setSpring({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPos);

    return () => window.removeEventListener("mousemove", updateCursorPos);
  }, [setSpring]);

  return (
    <animated.div
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

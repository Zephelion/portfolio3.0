import { ReactNode, useState, useRef } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
}

export const Magnetic = ({ children }: MagneticProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const boxRef = useRef<HTMLDivElement>(null);

  const mouseMove = (e: any) => {
    // Change any to MouseEvent
    if (!boxRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = boxRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={boxRef}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      {children}
    </motion.div>
  );
};

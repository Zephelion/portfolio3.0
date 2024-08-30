import { MotionBox } from "../MotionBox";
import { ReactNode, useState, useRef } from "react";

interface MagneticProps {
  children: ReactNode;
}

export const Magnetic = ({ children }: MagneticProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const boxRef = useRef(null);

  const mouseMove = (e: any) => {
    console.log("wagwan");
  };

  return <MotionBox onMouseMove={mouseMove}>{children}</MotionBox>;
};

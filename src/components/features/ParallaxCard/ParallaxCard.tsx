import { ChakraNextLink } from "@/components/features";
import Image from "next/image";
import { useState, useRef } from "react";
import { useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { MotionBox } from "../MotionBox";

interface ParallaxCardProps {
  href: string;
  index: number;
  coverImage: string;
  className: string;
}

const TIMING = 0.5;
const STEP_COUNT = 3;
const STEP = 20;
const START = -200;
const END = 200;

export const ParallaxCard = ({
  href,
  index,
  coverImage,
  className,
}: ParallaxCardProps) => {
  const [itemHovered, setItemHovered] = useState(false);
  const parallaxCardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = (className: string) => {
    setItemHovered(true);
    document.body.classList.add(className);
  };

  const handleMouseLeave = (className: string) => {
    setItemHovered(false);
    document.body.classList.remove(
      className || "plantswap",
      "rijksmusuem",
      "syncmusic"
    );
  };

  const { scrollYProgress } = useScroll({
    target: parallaxCardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [START, END]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <MotionBox
      style={{ opacity, transform }}
      alignSelf={
        index % 3 === 2 ? "center" : index % 2 === 0 ? "flex-start" : "flex-end"
      }
    >
      <ChakraNextLink
        href={href}
        ref={parallaxCardRef}
        display="block"
        position="relative"
        aspectRatio="16/9"
        height={{ base: "95px", md: "190px" }} // hardcoded atm but can be changed
        width={{ base: "168.5px", md: "337px" }} // hardcoded atm but can be changed
        padding="unset"
        scroll={false}
        onMouseEnter={() => handleMouseEnter(className)}
        onMouseLeave={() => handleMouseLeave(className)}
      >
        {Array.from({ length: STEP_COUNT }, (_, i) => (
          <Image
            key={i}
            src={coverImage}
            alt="project"
            layout="fill"
            objectFit="cover"
            style={{
              transform: itemHovered
                ? `translate(${index % 2 !== 0 ? -i * STEP : i * STEP}px, ${
                    i * STEP
                  }px)`
                : "none",
              transition: `transform 0.5s ease ${TIMING}s`,
              opacity: 1 - i * 0.2,
            }}
          />
        ))}
      </ChakraNextLink>
    </MotionBox>
  );
};

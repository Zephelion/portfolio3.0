import { Flex, Heading } from "@chakra-ui/react";
import {
  MotionValue,
  useAnimationFrame,
  useScroll,
  useSpring,
  useVelocity,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use";

interface MarqueeProps {
  text: string;
  baseVelocity: number;
}

const SETTINGS = {
  SPEED_ON_HOVER: 0.2,
};

export const Marquee = ({ text, baseVelocity = 50 }: MarqueeProps) => {
  const [numItems, setNumItems] = useState(0);
  const itemRef = useRef<HTMLHeadingElement>(null);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const speed = useSpring(baseVelocity, {
    damping: 40,
    stiffness: 90,
  });
  // const velocityFactor = useTransform(speed, [0, 1000], [0, 5], {
  //   clamp: false,
  // });

  const { width } = useWindowSize();

  const calculateNumItems = useCallback(() => {
    if (itemRef.current && width) {
      const itemWidth = itemRef.current.getBoundingClientRect().width;
      const itemsNeeded = Math.ceil(width / itemWidth) + 1;
      setNumItems(itemsNeeded);
    }
  }, [width]);

  useEffect(() => {
    calculateNumItems();
  }, [width, calculateNumItems]);

  return (
    <Flex
      position="relative"
      overflow="hidden"
      onMouseOver={() => {
        speed.set(SETTINGS.SPEED_ON_HOVER);
      }}
      onMouseLeave={() => {
        speed.set(baseVelocity);
      }}
    >
      {/* Render a hidden item initially to measure its width */}
      <Heading
        size="h1"
        ref={itemRef}
        style={{ visibility: "hidden", position: "absolute" }}
      >
        {text}
      </Heading>
      {Array.from({ length: numItems }).map((_, i) => (
        <MarqueeItem
          key={i}
          speed={speed}
          velocity={scrollVelocity}
          text={text}
        />
      ))}
    </Flex>
  );
};

interface MarqueeItemProps {
  speed: MotionValue<number>;
  velocity: MotionValue<number>;
  text: string;
}

const MarqueeItem = ({ speed, velocity, text }: MarqueeItemProps) => {
  const itemRef = useRef<HTMLHeadingElement>(null);
  const rectRef = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const { width, height } = useWindowSize();
  const x = useRef(0);

  const directionFactor = useRef(1);

  const setX = useCallback(() => {
    if (!itemRef.current || !rectRef.current) return;

    const xPercentage = (x.current / rectRef.current.width) * 100;
    if (xPercentage < -100) x.current = 0;
    if (xPercentage > 0) x.current = -rectRef.current.width;

    itemRef.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`;
  }, []);

  useAnimationFrame((_, delta) => {
    if (velocity.get() < 0) {
      directionFactor.current = -1;
    } else if (velocity.get() > 0) {
      directionFactor.current = 1;
    }

    const moveBy = 1 * speed.get() * (delta / 1000) * directionFactor.current;

    x.current -= moveBy;

    setX();
  });

  useEffect(() => {
    if (!itemRef.current) return;

    rectRef.current = itemRef.current.getBoundingClientRect();
  }, [width, height]);

  return (
    <Heading size="h1" ref={itemRef}>
      {text}
    </Heading>
  );
};

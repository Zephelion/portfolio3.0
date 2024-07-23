import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ProjectPageTransitionProps {
  children: ReactNode;
}

const COLUMNS = 4;

export const ProjectPageTransition = ({
  children,
}: ProjectPageTransitionProps) => {
  const anim = (variants: any, custom: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  const expand = {
    initial: { top: 0 },
    enter: (i: number) => ({
      top: "100%",
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (i: number) => ({
      height: "100%",
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <Box>
      <Flex
        height="100vh"
        width="100vw"
        position="fixed"
        top="0"
        left="0"
        pointerEvents="none"
        zIndex="loader"
      >
        {Array.from({ length: COLUMNS }).map((_, i) => (
          <motion.div
            key={i}
            {...anim(expand, i)}
            style={{
              position: "relative",
              height: "100%",
              width: `${100 / COLUMNS}%`,
              background: "black",
            }}
          />
        ))}
      </Flex>
      {children}
    </Box>
  );
};

import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { anim } from "@/utils";

// https://blog.olivierlarose.com/articles/nextjs-page-transition-guide
interface ProjectPageTransitionProps {
  children: ReactNode;
}

export const ProjectPageTransition = ({
  children,
}: ProjectPageTransitionProps) => {
  const COLUMNS = useBreakpointValue({ base: 8, md: 12 }) ?? 12; // Default to 12 columns

  const expand = {
    initial: {
      top: 0,
    },

    enter: (i: number) => ({
      top: "100vh",

      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
      transitionEnd: { height: "0", top: "0" },
    }),

    exit: (i: number) => ({
      height: "100vh",

      transition: {
        duration: 0.4,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
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

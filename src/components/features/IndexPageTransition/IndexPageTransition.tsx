import { Box, chakra } from "@chakra-ui/react";
import { ReactNode } from "react";
import { MotionFlex } from "../MotionBox";
import { useRouter } from "next/router";
import { anim } from "@/utils";
import { rem } from "polished";

// https://blog.olivierlarose.com/articles/nextjs-page-transition-guide
interface ProjectPageTransitionProps {
  children: ReactNode;
}

type GenericType = {
  [key: string]: string;
};

const routes: GenericType = {
  "plantswap-identifier": "PlantSwap",
  syncmusic: "SyncMusic",
  rijksmusuem: "RijksMuseum",
};

const backgrounds: GenericType = {
  "plantswap-identifier": "plantswap",
  syncmusic: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
  rijksmusuem: "black",
};

export const IndexPageTransition = ({
  children,
}: ProjectPageTransitionProps) => {
  const router = useRouter();

  const expand = {
    initial: {
      top: "100vh",
    },

    exit: {
      top: "0",

      transition: {
        duration: 0.75,
        delay: 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const currentBackground = backgrounds[router.query.slug as string];

  return (
    <Box>
      <MotionFlex
        height="100vh"
        width="100vw"
        position="fixed"
        top="100vh"
        justifyContent="center"
        alignItems="center"
        left="0"
        pointerEvents="none"
        background={currentBackground}
        zIndex="loader"
        {...anim(expand)}
      >
        <StyledText>{routes[router.query.slug as string]}</StyledText>
      </MotionFlex>
      {children}
    </Box>
  );
};

const StyledText = chakra("span", {
  baseStyle: {
    fontSize: `clamp(${rem(32)}, 10vw, ${rem(304)})`,
    fontWeight: "thin",
    letterSpacing: "1px",
    textTransform: "capitalize",
  },
});

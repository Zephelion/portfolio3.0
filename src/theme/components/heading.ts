import { ComponentStyleConfig } from "@chakra-ui/react";
import { rem } from "polished";

export const Heading: ComponentStyleConfig = {
  baseStyle: {
    lineHeight: "compact",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  sizes: {
    h1: {
      display: "inline-block",
      w: "max-content",
      color: "black",
      pr: { base: "space-24", md: "space-48" },
      fontSize: `clamp(${rem(64)}, 20vw, ${rem(304)})`,
      lineHeight: "compact !important",
      whiteSpace: "nowrap",
      willChange: "transform",
    },
    h2: {
      fontSize: `clamp(${rem(64)}, 20vw, ${rem(304)})`,
      lineHeight: "compact",
      fontWeight: "bold",
    },
    h3: {
      fontSize: `clamp(32px, 18vw, 128px)`,
      fontWeight: "bold",
    },
    h4: {
      fontSize: `clamp(24px, 18vw, 96px)`,
      fontWeight: "bold",
    },
    h5: {
      fontSize: `clamp(20px, 18vw, 80px)`,
      fontWeight: "bold",
    },
    h6: {
      fontSize: `clamp(16px, 18vw, 64px)`,
      fontWeight: "bold",
    },
  },
};

import { ComponentStyleConfig } from "@chakra-ui/react";
import { rem } from "polished";

export const Text: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    paragraph: {
      fontWeight: "normal",
      fontSize: `clamp(${rem(18)}, 4vw, ${rem(40)})`,
      lineHeight: "base",
      letterSpacing: "normal",
    },
    label: {
      fontWeight: "normal",
      textTransform: "uppercase",
      fontSize: "sm",
    },
  },
};

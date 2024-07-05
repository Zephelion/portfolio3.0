import { ComponentStyleConfig } from "@chakra-ui/react";
import { rem } from "polished";

export const Text: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    paragraph: {
      fontWeight: "thin",
      fontSize: `clamp(${rem(18)}, 4vw, ${rem(40)})`,
      lineHeight: "base",
      letterSpacing: "normal",
    },
    label: {
      fontWeight: "thin",
      textTransform: "uppercase",
      fontSize: "sm",
    },
  },
};

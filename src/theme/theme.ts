import { sizes, breakpoints, space } from "@/theme";
import { extendTheme } from "@chakra-ui/react";

const themeValues = {
  sizes,
  breakpoints,
  space,
};

export const theme = extendTheme(themeValues);

type CustomTheme = typeof themeValues;

export type { CustomTheme };

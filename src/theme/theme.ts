import { sizes, breakpoints, space } from "@/theme";
import { fonts } from "./typography";
import { extendTheme } from "@chakra-ui/react";

const themeValues = {
  sizes,
  breakpoints,
  space,
  fonts,
};

export const theme = extendTheme(themeValues);

type CustomTheme = typeof themeValues;

export type { CustomTheme };

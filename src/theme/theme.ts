import { sizes, breakpoints, space, zIndices, colors } from "@/theme";
import { fonts, fontSizes, fontWeights, lineHeights } from "./typography";
import { extendTheme } from "@chakra-ui/react";
import * as CustomComponents from "./components";

const components = {
  ...CustomComponents,
};

const themeValues = {
  components,
  sizes,
  breakpoints,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  zIndices,
  colors,
};
export const theme = extendTheme(themeValues);

type CustomTheme = typeof themeValues;

export type { CustomTheme };

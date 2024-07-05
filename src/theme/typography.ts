import { ChakraTheme } from "@chakra-ui/react";
import localFont from "next/font/local";

export const humane = localFont({
  src: [
    {
      path: "../../public/fonts/Humane-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Humane-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Humane-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Humane-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Humane-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Humane-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Humane-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const fonts: ChakraTheme["fonts"] = {
  body: `raleway, sans-serif`,
  heading: `${humane.style.fontFamily}, sans-serif`,
  mono: `"Humane", monospace`,
};

export const fontSizes: ChakraTheme["fontSizes"] = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.625rem",
  "3xl": "1.875rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "3.75rem",
  "8xl": "4.375rem",
  "9xl": "5rem",
};

export const fontWeights: ChakraTheme["fontWeights"] = {
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const lineHeights: ChakraTheme["lineHeights"] = {
  normal: "normal",
  compact: "0.9",
  none: "1",
  shortest: "1.125",
  shorter: "1.25",
  short: "1.375",
  base: "1.5",
  tall: "1.625",
  taller: "2",
};

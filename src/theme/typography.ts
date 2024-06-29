import { ChakraTheme } from "@chakra-ui/react";
import localFont from "next/font/local";

export const humane = localFont({
  src: [
    {
      path: "../../public/fonts/Humane-ExtraLight.otf",
      weight: "300",
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
    {
      path: "../../public/fonts/Humane-Thin.otf",
      weight: "300",
      style: "normal",
    },
  ],
});

export const fonts: ChakraTheme["fonts"] = {
  body: `${humane.style.fontFamily}, sans-serif`,
  heading: `${humane.style.fontFamily}, sans-serif`,
  mono: `"Humane", monospace`,
};

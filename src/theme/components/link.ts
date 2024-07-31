import { ComponentStyleConfig } from "@chakra-ui/react";

export const Link: ComponentStyleConfig = {
  baseStyle: {
    position: "relative",
    _after: {
      content: "''",
      position: "absolute",
      left: 0,
      bottom: 0,
      w: "0%",
      h: "1px",
      bg: "black",
      transition: "width 0.3s",
    },
    _hover: {
      textDecoration: "none",
      _after: {
        w: "100%",
      },
    },
  },
};

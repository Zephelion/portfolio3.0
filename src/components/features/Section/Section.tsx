import { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";

type SpacingKey =
  | "none"
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge";

interface SectionProps {
  children: ReactNode;
  spacingTop?: SpacingKey;
  spacingBottom?: SpacingKey;
  isFullScreen?: boolean;
}

const spacingMap = {
  none: "0",
  extraSmall: { base: "space-34", md: "space-96" },
  small: { base: "space-64", md: "space-104" },
  medium: { base: "space-72", md: "space-120" },
  large: { base: "space-104", md: "space-168" },
  extraLarge: { base: "space-188", md: "space-232" },
};

export const Section = ({
  children,
  spacingTop,
  spacingBottom,
  isFullScreen,
}: SectionProps) => {
  return (
    <Box
      as="section"
      position="relative"
      mt={spacingMap[spacingTop || "none"]}
      mb={spacingMap[spacingBottom || "none"]}
    >
      {isFullScreen ? <>{children}</> : <Container>{children}</Container>}
    </Box>
  );
};

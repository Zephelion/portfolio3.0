import { Marquee, Section, Clock } from "@/components/features";
import { Box, Container } from "@chakra-ui/react";
import { StyledText } from "../Clock";

export const Hero = () => {
  return (
    <Section
      height={{ base: "calc(100vh - 112px)", md: "calc(100vh - 160px)" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      spacingBottom="large"
      isFullScreen
    >
      <Box marginTop="space-56">
        <Marquee text="Frontend developer" baseVelocity={-150} />
        <Marquee text="Frontend developer" baseVelocity={150} />
      </Box>
      <Container display="flex" justifyContent="space-between">
        <Clock />
        {/* TODO MAKE THIS DYNAMIC */}
        <StyledText as="span">open to work</StyledText>
      </Container>
    </Section>
  );
};

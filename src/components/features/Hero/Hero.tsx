import { Marquee, Section, Clock, Availability } from "@/components/features";
import { Box, Container } from "@chakra-ui/react";

interface HeroProps {
  data: {
    marquee: { text: string; baseVelocity: number }[];
    availability: boolean;
  };
}

export const Hero = ({ data }: HeroProps) => {
  const { marquee, availability } = data;

  return (
    <Section
      height={{ base: "calc(100dvh - 112px)", md: "calc(100vh - 160px)" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      spacingBottom="large"
      isFullScreen
    >
      <Box marginTop="space-56">
        {marquee.map((item, index) => (
          <Marquee
            key={index}
            text={item.text}
            baseVelocity={item.baseVelocity}
          />
        ))}
      </Box>
      <Container display="flex" justifyContent="space-between">
        <Clock />
        <Availability status={availability} />
      </Container>
    </Section>
  );
};

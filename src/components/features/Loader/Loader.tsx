import { Section } from "@/components/features";
import { chakra, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { rem } from "polished";

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);

          // Enable scrolling
          document.body.style.overflow = "auto";
          setTimeout(() => setShouldAnimate(true), 2000); // Wait for 2s before animating out
          return 100;
        }
        return prevProgress + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section
      height="100vh"
      width="100vw"
      bg="black"
      position="fixed"
      top="0"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      transform={shouldAnimate ? "translateY(-100vh)" : "translateY(0)"}
      transition="transform 1s cubic-bezier(0.4, 0.0, 0.2, 1)"
      zIndex={10}
    >
      <StyledText>
        This loading screen actually serves no purpose it&apos;s for the
        &quot;aesthetics&quot;
      </StyledText>
      <Heading as="span" color="white" fontSize="9xl">
        {progress}%
      </Heading>
    </Section>
  );
};

const StyledText = chakra(Text, {
  baseStyle: {
    fontFamily: "Humane",
    fontWeight: "bold",
    color: "white",
    fontSize: `clamp(${rem(48)}, 5vw, ${rem(70)})`,
  },
});

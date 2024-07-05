import { Section } from "@/components/features";
import { chakra, Flex, Heading, Text } from "@chakra-ui/react";
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
          setTimeout(() => setShouldAnimate(true), 1500); // Wait for 1.5s before animating out
          return 100;
        }
        return prevProgress + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section
      height="100dvh"
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
      <Flex direction="column">
        <Heading
          as="span"
          fontWeight="semibold"
          color="white"
          fontSize={`clamp(${rem(48)}, 5vw, ${rem(70)})`}
        >
          This loading screen actually serves no purpose it&apos;s for the
          &quot;aesthetics&quot;
        </Heading>
        <Heading as="span" color="white" fontSize="9xl">
          {progress}%
        </Heading>
      </Flex>
    </Section>
  );
};

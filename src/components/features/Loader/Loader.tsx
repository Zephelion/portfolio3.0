import { Section } from "@/components/features";
import { Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);

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
      position="absolute"
      top="0"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      transform={shouldAnimate ? "translateY(-100vh)" : "translateY(0)"}
      transition="transform 1s cubic-bezier(0.4, 0.0, 0.2, 1)"
      zIndex={10}
    >
      <Text color="white" fontFamily="Humane" fontWeight="bold" fontSize="8xl">
        This loading screen actually serves no purpose it&apos;s for the
        &quot;aesthetics&quot;
      </Text>
      <Heading as="span" color="white" fontSize="9xl">
        {progress}%
      </Heading>
    </Section>
  );
};

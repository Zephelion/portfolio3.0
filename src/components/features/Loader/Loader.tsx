import { Section } from "@/components/features";
import { Flex, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { rem } from "polished";
import { getRandomElement } from "@/utils";

interface Quote {
  text: string;
  weight: number;
}

const quotes: Quote[] = [
  {
    text: 'This loading screen actually serves no purpose it\'s for the "aesthetics"',
    weight: 10,
  },
  {
    text: "My friends occasionally refer to as me as Optimus Prime",
    weight: 2,
  },
  { text: "Favorite artist is Tyler the Creator", weight: 1 },
  {
    text: "I admire people who are able to express themselves through their crafts",
    weight: 1,
  },
  { text: "20th of june is a special day", weight: 1 },
  { text: "Clutch god", weight: 2 },
  { text: "I have a hard time asking for help", weight: 0.05 },
  {
    text: "This portfolio is a work in progress, I'm always learning",
    weight: 2,
  },
  {
    text: "If you were to describe me in a few words it would be, Bijdehand, Eigenwijs and Sarcastisch",
    weight: 2,
  },
];

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Disable scrolling
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.height = "100%";

    // Set random quote
    setQuote(getRandomElement(quotes));

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            // Enable scrolling
            document.body.style.position = "relative";
            setShouldAnimate(true);
          }, 1500); // Wait for 5s before animating out
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
      transition="transform 1s cubic-bezier(0.76, 0, 0.24, 1)"
      zIndex="loader"
    >
      <Flex direction="column">
        <Heading
          as="span"
          fontWeight="semibold"
          color="white"
          fontSize={`clamp(${rem(48)}, 5vw, ${rem(70)})`}
        >
          {quote}
          {/* This loading screen actually serves no purpose it&apos;s for the
          &quot;aesthetics&quot; */}
        </Heading>
        <Heading as="span" color="white" fontSize="9xl">
          {progress}%
        </Heading>
      </Flex>
    </Section>
  );
};

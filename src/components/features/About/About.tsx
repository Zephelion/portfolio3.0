import { Box, Text } from "@chakra-ui/react";
import { Section } from "@/components/features";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { splitContentIntoLines } from "@/utils";

interface AboutProps {
  data: {
    content: string;
  };
}

export const About = ({ data }: AboutProps) => {
  const { content } = data;
  const paragraphRef = useRef(null);
  const isInView = useInView(paragraphRef, { once: true, amount: 1 });

  const lines = splitContentIntoLines(content, 50);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <Section spacingTop="large">
      <Box ref={paragraphRef}>
        {lines.map((line, index) => (
          <Box key={index} overflow="hidden">
            <Text
              as="span"
              variant="paragraph"
              display="block"
              position="relative"
              transform={`translateY(${isInView ? 0 : 50}px)`}
              //In order to make it staggered, we need to add a delay to the transition based on the index
              transition={`transform 0.5s ease ${index * 0.1}s`}
            >
              {line}
            </Text>
          </Box>
        ))}
      </Box>
    </Section>
  );
};

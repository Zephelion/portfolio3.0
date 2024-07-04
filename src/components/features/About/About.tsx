import { Box, Text } from "@chakra-ui/react";
import { Section } from "@/components/features";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface AboutProps {
  data: {
    content: string[];
  };
}

export const About = ({ data }: AboutProps) => {
  const { content } = data;
  const paragraphRef = useRef(null);
  const isInView = useInView(paragraphRef, { once: true });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <Section spacingTop="large">
      <Box ref={paragraphRef}>
        {content.map((line, index) => (
          <Box key={index} overflow="hidden">
            <Text
              as="span"
              variant="paragraph"
              display="block"
              position="relative"
            >
              {line}
            </Text>
            {/* {line} */}
          </Box>
        ))}
      </Box>
    </Section>
  );
};

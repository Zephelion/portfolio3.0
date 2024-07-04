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
      <Text ref={paragraphRef} variant="paragraph" maxWidth="40ch">
        {content.map((line, index) => (
          <Box as="span" key={index} overflow="hidden" bg="red">
            <Box as="span">{line}</Box>
            {/* {line} */}
          </Box>
        ))}
      </Text>
    </Section>
  );
};

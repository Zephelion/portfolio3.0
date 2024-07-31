import { Text, useBreakpointValue } from "@chakra-ui/react";
import { Section, StaggeredText } from "@/components/features";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { splitContentIntoLines } from "@/utils";

interface AboutProps {
  data: {
    content: string;
  };
}

export const About = ({ data }: AboutProps) => {
  const { content } = data;
  const paragraphRef = useRef(null);
  const isInView = useInView(paragraphRef, { once: true, amount: 0.5 });
  const isMobile = useBreakpointValue({ base: 25, md: 50 });

  const lines = splitContentIntoLines(content, isMobile);

  return (
    <Section spacingBottom="large">
      <Text ref={paragraphRef}>
        {lines.map((line, index) => (
          <StaggeredText
            key={index}
            line={line}
            isInView={isInView}
            index={index}
          />
        ))}
      </Text>
    </Section>
  );
};

import { Container, useBreakpointValue } from "@chakra-ui/react";
import { Section, StaggeredParagraph } from "@/components/features";
import { splitContentIntoLines } from "@/utils";

interface AboutProps {
  data: {
    content: string[];
  };
}

export const About = ({ data }: AboutProps) => {
  const { content } = data;
  const isMobile = useBreakpointValue({ base: 25, md: 50 });

  return (
    <Section isFullScreen>
      <Container display="flex" flexDir="column" gap="space-30">
        {content.map((paragraph, paragraphIndex) => {
          const lines = splitContentIntoLines(paragraph, isMobile);
          return (
            <StaggeredParagraph
              key={paragraphIndex}
              lines={lines}
              alignSelf={
                paragraphIndex === 1 ? { base: "", md: "flex-end" } : ""
              }
            />
          );
        })}
      </Container>
    </Section>
  );
};

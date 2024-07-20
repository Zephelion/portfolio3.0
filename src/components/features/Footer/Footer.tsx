import { Box, Container } from "@chakra-ui/react";
import { StaggeredText } from "@/components/features";
import { splitContentIntoLines } from "@/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface FooterProps {
  data: {
    text: string;
  };
}

export const Footer = ({ data }: FooterProps) => {
  const { text } = data;
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();
  const isInView = useInView(footerRef, { once: true, amount: 0.5 });

  const lines = splitContentIntoLines(text, 40);

  return (
    <Box as="footer" ref={footerRef}>
      <Container>
        <Box>
          {lines.map((line, index) => (
            <StaggeredText
              key={index}
              line={line}
              isInView={isInView}
              index={index}
            />
          ))}
        </Box>
      </Container>
      <Container>©{currentYear} Russell Numo</Container>
    </Box>
  );
};

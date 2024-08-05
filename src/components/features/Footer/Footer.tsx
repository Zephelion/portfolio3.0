import { Box, Container, Flex, Link, Heading, chakra } from "@chakra-ui/react";
import { StaggeredLine } from "@/components/features";
import { splitContentIntoLines } from "@/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { LinkProps } from "@/types";

interface FooterProps {
  data: {
    text: string;
    contactInfo: ContactInfo[];
  };
}

interface ContactInfo {
  heading: string;
  info: string[] | LinkProps[];
}

export const Footer = ({ data }: FooterProps) => {
  const { text, contactInfo } = data;
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();
  const isInView = useInView(footerRef, { once: true, amount: 0.5 });

  const lines = splitContentIntoLines(text, 40);

  return (
    <Box as="footer" ref={footerRef}>
      <Container
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        justifyContent={{ md: "space-between" }}
        mb="space-80"
      >
        <Box mb="space-40">
          {lines.map((line, index) => (
            <StaggeredLine
              key={index}
              line={line}
              isInView={isInView}
              index={index}
            />
          ))}
        </Box>
        <Flex gap="space-40" justifyContent={{ base: "space-between" }}>
          {contactInfo.map((info, index) => (
            <Box key={index}>
              <Heading>{info.heading}</Heading>
              <Flex as="nav" flexDir="column">
                {info.info.map((item, index) => (
                  <StyledLink
                    key={index}
                    href={typeof item === "string" ? "" : item.href}
                    target="_blank"
                    fontWeight={200}
                  >
                    {typeof item === "string" ? item : item.title}
                  </StyledLink>
                ))}
              </Flex>
            </Box>
          ))}
        </Flex>
      </Container>
      {/* Bottom part of the footer */}
      <Container display="flex" justifyContent="space-between">
        <StyledFooterLabel>©{currentYear} Russell Numo</StyledFooterLabel>
        <StyledFooterLabel>Design by me</StyledFooterLabel>
      </Container>
    </Box>
  );
};

const StyledFooterLabel = chakra("span", {
  baseStyle: {
    textTransform: "uppercase",
  },
});

const StyledLink = chakra(Link, {
  baseStyle: {
    fontFamily: "system-ui",
  },
});

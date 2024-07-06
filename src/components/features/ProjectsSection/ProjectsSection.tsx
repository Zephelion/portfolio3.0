import { Section } from "@/components/features";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import {
  useInView,
  useTransform,
  useScroll,
  useMotionTemplate,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

const TIMING = 0.5;
const STEP = 40;

interface ProjectsSectionProps {
  data: {
    projects: { title: string }[];
  };
}

export const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const containerRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [dynamicTranslateY, setDynamicTranslateY] = useState(0);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  // Interpolate scroll progress to a range of color values (0 to 255 for simplicity)
  const backgroundColorValue = useTransform(scrollYProgress, [0, 1], [255, 0]);

  // Convert numeric value to a hex code
  const backgroundColor = useMotionTemplate`rgb(${backgroundColorValue}, ${backgroundColorValue}, ${backgroundColorValue})`;

  useEffect(() => {
    if (headingRef.current) {
      setDynamicTranslateY(headingRef.current.clientHeight);
    }
  }, [setDynamicTranslateY]);

  return (
    <Section ref={sectionRef} position="relative" height="400vh" isFullScreen>
      <Container
        ref={containerRef}
        position="sticky"
        top="0"
        minH="100vh"
        display="flex"
        alignItems="center"
      >
        <Heading ref={headingRef} size="h2" overflow="hidden">
          <Text
            as="span"
            display="block"
            position="relative"
            transform={`translateY(${isInView ? 0 : dynamicTranslateY}px)`}
            //In order to make it staggered, we need to add a delay to the transition based on the index
            transition={`transform 0.5s ease ${TIMING}s`}
          >
            projects
          </Text>
        </Heading>
        <Box>
          {data.projects.map((project, index) => (
            <Box
              key={index}
              ref={cardRef}
              bg={backgroundColor.get()}
              border="1px solid"
              borderColor="black"
              height="190px" // hardcoded atm but can be changed
              width="337px" // hardcoded atm but can be changed
              position="absolute"
              zIndex={index}
              transform={
                isInView
                  ? `translate(${index * STEP}px, ${index * STEP}px)`
                  : "translate(0, 0)"
              }
              transition={`transform 0.5s ease ${isInView ? index * 0.1 : 0}s`}
            />
          ))}
        </Box>
      </Container>
    </Section>
  );
};

import { Section, ChakraNextLink } from "@/components/features";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import {
  useInView,
  useTransform,
  useScroll,
  useMotionTemplate,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

const TIMING = 0.5;
const STEP_COUNT = 3;
const STEP = 20;

interface ProjectsSectionProps {
  data: {
    projects: { title: string; href: string }[];
  };
}

export const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const containerRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  // const cardRef = useRef(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [dynamicTranslateY, setDynamicTranslateY] = useState(0);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  // Interpolate scroll progress to a range of color values (0 to 255 for simplicity)
  // const backgroundColorValue = useTransform(scrollYProgress, [0, 1], [255, 0]);

  // Convert numeric value to a hex code
  // const backgroundColor = useMotionTemplate`rgb(${backgroundColorValue}, ${backgroundColorValue}, ${backgroundColorValue})`;

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
      </Container>
      <Container
        display="flex"
        flexDir="column"
        gap="space-44"
        position="relative"
        zIndex="9"
      >
        {[...data.projects, ...data.projects, ...data.projects].map(
          (project, index) => (
            <ChakraNextLink
              // ref={cardRef}
              key={index}
              display="block"
              position="relative"
              href={project.href}
              height="190px" // hardcoded atm but can be changed
              width="337px" // hardcoded atm but can be changed
              padding="unset"
              alignSelf={
                index % 3 === 2
                  ? "center"
                  : index % 2 === 0
                  ? "flex-start"
                  : "flex-end"
              }
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {Array.from({ length: STEP_COUNT }, (_, i) => (
                <Box
                  key={i}
                  height="100%"
                  width="100%"
                  position="absolute"
                  border="1px solid"
                  borderColor="black"
                  bg="white"
                  zIndex={i}
                  transform={
                    activeIndex === index
                      ? `translate(${
                          index % 2 !== 0 ? -i * STEP : i * STEP
                        }px, ${i * STEP}px)`
                      : "none"
                  }
                  transition={`transform 0.5s ease ${TIMING}s`}
                >
                  {project.title}
                </Box>
              ))}
            </ChakraNextLink>
          )
        )}
      </Container>
    </Section>
  );
};

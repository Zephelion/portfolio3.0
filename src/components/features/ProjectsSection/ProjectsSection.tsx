import { Section, ChakraNextLink } from "@/components/features";
import { Container, Heading, Text } from "@chakra-ui/react";
import { useInView, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Project } from "@/types";

const TIMING = 0.5;
const STEP_COUNT = 3;
const STEP = 20;

interface ProjectsSectionProps {
  data: {
    projects: Project[];
  };
}

export const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const containerRef = useRef(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [dynamicTranslateY, setDynamicTranslateY] = useState(0);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number, className: string) => {
    setActiveIndex(index);
    document.body.classList.add(className);
  };

  const handleMouseLeave = (className: string) => {
    setActiveIndex(null);
    document.body.classList.remove(
      className || "plantswap",
      "rijksmusuem",
      "syncmusic"
    );
  };

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
              key={index}
              display="block"
              position="relative"
              href={project.href}
              aspectRatio="16/9"
              height={{ base: "95px", md: "190px" }} // hardcoded atm but can be changed
              width={{ base: "168.5px", md: "337px" }} // hardcoded atm but can be changed
              padding="unset"
              alignSelf={
                index % 3 === 2
                  ? "center"
                  : index % 2 === 0
                  ? "flex-start"
                  : "flex-end"
              }
              onMouseEnter={() => handleMouseEnter(index, project.className)}
              onMouseLeave={() => handleMouseLeave(project.className)}
            >
              {Array.from({ length: STEP_COUNT }, (_, i) => (
                <Image
                  key={i}
                  src={project.coverImage}
                  alt="project"
                  layout="fill"
                  objectFit="cover"
                  style={{
                    transform:
                      activeIndex === index
                        ? `translate(${
                            index % 2 !== 0 ? -i * STEP : i * STEP
                          }px, ${i * STEP}px)`
                        : "none",
                    transition: `transform 0.5s ease ${TIMING}s`,
                    opacity: 1 - i * 0.2,
                  }}
                />
              ))}
            </ChakraNextLink>
          )
        )}
      </Container>
    </Section>
  );
};

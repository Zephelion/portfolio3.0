import { Section, ParallaxCard } from "@/components/features";
import { Container, Heading, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Project } from "@/types";

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
            transition={`transform 0.5s ease 0.5s`}
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
        zIndex="projectSection"
      >
        {[...data.projects, ...data.projects, ...data.projects].map(
          (project, index) => (
            <ParallaxCard
              key={index}
              href={project.href}
              index={index}
              coverImage={project.coverImage}
              className={project.className}
            />
          )
        )}
      </Container>
    </Section>
  );
};

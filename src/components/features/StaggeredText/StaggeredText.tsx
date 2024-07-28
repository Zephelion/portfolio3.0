import { Box, Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

interface StaggeredTextProps {
  line: string;
  isInView: boolean;
  index: number;
}

const TIMING = 0.1;

export const StaggeredText = ({
  line,
  isInView,
  index,
}: StaggeredTextProps) => {
  const lineRef = useRef<HTMLSpanElement>(null);

  const [dynamicTranslateY, setDynamicTranslateY] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      setDynamicTranslateY(lineRef.current.clientHeight);
    }
  }, [setDynamicTranslateY]);

  return (
    <Box as="span" display="block" overflow="hidden">
      <Text
        as="span"
        ref={lineRef}
        variant="paragraph"
        display="block"
        width="auto"
        position="relative"
        transform={`translateY(${isInView ? 0 : dynamicTranslateY}px)`}
        //In order to make it staggered, we need to add a delay to the transition based on the index
        transition={`transform 0.5s ease ${index * TIMING}s`}
      >
        {line}
      </Text>
    </Box>
  );
};

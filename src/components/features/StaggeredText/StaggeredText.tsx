import { Box, Text } from "@chakra-ui/react";

interface StaggeredTextProps {
  line: string;
  isInView: boolean;
  index: number;
}

const TIMING = 0.1;
const TRANSLATE_Y = 50;

export const StaggeredText = ({
  line,
  isInView,
  index,
}: StaggeredTextProps) => {
  return (
    <Box overflow="hidden">
      <Text
        as="span"
        variant="paragraph"
        display="block"
        position="relative"
        transform={`translateY(${isInView ? 0 : TRANSLATE_Y}px)`}
        //In order to make it staggered, we need to add a delay to the transition based on the index
        transition={`transform 0.5s ease ${index * TIMING}s`}
      >
        {line}
      </Text>
    </Box>
  );
};

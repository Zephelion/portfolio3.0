import { Text, BoxProps } from "@chakra-ui/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { StaggeredLine } from "@/components/features";

interface StaggeredParagraphProps extends BoxProps {
  lines: string[];
}

export const StaggeredParagraph = ({
  lines,
  ...props
}: StaggeredParagraphProps) => {
  const paragraphRef = useRef(null);
  const isInView = useInView(paragraphRef, { once: true, amount: 0.8 });

  return (
    <Text ref={paragraphRef} {...props}>
      {lines.map((line, lineIndex) => (
        <StaggeredLine
          key={lineIndex}
          line={line}
          index={lineIndex}
          isInView={isInView}
        />
      ))}
    </Text>
  );
};

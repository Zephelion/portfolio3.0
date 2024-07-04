import { Text } from "@chakra-ui/react";
import { Section } from "@/components/features";

interface AboutProps {
  data: {
    content: string;
  };
}

export const About = ({ data }: AboutProps) => {
  const { content } = data;
  return (
    <Section spacingTop="large">
      <Text variant="paragraph" width="40ch">
        {content}
      </Text>
    </Section>
  );
};

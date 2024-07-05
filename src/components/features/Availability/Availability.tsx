import { Box, Circle, Text } from "@chakra-ui/react";

interface AvailabilityProps {
  status: boolean;
}

export const Availability = ({ status }: AvailabilityProps) => {
  const text = status ? "Open to work" : "Unavailable";
  const color = status ? "green.500" : "orange.500";

  return (
    <Box display="flex" alignItems="center">
      <Circle size="8px" bg={color} marginRight="2" />
      <Text as="span" variant="label">
        {text}
      </Text>
    </Box>
  );
};

import { Flex, chakra, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";

const LOCAL_TIMEZONE = "Europe/Amsterdam";

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Set hasMounted to true to indicate the component has mounted
    setHasMounted(true);

    const interval = setInterval(() => {
      setTime(toZonedTime(new Date(), LOCAL_TIMEZONE));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Only format time if the component has mounted
  const formattedTime = hasMounted ? format(time, "HH:mm:ss") : "";

  return (
    <Flex whiteSpace="break-spaces">
      <Text variant="label"> based in amsterdam </Text>
      <Text
        variant="label"
        _before={{
          content: '" • "',
        }}
      >
        {formattedTime}
      </Text>
    </Flex>
  );
};

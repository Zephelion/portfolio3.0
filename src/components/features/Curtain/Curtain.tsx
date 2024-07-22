import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CurtainProps {
  children: ReactNode;
}

const amount = 4;

export const Curtain = ({ children }: CurtainProps) => {
  return (
    <Flex position="fixed" top="0" left="0">
      {Array.from({ length: amount }, (_, i) => (
        <Flex key={i} w={`calc(100% / ${amount})`} h="100%" bg="black" />
      ))}
      {children}
    </Flex>
  );
};

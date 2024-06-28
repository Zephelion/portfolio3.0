import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header, Footer } from "@/components/features";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Flex flexDir="column">
      <Header />
      <Box as="main" display="block">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

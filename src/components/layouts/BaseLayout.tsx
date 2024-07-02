import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header, Footer } from "@/components/features";

interface BaseLayoutProps {
  children: ReactNode;
}

const headerData = {
  title: "Russell Numo",
  links: [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ],
  socials: [
    { title: "GitHub", href: "https://github.com/Zephelion" },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/russell-numo-a37810231/",
    },
    { title: "Instagram", href: "https://www.instagram.com/russl_on/" },
  ],
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Flex flexDir="column">
      <Header data={headerData} />
      <Box as="main" display="block" h="400vh">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

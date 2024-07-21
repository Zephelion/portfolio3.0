import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header, Footer } from "@/components/features";
import { Analytics } from "@vercel/analytics/react";
import { socials } from "@/data/socials";

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
  socials,
};

const footerData = {
  text: "Thanks for visiting! if you are curious to know more about me, feel free to send me a message on my provided socials.",
  contactInfo: [
    { heading: "Socials", info: socials },
    {
      heading: "Contact",
      info: [
        {
          title: "russellnumo@outlook.com",
          href: "mailto:russellnumo@outlook.com",
        },
        {
          title: "+31 6 36 09 69 43",
          href: "tel:+31636096943",
        },
      ],
    },
  ],
};

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Flex flexDir="column">
      <Header data={headerData} />
      <Box as="main" display="block" mt={{ base: "112px", md: "160px" }}>
        {children}
        <Analytics />
      </Box>
      <Footer data={footerData} />
    </Flex>
  );
};

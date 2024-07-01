import { Flex, Link, Text, chakra } from "@chakra-ui/react";
import { LinkProps } from "@/types/shared";

interface NavigationProps {
  links: LinkProps[];
}

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <Flex as="nav" direction="column">
      {links.map((link, index) => (
        <StyledLink key={index} href={link.href}>
          <Text as="span" marginRight="space-16" fontSize="sm">
            {String(index + 1).padStart(2, "0")}
          </Text>
          {link.title}
        </StyledLink>
      ))}
    </Flex>
  );
};

const StyledLink = chakra(Link, {
  baseStyle: {
    display: "flex",
    fontSize: "4xl",
    fontWeight: 300,
    textTransform: "capitalize",
    marginBottom: "space-36",
  },
});

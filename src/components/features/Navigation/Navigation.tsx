import { Flex, Link, Text, chakra } from "@chakra-ui/react";
import { LinkProps } from "@/types";
import { formatIndexWithZero } from "@/utils";

interface NavigationProps {
  links: LinkProps[];
}

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <Flex
      as="nav"
      direction={{ base: "column", md: "row" }}
      gap={{ base: 0, md: "space-16" }}
    >
      {links.map((link, index) => (
        <StyledLink key={index} href={link.href}>
          <Text
            as="span"
            display={{ base: "block", md: "none" }}
            marginRight="space-16"
            fontSize="sm"
          >
            {/* Prefix a number with a zero */}
            {formatIndexWithZero(index)}
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
    fontSize: { base: "4xl", md: " md" },
    fontWeight: "normal",
    textTransform: "capitalize",
    marginBottom: { base: "space-16", md: 0 },
  },
});

import {
  Box,
  Container,
  Flex,
  Button,
  Heading,
  chakra,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Navigation, MobileNavigation } from "@/components/features";
import { LinkProps } from "@/types";
interface HeaderProps {
  data: {
    title: string;
    links: LinkProps[];
    socials: LinkProps[];
  };
}

export const Header = ({ data }: HeaderProps) => {
  const { title, links, socials } = data;
  const spittedTitle = title.split(" ");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Box as="header" position="fixed" top="0" width="100%" zIndex="header">
        <Container py={{ base: "space-20", md: "space-32" }}>
          <Flex justifyContent="space-between" alignItems="center">
            {/* Logo */}
            <Flex direction="column" width="fit-content">
              {spittedTitle.map((word, index) => (
                <Heading
                  key={index}
                  as="span"
                  textTransform="uppercase"
                  fontSize={{ base: "5xl", md: "6xl" }}
                  lineHeight="none"
                  marginLeft={index !== 0 ? "space-36" : 0}
                >
                  {word}
                </Heading>
              ))}
            </Flex>
            <StyledButton onClick={onOpen}>menu</StyledButton>
            {isDesktop && <Navigation links={links} />}
          </Flex>
        </Container>
      </Box>

      {/* Modal */}
      <MobileNavigation
        isOpen={isOpen}
        onClose={onClose}
        links={links}
        socials={socials}
      />
    </>
  );
};

const StyledButton = chakra(Button, {
  baseStyle: {
    textTransform: "uppercase",
    display: { base: "block", md: "none" },
    background: "none",
    fontWeight: "normal",
    border: "1px solid",
    borderColor: "black",
    borderRadius: "unset",
    fontSize: "sm",
  },
});

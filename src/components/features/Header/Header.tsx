import {
  Box,
  Container,
  Flex,
  Button,
  Divider,
  Heading,
  chakra,
  useDisclosure,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Navigation } from "@/components/features";
import { LinkProps } from "@/types/shared";
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

  return (
    <>
      <Box as="header">
        <Container py={{ base: "space-20", md: "space-32" }}>
          <Flex justifyContent="space-between" alignItems="center">
            {/* Logo */}
            <Flex direction="column" width="fit-content">
              {spittedTitle.map((word, index) => (
                <Heading
                  key={index}
                  as="span"
                  textTransform="uppercase"
                  fontSize="5xl"
                  lineHeight="none"
                  marginLeft={index !== 0 ? "space-36" : 0}
                >
                  {word}
                </Heading>
              ))}
            </Flex>
            <StyledButton onClick={onOpen}>menu</StyledButton>
          </Flex>
        </Container>
      </Box>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <Container display="flex" justifyContent="flex-end" py="space-36">
            <StyledButton onClick={onClose}>close</StyledButton>
          </Container>
          <ModalBody>
            <Navigation links={links} />
          </ModalBody>
          <Container>
            <Divider bg="black" height="1px" />
          </Container>
          <ModalFooter display="flex" justifyContent="space-between">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                fontWeight={200}
              >
                {social.title}
              </Link>
            ))}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const StyledButton = chakra(Button, {
  baseStyle: {
    textTransform: "uppercase",
    display: { base: "block", md: "none" },
    background: "none",
    fontWeight: "light",
    border: "1px solid",
    borderColor: "black",
    borderRadius: "unset",
    fontSize: "sm",
  },
});

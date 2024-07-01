import {
  chakra,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Container,
  ModalBody,
  Divider,
  ModalFooter,
  Link,
} from "@chakra-ui/react";
import { LinkProps } from "@/types/shared";
import { Navigation } from "@/components/features";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  links: LinkProps[];
  socials: LinkProps[];
}

export const MobileNavigation = ({
  isOpen,
  onClose,
  links,
  socials,
}: MobileNavigationProps) => {
  return (
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

import { Button, ButtonProps } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";

export type ButtonLinkProps = Omit<ButtonProps, "as"> &
  LinkProps & {
    target?: string;
  };

export function ChakraNextLink({
  href,
  as,
  prefetch,
  replace,
  scroll,
  shallow,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      as={as}
      prefetch={prefetch}
      scroll={scroll}
      shallow={shallow}
      replace={replace}
      passHref
      legacyBehavior
    >
      <Button as="a" background="transparent" _hover={{}} {...props}>
        {children}
      </Button>
    </Link>
  );
}

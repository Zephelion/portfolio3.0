import { forwardRef } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";

export type ButtonLinkProps = Omit<ButtonProps, "as"> &
  LinkProps & {
    target?: string;
  };

export const ChakraNextLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    { href, as, prefetch, replace, scroll, shallow, children, ...props },
    ref
  ) => {
    return (
      <Link
        href={href}
        as={as}
        ref={ref}
        prefetch={prefetch}
        scroll={scroll}
        shallow={shallow}
        replace={replace}
        passHref
        legacyBehavior
      >
        <Button
          as="a"
          background="transparent"
          _hover={{}}
          ref={ref}
          {...props}
        >
          {children}
        </Button>
      </Link>
    );
  }
);

ChakraNextLink.displayName = "ChakraNextLink";

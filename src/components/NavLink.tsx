import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

interface NavLinkProps {
  href: string;
  children: any;
  toggleOn: boolean;
}

export const NavLink = (props: NavLinkProps): JSX.Element => {
  return (
    <NextLink href={props.href} passHref>
      <Link
        bg={
          props.toggleOn
            ? useColorModeValue("systemBrown", "systemBrown")
            : undefined
        }
        color={useColorModeValue("black", "white")}
        p={2}
        m={3}
        borderRadius="md"
      >
        {props.children}
      </Link>
    </NextLink>
  );
};

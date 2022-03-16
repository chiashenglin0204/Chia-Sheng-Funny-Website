import {
  Box,
  Center,
  color,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { DarkModeButton } from "./DarkModeButton";

import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
interface NavLinkProps {
  href: string;
  children: any;
  toggleOn: boolean;
}

const NavLink: React.FC<NavLinkProps> = (props): JSX.Element => {
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

export const NavBar = () => {
  const router = useRouter();
  return (
    <Box
      display="flex"
      position="relative"
      as="nav"
      w="100%"
      bg={useColorModeValue("#fad0f7d3", "#6a96dae8")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={10}
    >
      <Container
        display="flex"
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Center width="100%">
          <Flex align="center" mr={5}>
            <Link href="/">
              <Heading as="h1" size="md">
                Chia-Sheng Lin
              </Heading>
            </Link>
          </Flex>

          <NavLink
            href={"/playground"}
            toggleOn={router.pathname === "/playground"}
          >
            Cat-Playground
          </NavLink>

          <NavLink href={"/project"} toggleOn={router.pathname === "/project"}>
            Project
          </NavLink>
          <DarkModeButton />
        </Center>
      </Container>
    </Box>
  );
};

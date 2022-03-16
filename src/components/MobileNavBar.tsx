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
  MenuDivider,
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

interface NavigationMenuProps {
  path: string;
}

const NavigationMenu: React.FC<NavigationMenuProps> = (props): JSX.Element => {
  const router = useRouter();

  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem onClick={() => router.push("/playground")}>
          <NavLink href={"/works"} toggleOn={router.pathname === "/playground"}>
            Cat-Playground
          </NavLink>
        </MenuItem>
        <MenuItem onClick={() => router.push("/projects")}>
          <NavLink
            href={"/projects"}
            toggleOn={router.pathname === "/projects"}
          >
            Projects
          </NavLink>
        </MenuItem>
        <MenuDivider />
        <MenuItem>
          <DarkModeSwitch />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export const MobileNavBar = () => {
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

          <DarkModeButton />
        </Center>
        <Box display={{ sm: "flex", md: "none", lg: "flex" }}>
          <NavigationMenu path={router.pathname}></NavigationMenu>
        </Box>
      </Container>
    </Box>
  );
};
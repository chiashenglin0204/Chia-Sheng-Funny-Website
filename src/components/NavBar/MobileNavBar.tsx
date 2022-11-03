import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "../NavLink";
import { DarkModeButton } from "../DarkModeButton";
interface NavLinkProps {
  href: string;
  children: any;
  toggleOn: boolean;
}

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
        <MenuItem>
          <NavLink
            href={"/playground"}
            toggleOn={router.pathname === "/playground"}
          >
            Cat-Playground
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href={"/workExperience"} toggleOn={router.pathname === "/workExperience"}>
            Work Experience
          </NavLink>
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
      //position="relative"
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
        p={3}
      >
        <Box display={{ md: "none" }} ml={4}>
          <NavigationMenu path={router.pathname}></NavigationMenu>
        </Box>
        <Center width="100%">
          <Flex align="center" mr={5}>
            <Link href="/">
              <Heading as="h1" size="md">
                Chia-Sheng Lin
              </Heading>
            </Link>
          </Flex>
        </Center>
        <Flex mr={4}>
          <DarkModeButton />
        </Flex>
      </Container>
    </Box>
  );
};

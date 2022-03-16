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
import { MobileNavBar } from "./MobileNavBar";
interface NavLinkProps {
  href: string;
  children: any;
  toggleOn: boolean;
}

export const NavBar = () => {
  const router = useRouter();
  return (
    <Box display={{ md: "none" }}>
      <MobileNavBar></MobileNavBar>
    </Box>
  );
};

import {
  Box,
  Container,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const NavBar = () => {
  return (
    <Box
      display="flex"
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Link href="./" m={7}>
          Home
        </Link>
        <Link href="./playground" m={7}>
          Playground
        </Link>
        <Link href="./project" m={7}>
          Project
        </Link>
        <DarkModeSwitch />
      </Container>
    </Box>
  );
};

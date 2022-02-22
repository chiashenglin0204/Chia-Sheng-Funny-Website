import {
  Box,
  Center,
  Container,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const NavBar = () => {
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
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Center width="100%">
          <Link href="./" m={7}>
            Home
          </Link>
          <Link href="./playground" m={7}>
            Playground
          </Link>
          <Link href="./project" m={7}>
            Project
          </Link>
        </Center>
      </Container>
      <DarkModeSwitch />
    </Box>
  );
};

import {
  Link as ChakraLink,
  Text,
  Button,
  Link,
  Box,
  Image,
  Center,
  useColorModeValue,
  Stack,
  ButtonGroup,
  HStack,
  Flex,
  Container,
} from "@chakra-ui/react";
// import Image from "next/image";

import { Layout } from "../components/Layout";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SystemButton } from "../components/SystemButton";

const Index = () => {
  return (
    <Layout>
      <Text fontSize="6xl" textAlign="center">
        Hello!!
      </Text>
      <Box textAlign="center">
        <Text fontSize="3xl">I'm Chia-Sheng Lin</Text>
        <Container
          borderRadius="15px"
          borderColor={useColorModeValue("systemBrown", "systemBrown")}
          //bg={useColorModeValue("systemBrown", "systemBrown")}
        >
          <Text fontSize="3xl" textAlign="center">
            currently a 2nd year CS major Student in University of British
            Columbia
          </Text>
        </Container>
      </Box>
      <Center m={10}>
        <Image
          src="/personalPhoto.JPG"
          boxSize="200px"
          align="center"
          borderRadius="15px"
        ></Image>
      </Center>

      <Text fontSize="3xl" align="center" mb={2}>
        Follow me on:
      </Text>

      <Center>
        <Stack direction={"column"}>
          <Stack direction={["column", "row"]}>
            <Link href="https://github.com/chiashenglin0204" isExternal>
              <SystemButton rightIcon={<FaGithub />}>
                chiashenglin0204
              </SystemButton>
            </Link>
            <Link href="https://www.linkedin.com/in/chiashenglin/" isExternal>
              <SystemButton rightIcon={<FaLinkedin />}>
                Chia-Sheng Lin
              </SystemButton>
            </Link>
          </Stack>
          <Stack direction={["column", "row"]}>
            <Link href="https://www.instagram.com/chiashenglin0204/" isExternal>
              <SystemButton rightIcon={<FaInstagram />}>
                chiashenglin0204
              </SystemButton>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100005766782726"
              isExternal
            >
              <SystemButton rightIcon={<FaFacebook />}>林家陞</SystemButton>
            </Link>
          </Stack>
        </Stack>
      </Center>
    </Layout>
  );
};

export default Index;

const props = {
  text: "Chiasheng",
};

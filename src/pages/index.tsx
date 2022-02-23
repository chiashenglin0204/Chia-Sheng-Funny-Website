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
  HStack,
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

const Index = () => {
  return (
    <Layout>
      <Text fontSize="6xl" textAlign="center">
        Hello!!
      </Text>
      <Box textAlign="center">
        <Text fontSize="3xl">I'm Chia-Sheng Lin</Text>

        <Text fontSize="3xl" textAlign="center">
          currently a 2nd year CS major Student in University of British
          Columbia
        </Text>
      </Box>
      <Center m={10}>
        <Image
          src="/personalPhoto.JPG"
          width="64"
          height="64"
          align="center"
        ></Image>
      </Center>

      <Stack
        direction={["column", "row"]}
        spacing="24px"
        display="flex"
        flexDirection="column"
      >
        <HStack mt={2}>
          <Link href="https://github.com/chiashenglin0204" isExternal>
            <Button colorScheme="telegram" rightIcon={<FaGithub />}>
              chiashenglin0204
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/chiashenglin/" isExternal>
            <Button colorScheme="linkedin" rightIcon={<FaLinkedin />}>
              Chia-Sheng Lin
            </Button>
          </Link>
        </HStack>
        <HStack mt={2}>
          <Link href="https://www.instagram.com/chiashenglin0204/" isExternal>
            <Button colorScheme="cyan" rightIcon={<FaInstagram />}>
              chiashenglin0204
            </Button>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100005766782726"
            isExternal
          >
            <Button colorScheme="facebook" rightIcon={<FaFacebook />}>
              林家陞
            </Button>
          </Link>
        </HStack>
      </Stack>
    </Layout>
  );
};

export default Index;

const props = {
  text: "Chiasheng",
};

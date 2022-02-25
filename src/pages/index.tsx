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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
// import Image from "next/image";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";

import { Layout } from "../components/Layout";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SystemButton } from "../components/SystemButton";
import { useState, useEffect } from "react";

const Index = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  }, [emailCopied]);

  return (
    <Layout>
      <Box
        mt={10}
        mb={6}
        p={3}
        borderRadius="xl"
        textAlign="center"
        bg={useColorModeValue("systemGreen", "systemGreen")}
      >
        Hello!! I'm Chia-Sheng Lin, a software developer from Taiwan 🇹🇼
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

      <Center mb={50}>
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

      <Text fontSize="3xl" align="center" mb={2}>
        My contact:
      </Text>

      <Center>
        <Stack direction={"column"}>
          <Stack direction={["column", "row"]}>
            <SystemButton rightIcon={<MdPhone />}>+1 2369983312</SystemButton>

            <SystemButton
              onClick={() => {
                setEmailCopied(true);
                navigator.clipboard.writeText("bryan2160088@gmail.com");
              }}
              rightIcon={<MdEmail />}
            >
              bryan2160088@gmail.com
            </SystemButton>
          </Stack>
        </Stack>
      </Center>

      <Center mt={8}>
        <Box>
          {emailCopied ? (
            <Alert status="success">
              <AlertIcon />
              You have copy bryan2160088 to your clipboard
            </Alert>
          ) : null}
        </Box>
      </Center>
    </Layout>
  );
};

export default Index;

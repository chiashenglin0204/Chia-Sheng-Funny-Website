import {
  Link as ChakraLink,
  Text,
  Button,
  Link,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";
// import Image from "next/image";

import { DarkModeSwitch } from "../components/DarkModeSwitch";

import { Layout } from "../components/Layout";

interface HaProps {
  text: string;
  num: string;
  link: string;
}

let Ha: React.FC<HaProps> = ({ text, num, link }) => {
  return (
    <Link href={link} isExternal>
      <Button>
        {" "}
        {text} {num}
      </Button>
    </Link>
  );
};

const Index = () => {
  return (
    <Layout>
      <Box boxSize="100px"></Box>

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
      <Button isLoading={false} colorScheme="blue">
        Button
      </Button>

      <Ha text={"ChiaSheng"} num={"Lin"} link={"https://chakra-ui.com"}></Ha>
    </Layout>
  );
};

export default Index;

const props = {
  text: "Chiasheng",
};

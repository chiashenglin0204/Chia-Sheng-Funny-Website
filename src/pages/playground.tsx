import {
  Box,
  Button,
  Center,
  Image,
  useColorModeValue,
  VStack,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";

const Playground = () => {
  const [image, setImage] = useState<string>("");
  const [currentNum, setCurrentNum] = useState<number>(() => {
    console.log("run");
    return 1;
  });

  const getNewImage = async (): Promise<string> => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    });

    const res = await response.json();
    //console.log(res.data);
    //setImage(res.message);
    setImage(res[0].url);
    //console.log(res);
    return res;
  };

  useEffect(() => {
    getNewImage();
  }, [currentNum]);

  return (
    <Layout>
      <Center mt={5}>
        <VStack spacing={5}>
          <Heading> {"Let's Play with some cats 😼!!"} </Heading>
          <Box
            // mt={100}
            // mb={6}
            p={3}
            borderRadius="xl"
            textAlign="center"
            bg={useColorModeValue("systemGreen", "systemGreen")}
          >
            Get your cat by clicking the button below 😅
          </Box>

          <Image boxSize="500px" objectFit="cover" src={image} alt="" />
          <Button
            onClick={() => {
              setCurrentNum(currentNum + 1);
            }}
          >
            {" "}
            image number : {currentNum}
          </Button>
        </VStack>
      </Center>
    </Layout>
  );
};

export default Playground;

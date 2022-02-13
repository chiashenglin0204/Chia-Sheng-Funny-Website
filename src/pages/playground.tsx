import { Box, Button, Center, Image, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";

const hachi = () => {
  const [image, setImage] = useState("");
  const [currentNum, setCurrentNum] = useState(() => {
    console.log("run");

    return 1;
  });
  const coolstuff = async (): Promise<string> => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    });

    const res = await response.json();

    console.log(res.data);
    //setImage(res.message);
    setImage(res[0].url);

    console.log(res);

    return res;
  };

  useEffect(() => {
    coolstuff();
  }, [currentNum]);

  return (
    <Layout>
      <Center pt={40}>
        <VStack>
          <div>hachi</div>
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

export default hachi;

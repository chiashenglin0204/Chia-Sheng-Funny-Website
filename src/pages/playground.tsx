import { Box, Button, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";

const hachi = () => {
  const [image, setImage] = useState("");
  const [currentNum, setCurrentNum] = useState(() => {
    console.log("run");
    return 1;
  });
  const coolstuff = async (): Promise<string> => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    });

    const res = await response.json();

    console.log(res);
    setImage(res.message);
    console.log(image);

    return res;
  };

  useEffect(() => {
    coolstuff();
  }, [currentNum]);

  return (
    <Layout>
      <Box boxSize="100px"></Box>
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
    </Layout>
  );
};

export default hachi;

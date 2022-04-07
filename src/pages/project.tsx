import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../components/Layout";
import SplitScreen from "../components/SplitScreen";

const work = () => {
  return (
    <Layout>
      <Box>
        <SplitScreen></SplitScreen>
      </Box>
    </Layout>
  );
};
export default work;

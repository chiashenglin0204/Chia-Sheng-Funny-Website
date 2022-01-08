import { Box, Container } from "@chakra-ui/react";
import { NavBar } from "./NavBar";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Box>
      <NavBar />
      {props.children}
    </Box>
  );
};

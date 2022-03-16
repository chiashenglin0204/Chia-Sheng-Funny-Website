import { Box, Container } from "@chakra-ui/react";
import { MobileNavBar } from "./MobileNavBar";
import { NavBar } from "./NavBar";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Box>
      <NavBar />
      <Container maxW="container.sm">{props.children}</Container>
    </Box>
  );
};

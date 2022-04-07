import { Box, Container } from "@chakra-ui/react";
import { DesktopNavBar } from "./NavBar/DesktopNavBar";
import { MobileNavBar } from "./NavBar/MobileNavBar";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Box>
      <Box display={{ base: "none", md: "flex" }}>
        <DesktopNavBar />
      </Box>
      <Box display={{ base: "flex", md: "none" }}>
        <MobileNavBar />
      </Box>
      <Container maxW="container.sm">{props.children}</Container>
    </Box>
  );
};

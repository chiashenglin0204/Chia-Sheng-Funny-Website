import { Box, Container } from "@chakra-ui/react";
import { DesktopNavBar } from "./DesktopNavBar";
import { MobileNavBar } from "./MobileNavBar";
import { NavBar } from "./NavBar";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Box>
      <Box display={{ sm: "none", md: "flex", lg: "flex" }}>
        <DesktopNavBar />
      </Box>
      <Box display={{ sm: "flex", md: "none" }}>
        <MobileNavBar />
      </Box>
      <Container maxW="container.sm">{props.children}</Container>
    </Box>
  );
};

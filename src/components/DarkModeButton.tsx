import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};

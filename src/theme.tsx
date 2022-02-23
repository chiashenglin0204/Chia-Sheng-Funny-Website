import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace` };

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#1A202C")(props),
    },
  }),
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  black: "#16161D",
  systemBrown: "#eead71e8",
  systemPink: "#fad0f7d3",
  systemBlue: "#6a96dae8",
};

const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  breakpoints,
});

export default theme;

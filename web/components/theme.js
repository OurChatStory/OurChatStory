import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      color: mode("#e9edef", "#e9edef")(props),
      bg: mode("#111b21", "#111b21")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles,
  colors: {
    whatsapp: {
      50: "#e3f9e5",
      100: "#baf0c0",
      200: "#8ee699",
      300: "#60dc70",
      400: "#38d349",
      500: "#25d366", // Main WhatsApp Green
      600: "#1da851",
      700: "#15783a",
      800: "#0d4923",
      900: "#041b0b",
    },
    dark: {
      bg: "#111b21",
      card: "#202c33",
      text: "#e9edef",
      subtext: "#8696a0",
    },
    blue: {
      500: "#34b7f1",
    },
  },
  fonts: {
    heading: "Helvetica Neue, Helvetica, Arial, sans-serif",
    body: "Helvetica Neue, Helvetica, Arial, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "full",
      },
      variants: {
        solid: {
          bg: "whatsapp.500",
          color: "white",
          _hover: {
            bg: "whatsapp.600",
          },
        },
        outline: {
          borderColor: "whatsapp.500",
          color: "whatsapp.500",
          _hover: {
            bg: "rgba(37, 211, 102, 0.1)",
          },
        },
      },
    },
  },
});

export default theme;

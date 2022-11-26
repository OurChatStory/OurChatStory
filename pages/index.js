import { ChakraProvider } from "@chakra-ui/react";
import App from "../components/app";

import Base from "../components/base";

import theme from "../components/theme";

export default function Home() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        {/* <Base /> */}
        <App />
      </ChakraProvider>
    </div>
  );
}

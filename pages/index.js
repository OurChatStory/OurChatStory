import { ChakraProvider } from "@chakra-ui/react";

import Base from "../components/base";

import theme from "./theme"

export default function Home() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Base />
      </ChakraProvider>
    </div>
  );
}

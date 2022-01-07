import Head from "next/head";
import Image from "next/image";

import { extendTheme } from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";

import Base from "../components/base";

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});

export default function Home() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Base />
      </ChakraProvider>
    </div>
  );
}

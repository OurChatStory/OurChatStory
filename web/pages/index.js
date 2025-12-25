import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import App from "../components/app";
import theme from "../components/theme";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WhatsApp Wrapped 2025 - Chat Insights and Analysis</title>
      </Head>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </div>
  );
}

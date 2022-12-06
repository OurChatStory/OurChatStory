import { ChakraProvider } from "@chakra-ui/react";
import App from "../components/app";
import theme from "../components/theme";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ChakraProvider theme={theme}>
      <Link href="/"><App /></Link>
      <Link href="/rec"></Link>
      </ChakraProvider>
    </div>
  );
}

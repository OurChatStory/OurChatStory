import { ChakraProvider } from "@chakra-ui/react";

import Base from "./components/base";
import CallToActionWithAnnotation from "./components/base2";
function App() {
  return (
    <ChakraProvider>
      <Base />
      {/* <CallToActionWithAnnotation /> */}
    </ChakraProvider>
  );
}

export default App;

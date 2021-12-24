import { ChakraProvider } from "@chakra-ui/react";

import Base from "./components/base";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import React from "react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});

function App () {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Base} exact />
        </Switch>
      </BrowserRouter>
      {/* <CallToActionWithAnnotation /> */}
    </ChakraProvider>
  );
}

export default App;

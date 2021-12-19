import { ChakraProvider } from "@chakra-ui/react";

import Base from "./components/base";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import React from "react";

export const APIDataContext = React.createContext();

function App() {
  return (
    <APIDataContext.Provider value="Reed">
      <ChakraProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Base} exact />
          </Switch>
        </BrowserRouter>
        {/* <CallToActionWithAnnotation /> */}
      </ChakraProvider>
    </APIDataContext.Provider>
  );
}

export default App;

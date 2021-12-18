import { ChakraProvider } from "@chakra-ui/react";

import Base from "./components/base";
import CallToActionWithAnnotation from "./components/base2";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Result from "./components/results";
import Dashboard from "./components/dashboard";
import React from "react";

export const APIDataContext = React.createContext();

function App() {
  return (
    <APIDataContext.Provider value="Reed">
      <ChakraProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Base} exact />
            <Route path="/results" component={Result} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
        {/* <CallToActionWithAnnotation /> */}
      </ChakraProvider>
    </APIDataContext.Provider>
  );
}

export default App;

import { ChakraProvider } from "@chakra-ui/react";

import Base from "./components/base";
import CallToActionWithAnnotation from "./components/base2";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Result from "./components/results";
import Dashboard from "./components/dashboard";
function App() {
  return (
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
  );
}

export default App;

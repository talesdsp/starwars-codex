import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Characters from "./Routes/Characters";
import Home from "./Routes/Home";
import Stars from "./styles/styled/Stars";

function App() {
  return (
    <BrowserRouter>
      <Stars />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/starships" component={Characters} />
        <Route exact path="/films" component={Characters} />
        <Route exact path="/vehicles" component={Characters} />
        <Route exact path="/species" component={Characters} />
        <Route exact path="/planets" component={Characters} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

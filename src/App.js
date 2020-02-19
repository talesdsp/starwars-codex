import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Categories from "./Routes/Categories";
import Characters from "./Routes/Characters";
import Home from "./Routes/Home";
import Stars from "./styles/styled/Stars";

function App() {
  return (
    <BrowserRouter>
      <Stars />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/categories/characters" component={Characters} />
        <Route exact path="/categories/starships" component={Characters} />
        <Route exact path="/categories/films" component={Characters} />
        <Route exact path="/categories/vehicles" component={Characters} />
        <Route exact path="/categories/species" component={Characters} />
        <Route exact path="/categories/planets" component={Characters} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

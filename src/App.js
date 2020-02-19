import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Categories from "./Routes/Categories";
import Characters from "./Routes/Characters";
import Home from "./Routes/Home";
import Stars from "./styles/styled/Stars";

function App() {
  let isLoaded = false;
  window.onload = () => {
    isLoaded = true;
  };
  function prepareNavigation(isLoaded) {
    let actual;
    let btn;
    let intervalId;
    intervalId = setInterval(startNavigation, 200);

    function startNavigation(isLoaded) {
      if (isLoaded === false) return;
      clearInterval(intervalId);
      btn = [];
      actual = 0;
      btn = document.querySelectorAll("button");

      if (btn.length === 0) return prepareNavigation(isLoaded);

      document.addEventListener("keyup", applyFocus);
      btn.forEach((a) => a.addEventListener("mouseenter", applyFocus));
      btn.forEach((a) => a.addEventListener("mouseleave", applyFocus));
      btn[0].focus();
      applyFocus();
    }

    function applyFocus(e = {}) {
      if ((e.keyCode === 38) & (actual > 0)) {
        actual -= 1;
        btn[actual].focus();
      } else if ((e.keyCode === 40) & (actual < btn.length - 1)) {
        actual += 1;
        btn[actual].focus();
      } else if (e.target) {
        e.target.focus();
      }
      if (document.activeElement.nextSibling !== null) {
        btn.forEach((v) => {
          v.nextSibling && v.nextSibling.removeAttribute("data-openpreview");
        });
        document.activeElement.nextSibling.setAttribute("data-openpreview", true);
      }
    }
  }

  return (
    <BrowserRouter>
      <Stars />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} fn={prepareNavigation(isLoaded)} />}
        />
        <Route
          exact
          path="/categories"
          render={(props) => <Categories {...props} fn={prepareNavigation(isLoaded)} />}
        />
        <Route
          exact
          path="/categories/characters"
          render={(props) => <Characters {...props} fn={prepareNavigation(isLoaded)} />}
        />
        <Route
          exact
          path="/categories/starships"
          render={(props) => <Characters {...props} fn={prepareNavigation(isLoaded)} />}
        />
        <Route
          exact
          path="/categories/films"
          render={(props) => <Characters {...props} fn={prepareNavigation(isLoaded)} />}
        />
        <Route
          exact
          path="/categories/vehicles"
          render={(props) => <Characters {...props} fn={prepareNavigation(isLoaded)} />}
        />
        <Route
          exact
          path="/categories/species"
          render={(props) => <Characters {...props} fn={prepareNavigation(isLoaded)} />}
        />
        <Route
          exact
          path="/categories/planets"
          render={(props) => <Characters {...props} fn={prepareNavigation(isLoaded)} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

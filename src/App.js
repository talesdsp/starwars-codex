import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import mp3 from "./audio/starwars.mp3";
import ogg from "./audio/starwars.ogg";
import Categories from "./Routes/Categories";
import Home from "./Routes/Home";
import Subject from "./Routes/Subject";
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
      console.log(btn);

      if (btn.length === 0) return prepareNavigation(isLoaded);

      document.addEventListener("keyup", applyFocus);
      btn.forEach((a) => a.addEventListener("pointerenter", applyFocus));
      btn.forEach((a) => a.addEventListener("pointerleave", applyFocus));
      btn[0].focus();
      applyFocus();
    }

    function applyFocus(e = {}) {
      console.log(e);
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
      <audio autoPlay loop id="audio">
        <source id="ogg" src={ogg} type="audio/ogg" />
        <source id="mp3" src={mp3} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
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
          render={(props) => <Subject {...props} theme="people" fn={prepareNavigation(isLoaded)} />}
        />
        <Route
          exact
          path="/categories/starships"
          render={(props) => (
            <Subject {...props} theme="starships" fn={prepareNavigation(isLoaded)} />
          )}
        />
        <Route
          exact
          path="/categories/films"
          render={(props) => <Subject {...props} theme="films" fn={prepareNavigation(isLoaded)} />}
        />
        <Route
          exact
          path="/categories/vehicles"
          render={(props) => (
            <Subject {...props} theme="vehicles" fn={prepareNavigation(isLoaded)} />
          )}
        />
        <Route
          exact
          path="/categories/species"
          render={(props) => (
            <Subject {...props} theme="species" fn={prepareNavigation(isLoaded)} />
          )}
        />
        <Route
          exact
          path="/categories/planets"
          render={(props) => (
            <Subject {...props} theme="planets" fn={prepareNavigation(isLoaded)} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

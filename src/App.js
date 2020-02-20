import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import lightsaberMP3 from "./audio/sfx/lightsaber.mp3";
import lightsaberOGG from "./audio/sfx/lightsaber.ogg";
import mp3 from "./audio/starwars.mp3";
import ogg from "./audio/starwars.ogg";
import Categories from "./Routes/Categories";
import Home from "./Routes/Home";
import Subject from "./Routes/Subject";
import "./styles/css/index.css";
import Stars from "./styles/styled/Stars";
import lightning from "./video/lightning.mp4";

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
      btn.forEach((a) => a.addEventListener("pointerenter", applyFocus));
      btn.forEach((a) => a.addEventListener("pointerleave", applyFocus));
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

  function start() {
    const audio = document.querySelector("#start");
    audio.load();
    audio.play();

    const video = document.querySelector("#video");
    video.classList.add("play");
    video.load();
    video.play();
    video.addEventListener("ended", () => video.classList.remove("play"));
  }

  return (
    <BrowserRouter>
      <audio autoPlay loop id="audio">
        <source id="ogg" src={ogg} type="audio/ogg" />
        <source id="mp3" src={mp3} type="audio/mpeg" />
      </audio>

      <audio id="start">
        <source id="ogg" src={lightsaberOGG} type="audio/ogg" />
        <source id="mp3" src={lightsaberMP3} type="audio/mpeg" />
      </audio>

      <video id="video">
        <source src={lightning} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>

      <Stars />

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} start={start} fn={prepareNavigation(isLoaded)} />}
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

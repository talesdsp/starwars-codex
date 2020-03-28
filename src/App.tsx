import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Categories from "./Routes/Categories";
import Home from "./Routes/Home";
import Subject from "./Routes/Subject";
import "./styles/css/index.css";
import Stars from "./styles/styled/Stars";
const lightsaberMP3 = require("./audio/sfx/lightsaber.mp3");
const lightsaberOGG = require("./audio/sfx/lightsaber.ogg");
const mp3 = require("./audio/starwars.mp3");
const ogg = require("./audio/starwars.ogg");
const lightning = require("./video/lightning.mp4");

const App: React.FC = () => {
  const [isLoaded, setLoaded] = useState(false);

  React.useEffect(() => {
    window.onload = () => {
      setLoaded(true);
      const soundTrack: HTMLMediaElement | null = document.querySelector("#audio");
      soundTrack?.load();
      soundTrack?.play();
    };
  }, []);

  const prepareNavigation = (isLoaded: boolean) => {
    let index: number;
    let btn: NodeListOf<HTMLButtonElement>;
    let intervalId = setInterval(startNavigation, 200);

    function startNavigation(isLoaded: boolean) {
      if (isLoaded === false) return;
      clearInterval(intervalId);
      index = 0;

      btn = document.querySelectorAll("button");

      if (btn.length === 0) return prepareNavigation(isLoaded);

      document.addEventListener("keyup", onType);
      btn.forEach((a, i) => a.addEventListener("pointerenter", (ev) => onPoint(ev, i)));
      btn.forEach((a) => a.addEventListener("pointerleave", onPoint));
      (btn[0] as HTMLElement).focus();
    }

    function onType(ev: KeyboardEvent) {
      if (ev.keyCode === 38 && index > 0) {
        index -= 1;
        (btn[index] as HTMLElement).focus();
      } else if (ev.keyCode === 40 && index < btn.length - 1) {
        index += 1;
        (btn[index] as HTMLElement).focus();
      }

      applyFocus();
    }

    function onPoint(ev: PointerEvent, i?: number) {
      if (i) index = i;

      (ev.target as HTMLElement).focus();
      applyFocus();
    }

    function applyFocus() {
      if (document?.activeElement?.nextSibling) {
        btn.forEach((v) => {
          (v.nextSibling as HTMLButtonElement)?.removeAttribute("data-openpreview");
        });
        (document.activeElement.nextSibling as Element).setAttribute("data-openpreview", "true");
      }
    }
  };

  function start() {
    const audio: HTMLMediaElement | null = document.querySelector("#start");
    audio?.load();
    audio?.play();

    const video: HTMLMediaElement | null = document.querySelector("#video");
    video?.classList.add("play");
    video?.load();
    video?.play();
    video?.addEventListener("ended", () => video.classList.remove("play"));
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
          path="/categories/:theme"
          render={(props) => <Subject {...props} fn={prepareNavigation(isLoaded)} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Categories from "./Routes/Categories";
import Home from "./Routes/Home";
import Subject from "./Routes/Subject";
import "./styles/scss/index.scss";
import Stars from "./styles/styled/Stars";
const lightsaberMP3 = require("./audio/sfx/lightsaber.mp3");
const lightsaberOGG = require("./audio/sfx/lightsaber.ogg");
const mp3 = require("./audio/starwars.mp3");
const ogg = require("./audio/starwars.ogg");
const lightning = require("./video/lightning.mp4");

const App: React.FC = () => {
  React.useEffect(() => {
    const soundTrack: HTMLMediaElement | null = document.querySelector("#audio");
    soundTrack?.load();
    soundTrack?.play();
  }, []);

  return (
    <BrowserRouter>
      <audio loop={true} id="theme">
        <source id="ogg" src={ogg} type="audio/ogg" />
        <source id="mp3" src={mp3} type="audio/mpeg" />
      </audio>

      <audio id="lightsaberSound">
        <source id="ogg" src={lightsaberOGG} type="audio/ogg" />
        <source id="mp3" src={lightsaberMP3} type="audio/mpeg" />
      </audio>

      <video id="lightsaberVideo">
        <source src={lightning} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>

      <Stars />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/categories/:theme" component={Subject} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

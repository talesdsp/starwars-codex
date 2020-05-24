import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { audio, video } from "./assets";
import { Footer, Stars } from "./components/";
import store from "./pages/Subject/store";
import { Spinner } from "./pages/Subject/styled";

const Categories = React.lazy(() => import("./pages/Categories/Categories"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Subject = React.lazy(() => import("./pages/Subject/Subject"));

const App: React.FC = () => {
  React.useEffect(() => {
    const soundTrack: HTMLMediaElement | null = document.querySelector("#theme");
    soundTrack?.load();
    soundTrack?.play();
  }, []);

  return (
    <BrowserRouter>
      <audio loop={true} id="theme">
        <source id="ogg" src={audio.ogg} type="audio/ogg" />
        <source id="mp3" src={audio.mp3} type="audio/mpeg" />
      </audio>

      <audio id="lightsaberSound">
        <source id="ogg" src={audio.lightsaberOGG} type="audio/ogg" />
        <source id="mp3" src={audio.lightsaberMP3} type="audio/mpeg" />
      </audio>

      <video id="lightsaberVideo">
        <source src={video.lightning} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
      </video>

      <Stars />

      <Switch>
        <React.Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Provider store={store}>
            <Route exact path="/categories/:theme" component={Subject} />
          </Provider>
        </React.Suspense>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

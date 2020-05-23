import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import logo from "../../logo.svg";
import { waitButtons } from "../../utils/navigation";
import { Button, HomeWrapper, StarLogo, Window } from "./styled";

export const start = () => {
  const audio: HTMLMediaElement | null = document.querySelector("#lightsaberSound");
  audio?.classList.add("play");
  audio?.load();
  audio?.play();
  audio?.addEventListener("ended", () => audio.classList.remove("play"));

  const video: HTMLMediaElement | null = document.querySelector("#lightsaberVideo");
  video?.classList.add("play");
  video?.load();
  video?.play();
  video?.addEventListener("ended", () => video.classList.remove("play"));

  return { audio, video };
};

const Home: React.FC<RouteComponentProps> = ({ history }) => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    waitButtons();
  }, []);

  const goto = (url: string) => {
    start();
    setShake(true);
    setTimeout(() => {
      setShake(false);
      history.push(url);
    }, 1000);
  };

  return (
    <Window shake={shake}>
      <StarLogo src={logo} alt="Star Wars" />
      <HomeWrapper>
        <Button onClick={() => goto("/categories")}>Start</Button>
      </HomeWrapper>
    </Window>
  );
};

export default Home;

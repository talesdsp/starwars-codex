import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import logo from "../../logo.svg";
import * as S from "../../styles/styled";
import { waitButtons } from "../../utils/navigation";

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
    <S.Window shake={shake}>
      <S.StarLogo src={logo} alt="Star Wars" />
      <S.HomeWrapper>
        <S.Button onClick={() => goto("/categories")}>Start</S.Button>
      </S.HomeWrapper>
    </S.Window>
  );
};

export default Home;

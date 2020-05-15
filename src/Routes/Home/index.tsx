import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../logo.svg";
import * as S from "../../styles/styled";
import { initNavigation } from "../../utils/navigation";

const start = () => {
  const audio: HTMLMediaElement | null = document.querySelector("#start");
  audio?.load();
  audio?.play();

  const video: HTMLMediaElement | null = document.querySelector("#video");
  video?.classList.add("play");
  video?.load();
  video?.play();
  video?.addEventListener("ended", () => video.classList.remove("play"));

  return { audio, video };
};

const Home: React.FC = () => {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    initNavigation();
  }, []);

  const history = useHistory();

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

import React, { useState } from "react";
import logo from "../../logo.svg";
import * as S from "../../styles/styled";
import { HomeProps } from "../types";

const Home: React.FC<HomeProps> = ({ start, history }) => {
  const [shake, setShake] = useState(false);

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

import React from "react";
import logo from "../../logo.svg";
import * as S from "../../styles/styled";

export default function Home() {
  return (
    <S.Window>
      <img src={logo} alt="Star Wars" />
      <S.Button to="/categories">Start</S.Button>
    </S.Window>
  );
}

import React from "react";
import {useHistory} from "react-router-dom";
import logo from "../../logo.svg";
import * as S from "../../styles/styled";

export default function Home() {
  const history = useHistory();
  const goto = (url) => {
    history.push(url);
  };
  return (
    <S.Window>
      <S.StarLogo src={logo} alt="Star Wars" />
      <S.Button onClick={() => goto("/categories")}>Start</S.Button>
    </S.Window>
  );
}

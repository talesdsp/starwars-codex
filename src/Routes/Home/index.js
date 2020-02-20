import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import logo from "../../logo.svg";
import * as S from "../../styles/styled";

export default function Home({start}) {
  const history = useHistory();
  const [shake, setShake] = useState(false);

  const goto = (url) => {
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
      <S.Button onClick={() => goto("/categories")}>Start</S.Button>
    </S.Window>
  );
}

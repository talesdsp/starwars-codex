import React from "react";
import * as S from "../../styles/styled";

export default function Char({char}) {
  return (
    <S.Item>
      <h1>{char.name}</h1>
      <p>{char.age}</p>
      <p>{char.gender}</p>
      <p>{char.mass}</p>
    </S.Item>
  );
}

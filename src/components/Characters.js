import React from "react";
import * as S from "../styles/styled/index";

const Characters = ({results, closeModal}) => {
  return (
    <>
      {results.map((v, i) => (
        <S.Item key={i}>
          <S.Button>
            <h1>{v.name}</h1>
          </S.Button>
          <S.Modal>
            <S.X onClick={closeModal} />
            <h1>{v.name}</h1>
            <p>gender: {v.gender}</p>
            <p>weight: {v.mass}kg</p>
            <p>height: {v.height}cm</p>
          </S.Modal>
        </S.Item>
      ))}
    </>
  );
};

export default Characters;

import React from "react";
import * as S from "../../styles/styled";
import { Specie } from "../types";

const Species: Specie = ({ results, closeModal }) => {
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
            <p>classification: {v.classification}</p>
            <p>designation: {v.designation}</p>
            <p>language: {v.language}</p>
            <p>average_height: {v.average_height}</p>
            <p>average_lifespan: {v.average_lifespan}</p>
          </S.Modal>
        </S.Item>
      ))}
    </>
  );
};

export default Species;

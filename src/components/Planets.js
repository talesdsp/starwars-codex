import React from "react";
import * as S from "../styles/styled/index";

const Planets = ({results, closeModal}) => {
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
            <p>terrain: {v.terrain}</p>
            <p>climate: {v.climate}</p>
            <p>population: {v.population}</p>
            <p>orbital period: {v.orbital_period}</p>
            <p>gravity: {v.gravity}</p>
          </S.Modal>
        </S.Item>
      ))}
    </>
  );
};
export default Planets;

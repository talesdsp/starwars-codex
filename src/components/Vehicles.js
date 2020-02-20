import React from "react";
import * as S from "../styles/styled/index";

const Vehicles = ({results, closeModal}) => {
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
            <p>model: {v.model}</p>
            <p>manufacturer: {v.manufacturer}</p>
            <p>passengers: {v.passengers}</p>
            <p>pilots: {v.pilots}</p>
            <p>const in credits: {v.cost_in_credits}</p>
          </S.Modal>
        </S.Item>
      ))}
    </>
  );
};

export default Vehicles;

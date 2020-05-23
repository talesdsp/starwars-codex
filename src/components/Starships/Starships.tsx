import React from "react";
import * as S from "../../styles/styled";
import { Starship } from "../types";
import { closeModal } from "../utils";

const Starships: Starship = ({ results }) => {
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
            <p>cost_in_credits: {v.cost_in_credits}</p>
          </S.Modal>
        </S.Item>
      ))}
    </>
  );
};

export default Starships;

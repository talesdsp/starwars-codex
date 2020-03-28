import React from "react";
import * as S from "../styles/styled";
import { Film } from "./types";

const Films: Film = ({ results, closeModal }) => {
  return (
    <>
      {results.map((v, i) => (
        <S.Item key={i}>
          <S.Button>
            <h1>{v.title}</h1>
          </S.Button>
          <S.Modal>
            <S.X onClick={closeModal} />
            <h1>{v.title}</h1>
            <p>episode: {v.episode_id}</p>
            <p>director: {v.director}</p>
            <p>producer: {v.producer}</p>
            <p>opening crawl: {v.opening_crawl.substring(0, 100)}...</p>
          </S.Modal>
        </S.Item>
      ))}
    </>
  );
};

export default Films;

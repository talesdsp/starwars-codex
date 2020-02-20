import React from "react";
import {useHistory} from "react-router-dom";
import * as S from "../../styles/styled";

export default function Categories() {
  const history = useHistory();

  const goto = (url) => {
    history.push(url);
  };

  return (
    <S.Window>
      <S.List>
        <S.Item>
          <S.Button onClick={() => goto("/categories/characters")}>Characters</S.Button>
        </S.Item>
        <S.Item>
          <S.Button onClick={() => goto("/categories/planets")}>Planets</S.Button>
        </S.Item>
        <S.Item>
          <S.Button onClick={() => goto("/categories/starships")}>Starships</S.Button>
        </S.Item>
        <S.Item>
          <S.Button onClick={() => goto("/categories/vehicles")}>Vehicles</S.Button>
        </S.Item>
        <S.Item>
          <S.Button onClick={() => goto("/categories/films")}>Films</S.Button>
        </S.Item>
        <S.Item>
          <S.Button onClick={() => goto("/categories/species")}>Species</S.Button>
        </S.Item>
        <S.Item>
          <S.Button off onClick={() => goto("/")}>
            Go Back
          </S.Button>
        </S.Item>
      </S.List>
    </S.Window>
  );
}

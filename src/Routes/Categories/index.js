import React from "react";
import * as S from "../../styles/styled";

export default function Categories() {
  return (
    <S.Window>
      <S.List>
        <S.Item>
          <S.Button to="/categories/people">Characters</S.Button>
        </S.Item>
        <S.Item>
          <S.Button to="/categories/planets">Planets</S.Button>
        </S.Item>
        <S.Item>
          <S.Button to="/categories/starships">Starships</S.Button>
        </S.Item>
        <S.Item>
          <S.Button to="/categories/vehicles">Vehicles</S.Button>
        </S.Item>
        <S.Item>
          <S.Button>Films</S.Button>
        </S.Item>
        <S.Item>
          <S.Button to="/categories/species">Species</S.Button>
        </S.Item>
      </S.List>
    </S.Window>
  );
}

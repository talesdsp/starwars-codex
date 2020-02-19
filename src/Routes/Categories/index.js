import React from "react";
import * as S from "../../styles/styled";

export default function Categories() {
  let actual = 0;
  let anchor;

  window.onload = () => {
    anchor = document.querySelectorAll("a");
    document.addEventListener("keyup", listenKeyPress);
    anchor[0].focus();
  };

  function listenKeyPress(e) {
    if (e.keyCode === 38 && actual > 0) {
      actual -= 1;
      anchor[actual].focus();
    }
    if (e.keyCode === 40 && actual < anchor.length - 1) {
      actual += 1;
      anchor[actual].focus();
    }
  }

  return (
    <S.Window>
      <S.List>
        <S.Item>
          <S.Button autoFocus to="/categories/characters">
            Characters
          </S.Button>
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
          <S.Button to="/categories/films">Films</S.Button>
        </S.Item>
        <S.Item>
          <S.Button to="/categories/species">Species</S.Button>
        </S.Item>
        <S.Item>
          <S.Button to="/">Go Back</S.Button>
        </S.Item>
      </S.List>
    </S.Window>
  );
}

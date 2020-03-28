import React from "react";
import * as S from "../../styles/styled";
import { CategoriesProps } from "../types";

const Categories: React.FC<CategoriesProps> = ({ history }) => {
  type URL = "people" | "planets" | "starships" | "vehicles" | "films" | "species";

  const goto = (url: URL) => {
    history.push(`/categories/${url}`);
  };

  return (
    <S.Window>
      <S.List>
        <S.Item>
          <S.Button onClick={() => goto("people")}>Characters</S.Button>
        </S.Item>
        <S.Item>
          <S.Button onClick={() => goto("planets")}>Planets</S.Button>
        </S.Item>
        <S.Item>
          <S.Button onClick={() => goto("starships")}>Starships</S.Button>
        </S.Item>
        <S.Item>
          <S.Button onClick={() => goto("vehicles")}>Vehicles</S.Button>
        </S.Item>
        <S.Item>
          <S.Button onClick={() => goto("films")}>Films</S.Button>
        </S.Item>
        <S.Item>
          <S.Button onClick={() => goto("species")}>Species</S.Button>
        </S.Item>
        <S.Item>
          <S.Button off onClick={() => history.goBack()}>
            Go Back
          </S.Button>
        </S.Item>
      </S.List>
    </S.Window>
  );
};
export default Categories;

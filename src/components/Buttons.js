import React from "react";
import {useHistory} from "react-router-dom";
import * as S from "../styles/styled/index";

export default function Buttons({
  count,
  previous,
  next,
  theme,
  dispatch,
  dataCreators,
  extractPathFromUrl
}) {
  const history = useHistory();

  const goto = (url, back) => {
    if (!url) {
      if (back) history.goBack();
      return;
    }
    dispatch(dataCreators.triggerLoading());
    dispatch(dataCreators.get(extractPathFromUrl(url)));
  };

  return (
    <S.Controls>
      <S.Button off={previous === null} onClick={() => goto(previous, "back")}>
        {previous === null ? "Go Back" : "Previous"}
      </S.Button>

      <S.Button off={next === null} onClick={(e) => goto(next)}>
        Next
      </S.Button>

      <S.Page>
        {[...Array(Math.trunc(count / 10) + (count % 10 > 0 && 1))].map((v, i) => (
          <S.Button
            number
            tabIndex="0"
            key={i + 100}
            onClick={(e) => {
              goto(`https://swapi.co/api/${theme}/?page=${i + 1}`);
            }}
          >
            {i + 1}
          </S.Button>
        ))}
      </S.Page>
    </S.Controls>
  );
}

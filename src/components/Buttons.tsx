import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ApplicationState } from "../redux";
import { getAsyncData, triggerLoading } from "../redux/ducks/codex/actions";
import { extractPathFromUrl } from "../services/api";
import * as S from "../styles/styled";

interface ButtonProps {
  theme: string;
}

const Buttons: React.FC<ButtonProps> = ({ theme }) => {
  const [{ count, next, previous }] = useSelector((state: ApplicationState) => [state.codex.data]);

  const history = useHistory();
  const dispatch = useDispatch();

  const goto = (url: string | null, back?: string) => {
    if (!url) {
      if (back) history.goBack();
      return;
    }
    dispatch(triggerLoading());
    dispatch(getAsyncData(extractPathFromUrl(url)));
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
        {[...Array(Math.trunc(count / 10) + (count % 10 > 0 ? 1 : 0))].map((_, i) => (
          <S.Button
            number
            tabIndex={0}
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
};

export default Buttons;

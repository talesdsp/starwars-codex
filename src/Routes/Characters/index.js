import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {dataCreators} from "../../redux/ducks/data";
import {extractPathFromUrl} from "../../services/api";
import * as S from "../../styles/styled";
import Spinner from "../../styles/styled/Spinner";

const Characters = (props) => {
  let theme = "people";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataCreators.triggerLoading());
    dispatch(dataCreators.get(theme));
  }, [dispatch, theme]);

  const goto = (url, e) => {
    if (!url) return;
    dispatch(dataCreators.triggerLoading());
    dispatch(dataCreators.get(extractPathFromUrl(url)));
  };

  const [{results, isLoading, count, next, previous}] = useSelector((state) => [state.data]);
  return (
    <>
      <S.Role>Characters</S.Role>
      {isLoading ? <Spinner /> : ""}

      {results &&
        results.map((v) => (
          <S.Item key={v.name}>
            <S.Button to="">
              <h1>{v.name}</h1>
            </S.Button>
            <S.Modal></S.Modal>
          </S.Item>
        ))}

      <S.Button disabled={previous === null} onClick={() => goto(previous)}>
        Previous
      </S.Button>

      <S.PopUp></S.PopUp>
      <S.Page>
        {count &&
          [...Array(Math.trunc(count / 10) + (count % 10 > 0 && 1))].map((v, i) => (
            <S.Numbers onClick={(e) => goto(`https://swapi.co/api/people/?page=${i + 1}`, e)}>
              {i + 1}
            </S.Numbers>
          ))}
      </S.Page>

      <S.Button disabled={next === null} onClick={(e) => goto(next, e)}>
        Next
      </S.Button>
    </>
  );
};

export default Characters;

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {dataCreators} from "../../redux/ducks/data";
import {extractPathFromUrl} from "../../services/api";
import * as S from "../../styles/styled";
import Spinner from "../../styles/styled/Spinner";

const Characters = (props) => {
  let theme = "people";
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataCreators.triggerLoading());
    dispatch(dataCreators.get(theme));
  }, [dispatch, theme]);

  const goto = (url, back) => {
    if (!url) {
      if (back) history.goBack();
      return;
    }
    dispatch(dataCreators.triggerLoading());
    dispatch(dataCreators.get(extractPathFromUrl(url)));
  };

  const beActive = () => {};

  const [{results, isLoading, count, next, previous}] = useSelector((state) => [state.data]);
  return (
    <>
      <S.Role>Characters</S.Role>
      {isLoading ? <Spinner /> : ""}

      {results &&
        results.map((v, i) => (
          <S.Item key={i}>
            <S.Button>
              <h1>{v.name}</h1>
            </S.Button>
            <S.Modal>
              <h1>{v.name}</h1>
              <p>{v.gender}</p>
              <p>{v.mass}kg</p>
              <p>{v.height}cm</p>
            </S.Modal>
          </S.Item>
        ))}

      {count && (
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
                keys={i + 100}
                onClick={(e) => {
                  goto(`https://swapi.co/api/people/?page=${i + 1}`);
                  beActive(1 + 100);
                }}
              >
                {i + 1}
              </S.Button>
            ))}
          </S.Page>
        </S.Controls>
      )}
    </>
  );
};

export default Characters;

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import Characters from "../../components/Characters";
import Films from "../../components/Films";
import Planets from "../../components/Planets";
import Species from "../../components/Species";
import Starships from "../../components/Starships";
import Vehicles from "../../components/Vehicles";
import {dataCreators} from "../../redux/ducks/data";
import {extractPathFromUrl} from "../../services/api";
import * as S from "../../styles/styled";
import Spinner from "../../styles/styled/Spinner";

const Subject = ({theme}) => {
  const [{results, isLoading, count, next, previous}] = useSelector((state) => [state.data]);
  const dispatch = useDispatch();
  const history = useHistory();

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

  const closeModal = () => {
    const btn = document.querySelectorAll("button");
    btn.forEach((v) => {
      v.nextSibling && v.nextSibling.removeAttribute("data-openpreview");
    });
  };

  const Which = () => {
    return {
      people: <Characters results={results} closeModal={closeModal} />,
      planets: <Planets results={results} closeModal={closeModal} />,
      vehicles: <Vehicles results={results} closeModal={closeModal} />,
      starships: <Starships results={results} closeModal={closeModal} />,
      species: <Species results={results} closeModal={closeModal} />,
      films: <Films results={results} closeModal={closeModal} />
    }[theme];
  };

  return (
    <>
      <S.Role>{theme}</S.Role>
      {isLoading ? <Spinner /> : ""}
      <S.List>{results && Which()}</S.List>
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
      )}
    </>
  );
};
export default Subject;

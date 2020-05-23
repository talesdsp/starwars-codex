import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Buttons from "../../components/Buttons/Buttons";
import Characters from "../../components/Characters/Characters";
import Films from "../../components/Films/Films";
import Planets from "../../components/Planets/Planets";
import Species from "../../components/Species/Species";
import Starships from "../../components/Starships/Starships";
import Vehicles from "../../components/Vehicles/Vehicles";
import { ApplicationState } from "../../redux";
import { getAsyncData, triggerLoading } from "../../redux/ducks/codex/actions";
import * as S from "../../styles/styled";
import Spinner from "../../styles/styled/Spinner";
import { waitButtons } from "../../utils";
import { SelectComponent, SParams } from "../types";

export const selector = (state: ApplicationState) => state.codex;

const Subject: React.FC<RouteComponentProps<SParams>> = ({ match }) => {
  const {
    data: { results, count },
    isLoading,
  } = useSelector(selector);
  const dispatch = useDispatch();

  const theme = match.params.theme;

  useEffect(() => {
    waitButtons();
    dispatch(triggerLoading());
    dispatch(getAsyncData(theme));
  }, [dispatch, theme]);

  const Which = () => {
    const selectedComponent: SelectComponent = {
      people: <Characters results={results} />,
      planets: <Planets results={results} />,
      vehicles: <Vehicles results={results} />,
      starships: <Starships results={results} />,
      species: <Species results={results} />,
      films: <Films results={results} />,
    };

    return selectedComponent[theme];
  };

  return (
    <>
      <S.Role>{theme}</S.Role>

      {isLoading && <Spinner />}

      <S.List>{results && Which()}</S.List>

      {count && <Buttons theme={theme} />}
    </>
  );
};
export default Subject;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { waitButtons } from "../../utils";
import { SelectComponent, SParams } from "../types";
import { Buttons, Characters, Films, Planets, Species, Starships, Vehicles } from "./components";
import { ApplicationState } from "./store";
import { getAsyncData, triggerLoading } from "./store/codex/actions";
import { List, Role, Spinner } from "./styled";

export const selector = (state: ApplicationState) => state.codex;

const Subject: React.FC<RouteComponentProps<SParams>> = ({ match }) => {
  const {
    data: { results },
    isLoading,
  } = useSelector(selector);
  const dispatch = useDispatch();

  const theme = match.params.theme;

  useEffect(() => {
    dispatch(triggerLoading());
    dispatch(getAsyncData(theme));
  }, [dispatch, theme]);

  const rerender = results[0];

  useEffect(() => {
    waitButtons();
  }, [rerender]);

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
      <Role>{theme}</Role>

      {isLoading && <Spinner />}

      <List>{results && Which()}</List>

      <Buttons theme={theme} />
    </>
  );
};
export default Subject;

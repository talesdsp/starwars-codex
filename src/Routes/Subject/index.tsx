import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import Buttons from "../../components/Buttons";
import Characters from "../../components/Characters";
import Films from "../../components/Films";
import Planets from "../../components/Planets";
import Species from "../../components/Species";
import Starships from "../../components/Starships";
import Vehicles from "../../components/Vehicles";
import { ApplicationState } from "../../redux";
import { getAsyncData, triggerLoading } from "../../redux/ducks/codex/actions";
import * as S from "../../styles/styled";
import Spinner from "../../styles/styled/Spinner";
import { initNavigation } from "../../utils";
import { SelectComponent, SParams } from "../types";

const Subject: React.FC = () => {
  const [
    {
      data: { results, count },
      isLoading,
    },
  ] = useSelector((state: ApplicationState) => [state.codex]);
  const dispatch = useDispatch();

  const match = useRouteMatch<SParams>();

  const theme = match.params.theme;

  useEffect(() => {
    initNavigation();
    dispatch(triggerLoading());
    dispatch(getAsyncData(theme));
  }, [dispatch, theme]);

  const closeModal: React.MouseEventHandler<Node> = (ev) => {
    (ev.target as Node).parentElement?.removeAttribute("data-preview");
  };

  const Which = () => {
    const selectedComponent: SelectComponent = {
      people: <Characters results={results} closeModal={closeModal} />,
      planets: <Planets results={results} closeModal={closeModal} />,
      vehicles: <Vehicles results={results} closeModal={closeModal} />,
      starships: <Starships results={results} closeModal={closeModal} />,
      species: <Species results={results} closeModal={closeModal} />,
      films: <Films results={results} closeModal={closeModal} />,
    };

    return selectedComponent[theme];
  };

  return (
    <>
      <S.Role>{theme}</S.Role>

      {isLoading ? <Spinner /> : ""}

      <S.List>{results && Which()}</S.List>

      {count && <Buttons theme={theme} />}
    </>
  );
};
export default Subject;

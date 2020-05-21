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

const Subject: React.FC<RouteComponentProps<SParams>> = ({ match }) => {
  const [
    {
      data: { results, count },
      isLoading,
    },
  ] = useSelector((state: ApplicationState) => [state.codex]);
  const dispatch = useDispatch();

  const theme = match.params.theme;

  useEffect(() => {
    waitButtons();
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

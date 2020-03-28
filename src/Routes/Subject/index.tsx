import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { SelectComponent, SubjectProps } from "../types";

const Subject: React.FC<SubjectProps> = ({ match, history }) => {
  const [
    {
      data: { results, count },
      isLoading,
    },
  ] = useSelector((state: ApplicationState) => [state.codex]);
  const dispatch = useDispatch();

  const theme = match.params.theme;

  useEffect(() => {
    dispatch(triggerLoading());
    dispatch(getAsyncData(theme));
  }, [dispatch, theme]);

  const closeModal: React.MouseEventHandler = () => {
    const btn = document.querySelectorAll("button");
    btn.forEach((v) => {
      (v.nextSibling as HTMLElement).removeAttribute("data-openpreview");
    });
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

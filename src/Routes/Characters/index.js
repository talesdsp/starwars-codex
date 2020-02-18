import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {dataCreators} from "../../redux/ducks/data";
import {extractPathFromUrl} from "../../services/api";
import Spinner from "../../styles/styled/Spinner";
import Char from "./Char";

const Characters = (props) => {
  let theme = "people";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataCreators.triggerLoading());
    dispatch(dataCreators.get(theme));
  }, [dispatch, theme]);

  const goto = (url) => {
    dispatch(dataCreators.get(extractPathFromUrl(url)));
  };

  const [{results, isLoading, count}] = useSelector((state) => [state.data]);
  console.log(results);
  return (
    <>
      {isLoading ? <Spinner /> : ""}

      {results && results.map((v) => <Char key={v.name} char={v} />)}

      <button disabled={results && !results.previous} onClick={() => goto(results.previous)}>
        Previous
      </button>

      {count &&
        [...Array(Math.trunc(count / 10) + (count % 10 > 0 && 1))].map((v, i) => (
          <div
            style={{cursor: "pointer", color: "red", fontSize: "2rem", textDecoration: "underline"}}
            onClick={() => goto("https://swapi.co/api/people/?page=" + i + 1)}
          >
            {i + 1}
          </div>
        ))}

      <button disabled={results && !results.next} onClick={() => goto(results.next)}>
        Next
      </button>
    </>
  );
};

export default Characters;

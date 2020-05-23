import { combineReducers } from "redux";
import { codexReducer } from "./codex";

const logger = (state = "", action: any) => {
  console.log(action);
  return state;
};

export default combineReducers({
  codex: codexReducer,
  logger,
});

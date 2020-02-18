import {combineReducers} from "redux";
import dataReducer from "./ducks/data";

const logger = (state = "", action) => {
  console.log(action);
  return state;
};

export default combineReducers({
  data: dataReducer,
  logger
});

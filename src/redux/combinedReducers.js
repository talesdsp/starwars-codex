import {combineReducers} from "redux";
import charactersReducer from "./ducks/characters";

export default combineReducers({
  characters: charactersReducer
  // starships: StarshipsReducer,
});

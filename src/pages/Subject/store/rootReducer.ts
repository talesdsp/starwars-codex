import { combineReducers } from "redux"
import { codexReducer } from "./codex"

export default combineReducers({
  codex: codexReducer,
})

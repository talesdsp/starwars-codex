import { all } from "redux-saga/effects";
import { codexWatcher } from "./codex/sagas";

export default function* rootSaga() {
  yield all([codexWatcher()]);
}

import { all, takeLatest } from "redux-saga/effects";
import { getData } from "./codex/sagas";
import { CodexTypes } from "./codex/types";

export default function* rootSaga() {
  yield all([takeLatest(CodexTypes.ASYNC_GET_DATA, getData)]);
}

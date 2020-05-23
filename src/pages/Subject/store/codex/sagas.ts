import { call, put, takeLatest } from "redux-saga/effects";
import { swapi } from "../../services/api";
import { failedRequest, setData } from "./actions";
import { CodexTypes } from "./types";

export function codexWatcher() {
  return takeLatest(CodexTypes.ASYNC_GET_DATA, getData);
}

interface Action {
  type: string;
  payload: { urlPath: string };
}

export function* getData(action: Action) {
  try {
    const jsonResponse = yield call(swapi, action.payload.urlPath);
    yield put(setData(jsonResponse));
  } catch (e) {
    yield put(failedRequest());
  }
}

import { AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
import { swapi } from "../../../services/api";
import { failedRequest, setData } from "./actions";

export function* getData(action: AnyAction) {
  try {
    const response: Response = yield call(swapi, action.payload.urlPath);
    const jsonResponse = yield response.json();
    yield put(setData(jsonResponse));
  } catch (e) {
    yield put(failedRequest());
  }
}

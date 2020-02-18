import {all, call, put, takeLatest} from "redux-saga/effects";
import {swapi} from "../../services/api";
import {dataTypes} from "../ducks/data";

function* getData(action) {
  let jsonResponse = yield call(swapi, action.payload);
  yield put({type: dataTypes.SET_DATA, payload: jsonResponse});
}

export default function* rootSaga() {
  yield all([takeLatest(dataTypes.ASYNC_GET_DATA, getData)]);
}

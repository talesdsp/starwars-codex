/* eslint-disable no-undef */
import { applyMiddleware, compose, createStore, Store } from "redux";
import createSaga from "redux-saga";
import { CodexState } from "./ducks/codex/types";
import combinedReducers from "./ducks/rootReducer";
import sagas from "./ducks/rootSaga";

export interface ApplicationState {
  codex: CodexState;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// const dev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSaga();

const store: Store<ApplicationState> = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

export default store;

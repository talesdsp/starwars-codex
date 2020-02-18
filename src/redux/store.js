import {applyMiddleware, compose, createStore} from "redux";
import createSaga from "redux-saga";
import combinedReducers from "./combinedReducers";
import sagas from "./sagas";

const sagaMiddleware = createSaga();

// const dev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combinedReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

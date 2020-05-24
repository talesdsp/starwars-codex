import { Reducer } from "redux";
import { CodexAction, CodexState, CodexTypes } from "./types";

export const initialState: CodexState = {
  data: {
    count: 0,
    previous: null,
    next: null,
    results: [{}, {}, {}, {}, {}],
  },
  isLoading: true,
};

export const codexReducer: Reducer<CodexState, CodexAction> = (state = initialState, action) => {
  switch (action.type) {
    case CodexTypes.SET_DATA:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    case CodexTypes.IS_LOADING:
      return initialState;
    default:
      return initialState;
  }
};

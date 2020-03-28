import { Reducer } from "redux";
import { CodexState, CodexTypes } from "./types";

const initialState: CodexState = {
  data: {
    count: 0,
    previous: null,
    next: null,
    results: [],
  },
  isLoading: false,
};

export const codexReducer: Reducer<CodexState> = (state = initialState, action) => {
  switch (action.type) {
    case CodexTypes.SET_DATA:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    case CodexTypes.IS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

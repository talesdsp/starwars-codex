export const dataTypes = {
  SET_DATA: "SET_DATA",
  IS_LOADING: "IS_LOADING",
  ASYNC_GET_DATA: "ASYNC_GET_CHARACTERS"
};

const get = (urlPath) => ({
  type: dataTypes.ASYNC_GET_DATA,
  payload: urlPath
});

const triggerLoading = () => ({
  type: dataTypes.IS_LOADING
});

export const dataCreators = {
  triggerLoading,
  get
};

const STATE = {
  DATA: {}
};

export default function dataReducer(state = STATE, action) {
  switch (action.type) {
    case dataTypes.SET_DATA:
      return {
        ...action.payload,
        isLoading: false
      };
    case dataTypes.IS_LOADING:
      return {...state, isLoading: true};
    default:
      return state;
  }
}

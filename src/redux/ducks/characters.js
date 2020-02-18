export const Types = {
  SET_CHARACTERS: "SET_CHARACTERS",
  IS_LOADING: "IS_LOADING",
  ASYNC_GET_CHARACTERS: "ASYNC_GET_CHARACTERS"
};

const get = (urlPath) => ({
  type: Types.ASYNC_GET_CHARACTERS,
  payload: urlPath
});

const triggerLoading = () => ({
  type: Types.IS_LOADING
});

export const CharactersCreator = {
  triggerLoading,
  get
};

const STATE = {
  characters: {}
};

export default function characterReducer(state = STATE, action) {
  switch (action.type) {
    case Types.SET_CHARACTERS:
      return {
        characters: action.payload,
        isLoading: false,
        nextUrl: action.payload.next,
        previousUrl: action.payload.previous
      };
    case Types.IS_LOADING:
      return {...state, isLoading: true};
    default:
      return state;
  }
}

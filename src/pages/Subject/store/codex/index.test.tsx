import { testSaga } from "redux-saga-test-plan";
import { swapi } from "../../services/api";
import { failedRequest, setData, triggerLoading } from "./actions";
import { codexReducer, initialState } from "./index";
import { getData } from "./sagas";
import { Codex } from "./types";

const data: Codex = { count: 1, next: "next url", previous: "previous url", results: [{}] };

const set_data = {
  count: 87,
  next: "https://swapi.dev/api/people/",
  previous: null,
  results: [
    {
      name: "Obi-Wan Kenobi",
      height: "182",
      mass: "77",
      hair_color: "auburn, white",
      skin_color: "fair",
      eye_color: "blue-gray",
      birth_year: "57BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/20/",
      films: [
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/5/",
        "https://swapi.dev/api/films/4/",
        "https://swapi.dev/api/films/6/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/1/",
      ],
      species: ["https://swapi.dev/api/species/1/"],
      vehicles: ["https://swapi.dev/api/vehicles/38/"],
      starships: [
        "https://swapi.dev/api/starships/48/",
        "https://swapi.dev/api/starships/59/",
        "https://swapi.dev/api/starships/64/",
        "https://swapi.dev/api/starships/65/",
        "https://swapi.dev/api/starships/74/",
      ],
      created: "2014-12-10T16:16:29.192000Z",
      edited: "2014-12-20T21:17:50.325000Z",
      url: "https://swapi.dev/api/people/10/",
    },
  ],
};
const action = { type: "123", payload: { urlPath: "test" } };

describe("Codex reducer", () => {
  test("Case default return initial value", () => {
    let state = codexReducer(undefined, {
      type: "default",
      payload: initialState,
    });

    expect(state).toEqual(initialState);
  });

  test("Case IS_LOADING return isLoading as truthy", () => {
    let state;
    // @ts-ignore
    state = codexReducer(initialState, triggerLoading());
    expect(state).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test("Case SET_DATA return input data and isLoading as falsy", () => {
    let state;
    // @ts-ignore
    state = codexReducer(initialState, setData(set_data));
    expect(state).toEqual({
      data: state.data,
      isLoading: false,
    });
  });
});

it("works with unit tests", () => {
  testSaga(getData, action)
    .next()
    .call(swapi, action.payload.urlPath)
    .next(data)
    // test it puts correctly
    .put(setData(data))
    .next()
    // assert that the saga is finished
    .isDone();
});

it("trigger catch error", () => {
  testSaga(getData, action)
    .next()
    .call(swapi, action.payload.urlPath)
    .throw(new Error())
    .put(failedRequest())
    .next()
    .isDone();
});

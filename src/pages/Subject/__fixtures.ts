import configureStore from "redux-mock-store";
import { RunSagaOptions, stdChannel } from "redux-saga";
import { ApplicationState } from "./store";
import { Codex, CodexState } from "./store/codex/types";

declare let global: { fetch: jest.Mock<any, any> };

export const fetchedData: Codex = {
  count: 10,
  next: "https://swapi.dev/api/people/",
  previous: "https://swapi.dev/api/people/",
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

export const loadingData: Codex = {
  count: 1,
  previous: null,
  next: null,
  results: [{}],
};

export const mockFetchPromise = Promise.resolve({ json: () => Promise.resolve(fetchedData) });

global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

export const mockGlobal = global;

export const dispatchedActions: any[] = [];

export const channel = stdChannel();

export const fakeStore: RunSagaOptions<any, any> = {
  channel,
  getState: () => "initial",
  dispatch: (action) => dispatchedActions.push(action),
};

const reducer = (state: CodexState) => ({ codex: state });

export const mockStore = configureStore<ApplicationState>()(
  reducer({ data: fetchedData, isLoading: false })
);
export const mockEmpty = configureStore<ApplicationState>()(
  reducer({ data: loadingData, isLoading: true })
);

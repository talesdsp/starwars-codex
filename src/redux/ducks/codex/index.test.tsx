import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../../../App";
import "../../../setupTest";
import { codexReducer, initialState } from "./index";
import { CodexTypes } from "./types";

describe("Codex reducer", () => {
  test("Case default return initial value", () => {
    let state = codexReducer(initialState, {
      type: "other",
      payload: initialState,
    });

    expect(state).toEqual(initialState);
  });

  test("Case IS_LOADING return isLoading as truthy", () => {
    let state;
    state = codexReducer(initialState, {
      type: CodexTypes.IS_LOADING,
      payload: initialState,
    });
    expect(state).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test("Case SET_DATA return input data and isLoading as falsy", () => {
    let state;
    state = codexReducer(initialState, {
      type: CodexTypes.SET_DATA,
      payload: {
        data: {
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
        },
        isLoading: true,
      },
    });
    expect(state).toEqual({
      data: state.data,
      isLoading: false,
    });
  });
});

const mockStore = configureStore();

describe("<User />", () => {
  let wrapper: any;

  const props: any = {
    handleSubmit: jest.fn(),
  };

  it("Defines the component", () => {
    wrapper = mount(
      <Provider store={mockStore()}>
        <App {...props} />
      </Provider>
    );

    expect(wrapper).toBeDefined();
  });
});

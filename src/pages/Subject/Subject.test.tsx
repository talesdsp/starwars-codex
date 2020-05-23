// @ts-nocheck
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";
import * as redux from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { ApplicationState } from "../../redux";
import { CodexState } from "../../redux/ducks/codex/types";
import Subject, { selector } from "./Subject";
const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const mockGoBack = jest.fn();
const mockPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    goBack: mockGoBack,
    push: mockPush,
  }),
}));

const use_dispatcher = jest.spyOn(redux, "useDispatch");

const initial_state = {
  data: {
    count: 10,
    previous: "previous",
    next: "next",
    results: [{ name: "people", gender: "male", mass: "12", height: "12" }],
  },
  isLoading: false,
};

const nullState = {
  data: { count: 1, previous: null, next: null, results: [{}] },
  isLoading: false,
};

const mockMatch = {
  params: {
    theme: "people",
  },
};
const history = jest.fn();
const location = jest.fn();

const reducer = (state: CodexState) => ({ codex: state });
const mockStore = configureStore<ApplicationState>()(reducer(initial_state));
const mockEmpty = configureStore<ApplicationState>()(reducer(nullState));

let use_effect: jest.spyOn<typeof React, "useEffect">;

describe("Subject.tsx", () => {
  it("take snapshot", () => {
    const snap = renderer
      .create(
        <redux.Provider store={mockStore}>
          <Subject history={history} location={location} match={mockMatch} />
        </redux.Provider>
      )
      .toJSON();
    expect(snap).toMatchSnapshot();
  });

  let result: { container: HTMLElement };

  beforeEach(async () => {
    use_effect = jest.spyOn(React, "useEffect");

    use_effect.mockImplementationOnce((f) => f());

    result = render(
      <redux.Provider store={mockStore}>
        <Subject history={history} location={location} match={mockMatch} />
      </redux.Provider>
    );
  });

  afterEach(() => {
    use_dispatcher.mockClear();
    use_effect.mockClear();
    mockDispatch.mockClear();
  });

  it("render component correctly", () => {
    expect(use_effect).toBeCalled();
    expect(use_dispatcher).toBeCalled();
    expect(mockDispatch).toBeCalledTimes(2);
  });

  it("get data from selector", () => {
    expect(use_dispatcher).toBeCalled();
    expect(selector(mockStore.getState()));
  });
});

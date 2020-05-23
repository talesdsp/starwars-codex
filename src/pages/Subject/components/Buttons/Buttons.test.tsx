import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import { ApplicationState } from "../../../../redux";
import { CodexState } from "../../../../redux/ducks/codex/types";
import Buttons, { selector } from "./Buttons";

const mockGoBack = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    goBack: mockGoBack,
  }),
}));

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

const use_selector = jest.spyOn(redux, "useSelector");
const use_dispatcher = jest.spyOn(redux, "useDispatch");

const initial_state = {
  data: { count: 10, previous: "previous", next: "next", results: [{}] },
  isLoading: false,
};

const nullState = {
  data: { count: 1, previous: null, next: null, results: [{}] },
  isLoading: false,
};

const reducer = (state: CodexState) => ({ codex: state });
const mockStore = configureStore<ApplicationState>()(reducer(initial_state));
const mockEmpty = configureStore<ApplicationState>()(reducer(nullState));

describe("Buttons.tsx", () => {
  describe("store on", () => {
    let result: { container: HTMLElement };

    beforeEach(async () => {
      result = render(
        <redux.Provider store={mockStore}>
          <Buttons theme="people" />
        </redux.Provider>
      );
    });

    afterEach(() => {
      use_dispatcher.mockClear();
      mockDispatch.mockClear();
    });

    it("render component correctly", () => {
      expect(result.container).toMatchSnapshot();
      expect(use_dispatcher).toBeCalled();
    });

    it("get data from selector", () => {
      expect(use_dispatcher).toBeCalled();
      expect(selector(mockStore.getState()));
    });

    it("trigger onClick handler", () => {
      const button = screen.getByText(/Next/g);
      fireEvent.click(button);
      expect(use_dispatcher).toBeCalledTimes(1);
      expect(mockGoBack).not.toBeCalled();
      expect(mockDispatch).toBeCalledTimes(2);
    });

    it("trigger onClick handler", () => {
      const button = screen.getByText(/\d/g);
      fireEvent.click(button);
      expect(use_dispatcher).toBeCalledTimes(1);
      expect(mockDispatch).toBeCalledTimes(2);
    });
  });

  describe("store off", () => {
    let result: { container: HTMLElement };

    beforeEach(async () => {
      result = render(
        <redux.Provider store={mockEmpty}>
          <Buttons theme="people" />
        </redux.Provider>
      );
    });

    afterEach(() => {
      use_dispatcher.mockClear();
      mockGoBack.mockClear();
    });

    it("renders", () => {
      expect(result.container).toMatchSnapshot();
    });

    it("trigger onClick handler", () => {
      const button = screen.getByText(/Go Back/g);
      fireEvent.click(button);
      expect(mockGoBack).toBeCalled();
      expect(mockDispatch).not.toBeCalled();
    });

    it("trigger onClick handler", () => {
      const button = screen.getByText(/Next/g);
      fireEvent.click(button);
      expect(mockGoBack).not.toBeCalled();
      expect(mockDispatch).not.toBeCalled();
    });
  });
});

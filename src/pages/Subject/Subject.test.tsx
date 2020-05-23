// @ts-nocheck
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";
import * as redux from "react-redux";
import renderer from "react-test-renderer";
import Subject, { selector } from "./Subject";
import { mockEmpty, mockStore } from "./__fixtures";
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

const mockMatch = {
  params: {
    theme: "people",
  },
};
const history = jest.fn();
const location = jest.fn();

let use_effect: jest.spyOn<typeof React, "useEffect">;

describe("Subject.tsx", () => {
  describe("render", () => {
    beforeEach(() => {
      use_effect = jest.spyOn(React, "useEffect");
      use_effect.mockImplementationOnce((f) => f());
      render(
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
      expect(mockDispatch).toBeCalledTimes(2);
    });
  });

  describe("snapshots", () => {
    it("render with data", () => {
      const snap = renderer
        .create(
          <redux.Provider store={mockStore}>
            <Subject history={history} location={location} match={mockMatch} />
          </redux.Provider>
        )
        .toJSON();
      expect(snap).toMatchSnapshot();
    });

    it("render with Spinner", () => {
      const snap = renderer
        .create(
          <redux.Provider store={mockEmpty}>
            <Subject history={history} location={location} match={mockMatch} />
          </redux.Provider>
        )
        .toJSON();
      expect(snap).toMatchSnapshot();
      expect(mockDispatch).toBeCalledTimes(2);
    });
  });
});

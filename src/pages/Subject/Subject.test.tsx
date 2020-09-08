import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import * as React from "react"
import * as redux from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"
import renderer from "react-test-renderer"
import Subject, { selector } from "./Subject"
import { fetchedData, mockEmpty, mockStore } from "./__fixtures"

jest.mock("~/utils")

const mockDispatch = jest.fn()

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}))

const mockGoBack = jest.fn()
const mockPush = jest.fn()

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    goBack: mockGoBack,
    push: mockPush,
  }),
}))

const use_dispatcher = jest.spyOn(redux, "useDispatch")

const mockMatch = {
  params: {
    theme: "people",
  },
  path: "",
  isExact: true,
  url: "",
}

let use_effect: jest.SpyInstance<
  void,
  [React.EffectCallback, (React.DependencyList | undefined)?]
>

describe("Subject.tsx", () => {
  describe("render", () => {
    beforeEach(() => {
      use_effect = jest.spyOn(React, "useEffect")
      use_effect.mockImplementationOnce((f) => f())
      render(
        <redux.Provider store={mockStore}>
          <BrowserRouter>
            <Route
              render={(props) => <Subject {...props} match={mockMatch} />}
            />
          </BrowserRouter>
        </redux.Provider>,
      )
    })

    afterEach(() => {
      use_dispatcher.mockClear()
      use_effect.mockClear()
      mockDispatch.mockClear()
    })

    it("render component correctly", () => {
      expect(use_effect).toBeCalled()
      expect(use_dispatcher).toBeCalled()
      expect(mockDispatch).toBeCalledTimes(2)
    })

    it("get data from selector", () => {
      expect(use_dispatcher).toBeCalled()
      expect(selector(mockStore.getState())).toEqual({
        data: fetchedData,
        isLoading: false,
      })
      expect(mockDispatch).toBeCalledTimes(2)
    })
  })

  describe("snapshots", () => {
    it("render with data", () => {
      const snap = renderer
        .create(
          <redux.Provider store={mockStore}>
            <BrowserRouter>
              <Route
                render={(props) => <Subject {...props} match={mockMatch} />}
              />
            </BrowserRouter>
          </redux.Provider>,
        )
        .toJSON()
      expect(snap).toMatchSnapshot()
    })

    it("render with Spinner", () => {
      const snap = renderer
        .create(
          <redux.Provider store={mockEmpty}>
            <BrowserRouter>
              <Route
                render={(props) => <Subject {...props} match={mockMatch} />}
              />
            </BrowserRouter>
          </redux.Provider>,
        )
        .toJSON()
      expect(snap).toMatchSnapshot()
      expect(mockDispatch).toBeCalledTimes(2)
    })
  })
})

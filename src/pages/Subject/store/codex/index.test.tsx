import { runSaga } from "redux-saga";
import { testSaga } from "redux-saga-test-plan";
import { swapi } from "../../services/api";
import { dispatchedActions, fakeStore, fetchedData, mockGlobal } from "../../__fixtures";
import { failedRequest, getAsyncData, setData, triggerLoading } from "./actions";
import { codexReducer, initialState } from "./index";
import { getData } from "./sagas";

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
    state = codexReducer(initialState, setData(fetchedData));
    expect(state).toEqual({
      data: state.data,
      isLoading: false,
    });
  });
});

describe("getData()*", () => {
  describe("assert logic", () => {
    it("fetch data, update reducer, finish", () => {
      testSaga(getData, action)
        .next()
        .call(swapi, action.payload.urlPath)
        .next(fetchedData)
        // test it puts correctly
        .put(setData(fetchedData))
        .next()
        // assert that the saga is finished
        .isDone();
    });

    it("fail request, trigger catch error, finish", () => {
      testSaga(getData, action)
        .next()
        .call(swapi, action.payload.urlPath)
        .throw(new Error())
        .put(failedRequest(new Error()))
        .next()
        .isDone();
    });
  });

  describe("assert proper execution", () => {
    afterEach(() => {
      mockGlobal.fetch.mockClear();
    });
    it("catch error for undefined payload", () => {
      // @ts-ignore
      runSaga(fakeStore, getData);

      expect(mockGlobal.fetch.mock.calls.length).toEqual(0);
      expect(dispatchedActions[0]).toEqual(
        failedRequest(new TypeError("Cannot read property 'payload' of undefined"))
      );
    });

    it("catch error for undefined path", () => {
      // @ts-ignore
      runSaga(fakeStore, getData, getAsyncData);

      expect(mockGlobal.fetch.mock.calls.length).toEqual(0);
      expect(dispatchedActions[1]).toEqual(
        failedRequest(new TypeError("Cannot read property 'urlPath' of undefined"))
      );
    });

    it("executes getData correctly", async () => {
      await runSaga(fakeStore, getData, getAsyncData("test")).toPromise();
      expect(mockGlobal.fetch.mock.calls.length).toEqual(1);
      expect(dispatchedActions[2]).toEqual(setData(fetchedData));
    });
  });
});

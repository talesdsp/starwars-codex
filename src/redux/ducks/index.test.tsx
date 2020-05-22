import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MulticastChannel, runSaga, RunSagaOptions, stdChannel } from "redux-saga";
import App from "../../App";
import "../../setupTest";
import { failedRequest, getAsyncData, setData } from "./codex/actions";
import { getData } from "./codex/sagas";
import rootSaga from "./rootSaga";

describe("Provide app", () => {
  const mockStore = configureStore();

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

declare let global: { fetch: jest.Mock<any, any> };

describe("rootSaga", () => {
  const set_value = { count: 1, next: "qwe", previous: "12e", results: [{}] };
  const mockFetchPromise = Promise.resolve({ json: () => Promise.resolve(set_value) });

  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  let dispatchedActions: any[];
  let fakeStore: RunSagaOptions<any, string>;
  let channel: MulticastChannel<unknown>;
  dispatchedActions = [];

  beforeEach(() => {
    channel = stdChannel();
    fakeStore = {
      channel,
      getState: () => "initial",
      dispatch: (action: any) => dispatchedActions.push(action),
    };
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it("trigger catch for getData", () => {
    // @ts-ignore
    runSaga(fakeStore, getData);

    expect(global.fetch.mock.calls.length).toEqual(0);
    expect(dispatchedActions[0]).toEqual(failedRequest());
  });

  it("executes getData correctly", async () => {
    await runSaga(fakeStore, getData, getAsyncData("test")).toPromise();
    expect(global.fetch.mock.calls.length).toEqual(1);
    expect(dispatchedActions[1]).toEqual(setData(set_value));
  });

  it("triggers takeLatest and call getData(), but unfortunately doesn't resolve promise", () => {
    runSaga(fakeStore, rootSaga);
    channel.put(getAsyncData("test"));
    expect(global.fetch.mock.calls.length).toEqual(1);
  });
  it("takes the promised data from test above", () => {
    expect(dispatchedActions[2]).toEqual(setData(set_value));
  });
});

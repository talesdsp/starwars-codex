import { runSaga } from "redux-saga";
import { channel, dispatchedActions, fakeStore, fetchedData, mockGlobal } from "../__fixtures";
import { getAsyncData, setData } from "./codex/actions";
import rootSaga from "./rootSaga";

describe("rootSaga", () => {
  afterEach(() => {
    mockGlobal.fetch.mockClear();
  });

  it("triggers takeLatest and call getData(), but unfortunately doesn't resolve promise", () => {
    runSaga(fakeStore, rootSaga);
    channel.put(getAsyncData("test"));
    expect(mockGlobal.fetch.mock.calls.length).toEqual(1);
  });
  it("takes the promised data from test above", () => {
    expect(dispatchedActions[0]).toEqual(setData(fetchedData));
  });
});

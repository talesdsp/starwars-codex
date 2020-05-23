import { API_URL, extractPathFromUrl, swapi } from "./api";

const mockFetchPromise = Promise.resolve({ json: () => Promise.resolve({ data: "test" }) });

declare let global: { fetch: jest.Mock<any, any> };
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe("estractPathFromUrl", () => {
  it(" not return params from the url", () => {
    expect(extractPathFromUrl(API_URL)).toEqual(API_URL);
  });

  it(" return params from the url", () => {
    expect(extractPathFromUrl(API_URL + "/people/1")).toEqual("people/1");
  });
  it(" return params from the url", () => {
    expect(extractPathFromUrl(API_URL + "/planets/?page=2")).toEqual("planets/?page=2");
  });
});

describe("swapi()", () => {
  it(" return data from call", async () => {
    const result = await swapi("param");
    expect(result.data).toEqual("test");
  });
});

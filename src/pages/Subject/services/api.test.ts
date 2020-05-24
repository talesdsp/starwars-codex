import { API_URL, extractPathFromUrl, swapi } from "./api";

declare let global: { fetch: jest.Mock<any, any> };
global.fetch = jest
  .fn()
  .mockImplementation((p) => Promise.resolve({ json: () => Promise.resolve(p) }));

describe("estractPathFromUrl", () => {
  it("return no params from the url", () => {
    expect(extractPathFromUrl(API_URL)).toEqual(API_URL);
  });

  it("return params from the url", () => {
    expect(extractPathFromUrl(API_URL + "/people/1")).toEqual("people/1");
  });

  it("return queries from the url", () => {
    expect(extractPathFromUrl(API_URL + "/planets/?page=2")).toEqual("planets/?page=2");
  });
});

describe("swapi()", () => {
  it("return data from url param", async () => {
    const result = await swapi("param");
    expect(result).toEqual(API_URL + "/param/");
  });

  it("return data from url query", async () => {
    const result = await swapi("?page=2");
    expect(result).toEqual(API_URL + "/?page=2");
  });

  it("return undefined if no param passed", async () => {
    const result = await swapi();
    expect(result).toEqual(undefined);
  });
});

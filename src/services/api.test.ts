import { API_URL, extractPathFromUrl, swapi } from "./api";

declare let global: { fetch: {} };
global.fetch = jest.fn(() => Promise.resolve({ data: "test" }));

describe("Api", () => {
  describe("estractPathFromUrl", () => {
    it(" not return params from the url", () => {
      expect(extractPathFromUrl(API_URL)).toEqual(API_URL);
    });

    it(" return params from the url", () => {
      expect(extractPathFromUrl(API_URL + "/people/1")).toEqual("people/1");
    });
    it(" return params from the url", () => {
      expect(extractPathFromUrl(API_URL + "/planets/?page=2")).toEqual(
        "planets/?page=2"
      );
    });
  });
  describe("swapi()", () => {
    it(" return data from api call", async () => {
      //@ts-ignore
      const result = (await swapi(API_URL)) as { data: string };
      expect(result.data).toEqual("test");
    });
  });
});

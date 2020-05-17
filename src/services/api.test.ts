import { API_URL, extractPathFromUrl, swapi } from "./api";

const mockRequest = jest.fn(() => Promise.resolve({ data: "test" }));

describe("Api", () => {
  describe("estractPathFromUrl", () => {
    it("Should not return params from the url", () => {
      expect(extractPathFromUrl(API_URL)).toEqual(API_URL);
    });

    it("Should return params from the url", () => {
      expect(extractPathFromUrl(API_URL + "/people/1")).toEqual("people/1");
    });
  });
  describe("swapi()", () => {
    it("Should return data from api call", async () => {
      //@ts-ignore
      const result = (await swapi(API_URL, mockRequest)) as { data: string };
      expect(result.data).toEqual("test");
    });
  });
});

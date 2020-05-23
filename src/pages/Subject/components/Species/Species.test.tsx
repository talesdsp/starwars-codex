import React from "react";
import renderer from "react-test-renderer";
import { ISpecies } from "../types";
import Species from "./Species";

describe("Species.tsx", () => {
  it("render Species component with correct data", () => {
    const results: ISpecies = {
      average_height: "2.1",
      average_lifespan: "400",
      classification: "Mammal",
      created: "2014-12-10T16:44:31.486000Z",
      designation: "Sentient",
      edited: "2014-12-10T16:44:31.486000Z",
      eye_colors: "blue, green, yellow, brown, golden, red",
      hair_colors: "black, brown",
      homeworld: "https://swapi.dev/api/planets/14/",
      language: "Shyriiwook",
      name: "Wookie",
      people: ["https://swapi.dev/api/people/13/"],
      films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/"],
      skin_colors: "gray",
      url: "https://swapi.dev/api/species/3/",
    };
    const component = renderer.create(<Species results={[results]} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

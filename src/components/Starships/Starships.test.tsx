import React from "react";
import renderer from "react-test-renderer";
import { IStarships } from "../types";
import Starships from "./Starships";

describe("Starships.tsx", () => {
  it("render Starships component with correct data", () => {
    const results: IStarships = {
      MGLT: "10 MGLT",
      cargo_capacity: "1000000000000",
      consumables: "3 years",
      cost_in_credits: "1000000000000",
      created: "2014-12-10T16:36:50.509000Z",
      crew: "342953",
      edited: "2014-12-10T16:36:50.509000Z",
      hyperdrive_rating: "4.0",
      length: "120000",
      manufacturer:
        "Imperial Department of Military Research, Sienar Fleet Systems",
      max_atmosphering_speed: "n/a",
      model: "DS-1 Orbital Battle Station",
      name: "Death Star",
      passengers: "843342",
      films: ["https://swapi.dev/api/films/1/"],
      pilots: [],
      starship_class: "Deep Space Mobile Battlestation",
      url: "https://swapi.dev/api/starships/9/",
    };
    const component = renderer.create(
      <Starships results={[results]} closeModal={jest.fn(() => {})} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

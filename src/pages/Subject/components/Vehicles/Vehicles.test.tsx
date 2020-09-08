import React from "react"
import renderer from "react-test-renderer"
import { IVehicles } from "../types"
import Vehicles from "./Vehicles"

describe("Starships.tsx", () => {
  it("render Starships component with correct data", () => {
    const results: IVehicles = {
      cargo_capacity: "50000",
      consumables: "2 months",
      cost_in_credits: "150000",
      created: "2014-12-10T15:36:25.724000Z",
      crew: "46",
      edited: "2014-12-10T15:36:25.724000Z",
      length: "36.8",
      manufacturer: "Corellia Mining Corporation",
      max_atmosphering_speed: "30",
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30",
      pilots: [],
      films: ["https://swapi.dev/api/films/1/"],
      url: "https://swapi.dev/api/vehicles/4/",
      vehicle_class: "wheeled",
    }
    const component = renderer.create(<Vehicles results={[results]} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})

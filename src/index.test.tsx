import React from "react"
import renderer from "react-test-renderer"
import App from "./App"

describe("index.tsx", () => {
  it("renders without crashing", () => {
    const component = renderer.create(<App />).toJSON()

    expect(component).toMatchSnapshot()
  })
})

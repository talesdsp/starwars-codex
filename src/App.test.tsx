import { render } from "@testing-library/react"
import React from "react"
import App from "./App"
import "./setupTest"

describe("<App />", () => {
  it("render", () => {
    const result = render(<App />)
    expect(result.container).toMatchSnapshot()
  })
})

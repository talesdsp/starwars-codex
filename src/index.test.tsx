import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import App from "./App";

describe("index.tsx", () => {
  it("renders without crashing ", () => {
    const component = renderer.create(<App />).toJSON();

    expect(component).toMatchSnapshot();

    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

import { shallow } from "enzyme";
import React from "react";
import App from "./App";
import "./setupTest";

describe("<App />", () => {
  it(" render", () => {
    const component = shallow(<App />);
    expect(component.name()).toStrictEqual("BrowserRouter");
  });
});

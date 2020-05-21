import React from "react";
import renderer from "react-test-renderer";
import "../../setupTest";
import { Button, Window } from "./index";

describe("Window", () => {
  it("have animation", () => {
    expect(renderer.create(<Window shake />).toJSON()).toMatchSnapshot();
  });
  it("have NO animation", () => {
    expect(renderer.create(<Window />).toJSON()).toMatchSnapshot();
  });
});

describe("Button", () => {
  it("render default style rules", () => {
    expect(renderer.create(<Button />).toJSON()).toMatchSnapshot();
  });

  it("enable pagination styling", () => {
    expect(renderer.create(<Button paginate />).toJSON()).toMatchSnapshot();
  });

  it("enable off button styling", () => {
    expect(renderer.create(<Button off />).toJSON()).toMatchSnapshot();
  });
});

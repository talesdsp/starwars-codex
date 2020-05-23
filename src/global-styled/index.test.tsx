import React from "react";
import renderer from "react-test-renderer";
import "../setupTest";
import { globalButton, globalWindow } from "./index";

const Button = globalButton;
const Window = globalWindow;

describe("globalWindow", () => {
  it("have animation", () => {
    expect(renderer.create(<Window shake />).toJSON()).toMatchSnapshot();
  });
  it("have NO animation", () => {
    expect(renderer.create(<Window />).toJSON()).toMatchSnapshot();
  });
});

describe("globalButton", () => {
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

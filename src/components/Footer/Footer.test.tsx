import React from "react";
import renderer from "react-test-renderer";
import "../../setupTest";
import { TutorialKey } from "./Footer";

describe("Footer.tsx", () => {
  it("Default case", () => {
    expect(renderer.create(<TutorialKey />)).toMatchSnapshot();
  });
  it("With extra space", () => {
    expect(renderer.create(<TutorialKey space />)).toMatchSnapshot();
  });
});

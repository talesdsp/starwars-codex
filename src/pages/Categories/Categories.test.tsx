import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";
import Categories from "./Categories";

const use_effect = jest.spyOn(React, "useEffect");

const history = {
  push: jest.fn((url) => url),
  goBack: jest.fn((url) => url),
};

describe("Categories.tsx", () => {
  let result: { container: HTMLElement };

  beforeEach(() => {
    // @ts-ignore
    result = render(<Categories history={history} />);
  });

  it("render component correctly", () => {
    expect(result.container).toMatchSnapshot();
  });

  it("initialize component", () => {
    expect(use_effect).toBeCalled();
  });

  it("trigger onClick handler for each button", () => {
    screen.getAllByRole("button").map((v, i) => fireEvent.click(v));

    expect(history.push).toBeCalledTimes(6);
    expect(history.goBack).toBeCalledTimes(1);
  });
});

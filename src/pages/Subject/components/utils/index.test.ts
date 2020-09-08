//@ts-nocheck
import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"
import { closeModal } from "./index"

describe("components", () => {
  let closeButton
  beforeEach(() => {
    document.body.innerHTML =
      "<div>" +
      "<div><button id='b1'></button></div>" +
      "<div data-preview='true'><button id='b2' data-testid='close'></button></div>" +
      "<div><button id='b3'></button></div>" +
      "<div><button id='b4'></button></div>" +
      "</div>"

    closeButton = screen.getByTestId("close")
  })

  it("closes modal removing data-attribute", () => {
    expect(closeButton.parentElement).toHaveAttribute("data-preview", "true")
    closeModal({ target: closeButton })
    expect(closeButton.parentElement).not.toHaveAttribute("data-preview")
  })
})

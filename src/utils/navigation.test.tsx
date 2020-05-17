import "@testing-library/jest-dom";
import "../setupTest";
import {
  getNodeListOfButtons,
  togglePreviewAttribute,
  updateActiveButtonOnKeyUp,
} from "./navigation";

describe("Utils", () => {
  describe("Navigation", () => {
    let mockPreview: jest.Mock;
    let list_of_buttons: NodeListOf<HTMLButtonElement>;
    let up_arrow: { keyCode: number };
    let down_arrow: { keyCode: number };

    beforeEach(() => {
      document.body.innerHTML =
        "<div><button></button><hr id='0'/></div" +
        "<div><button></button><hr id='1'/></div" +
        "<div><button></button><hr id='2'/></div" +
        "<div><button></button><hr id='3' data-preview='true'/></div";

      mockPreview = jest.fn(() => togglePreviewAttribute(getNodeListOfButtons()));
      list_of_buttons = getNodeListOfButtons();
      up_arrow = { keyCode: 40 };
      down_arrow = { keyCode: 38 };
    });

    describe("getNodeListOfButtons()", () => {
      it("Should get an array of 4 buttons", () => {
        expect(list_of_buttons).toHaveLength(4);
      });

      it("Should get 0 buttons", () => {
        document.body.innerHTML = "<div> </div>";
        expect(getNodeListOfButtons()).toHaveLength(0);
      });
    });

    describe("togglePreviewAttribute()", () => {
      it("Should add property data-preview to focused element", () => {
        list_of_buttons[1].focus();
        expect(togglePreviewAttribute(list_of_buttons)).toEqual(list_of_buttons[1].nextSibling);
      });

      it("Should remove property data-preview from unfocused element", () => {
        expect(list_of_buttons[3].nextSibling).toHaveAttribute("data-preview", "true");

        list_of_buttons[1].focus();
        togglePreviewAttribute(list_of_buttons);

        expect(list_of_buttons[3].nextSibling).not.toHaveAttribute("data-preview", "true");
      });
    });

    describe("updateActiveButtonOnKeyUp()", () => {
      describe("Unit tests", () => {
        it("Should not increment index if index === array.length", () => {
          const length = list_of_buttons.length;
          expect(updateActiveButtonOnKeyUp(up_arrow, list_of_buttons, length, mockPreview)).toEqual(
            length
          );
        });

        it("Should not increment index if index === array.length - 1", () => {
          const length = list_of_buttons.length;
          expect(
            updateActiveButtonOnKeyUp(up_arrow, list_of_buttons, length - 1, mockPreview)
          ).toEqual(length - 1);
        });

        it("Should increment index if index < array.length - 1", () => {
          const length = list_of_buttons.length;
          expect(
            updateActiveButtonOnKeyUp(up_arrow, list_of_buttons, length - 1 - 1, mockPreview)
          ).toEqual(length - 1);
        });

        it("Should not decrement index value if index === 0", () => {
          expect(updateActiveButtonOnKeyUp(down_arrow, list_of_buttons, 0, mockPreview)).toEqual(0);
        });

        it("Should decrement index if index > 0", () => {
          expect(updateActiveButtonOnKeyUp(down_arrow, list_of_buttons, 1, mockPreview)).toEqual(0);
        });
      });

      describe("Integration tests", () => {
        it("Should trigger togglePreviewAttribute()", () => {
          updateActiveButtonOnKeyUp(down_arrow, list_of_buttons, 1, mockPreview);

          expect(mockPreview).toBeCalled();
          expect(mockPreview.mock.calls.length).toEqual(1);

          updateActiveButtonOnKeyUp(down_arrow, list_of_buttons, 1, mockPreview);
          expect(mockPreview.mock.calls.length).toEqual(2);
        });

        it("Should return immediately", () => {
          expect(
            updateActiveButtonOnKeyUp({ keyCode: 10 }, list_of_buttons, 1, mockPreview)
          ).toEqual(1);

          expect(mockPreview).not.toBeCalled();
        });
      });
    });
  });
});

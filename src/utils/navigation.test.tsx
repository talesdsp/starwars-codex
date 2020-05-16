import "../setupTest";
import { getButton, setModal } from "./navigation";

describe("Utils", () => {
  let mockModal: jest.Mock;
  let index: number;
  beforeEach(() => {
    document.body.innerHTML =
      "<div><button></button><hr id='1'/></div" +
      "<div><button></button><hr id='2'/></div" +
      "<div><button></button><hr id='3'/></div" +
      "<div><button></button><hr id='4' data-openpreview='true'/></div";

    mockModal = jest.fn(() => setModal(getButton()));
    index = 1;
  });

  it("Should get an array of 4 buttons", () => {
    expect(getButton()).toHaveLength(4);
  });
  it("Should get 0 buttons", () => {
    document.body.innerHTML = "<div> </div>";
    expect(getButton()).toHaveLength(0);
  });
});

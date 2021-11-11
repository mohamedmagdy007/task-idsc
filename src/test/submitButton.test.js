import { fireEvent, render, screen } from "@testing-library/react";
import Aside from "../Components/Aside";

describe("submit button", function () {
  test("button next", function () {
    const mocked = render(<Aside onClick={()=>{}} />);
   const btn= mocked.getByTestId("button-next");
    expect(btn.textContent).toEqual(">");
  });
});

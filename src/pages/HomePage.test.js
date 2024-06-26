import { render } from "@testing-library/react";
import HomePage from "./HomePage";
import { MemoryRouter } from "react-router-dom";

describe(HomePage, () => {
  it("Welcome message displays 'Bienvenidos'", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const welcomeMsg = getByTestId("welcome").textContent;
    expect(welcomeMsg).toEqual("Bienvenidos");
  });
});

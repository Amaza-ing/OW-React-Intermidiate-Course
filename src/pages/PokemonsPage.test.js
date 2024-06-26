import { fireEvent, render } from "@testing-library/react";
import PokemonsPage from "./PokemonsPage";
import { UserProviderWrapper } from "../context/user.context";

jest.mock("../components/PokemonList.jsx", () => {
  return {
    __esModule: true,
    default: () => <></>,
  };
});

describe(PokemonsPage, () => {
  it("Hello message should say 'Hola Adrián", () => {
    const { getByTestId } = render(
      <UserProviderWrapper>
        <PokemonsPage />
      </UserProviderWrapper>
    );

    const userHello = getByTestId("user-hello").textContent;
    expect(userHello).toEqual("Hola Adrián");
  });

  it("Hello message should change to 'Hola María' after clicking the button", () => {
    const { getByTestId, getByRole } = render(
      <UserProviderWrapper>
        <PokemonsPage />
      </UserProviderWrapper>
    );

    const changeNameBtn = getByRole("button", { name: "Change Name" });
    fireEvent.click(changeNameBtn);

    const userHello = getByTestId("user-hello").textContent;
    expect(userHello).toEqual("Hola María");
  });
});

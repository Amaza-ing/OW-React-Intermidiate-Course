import { render, screen } from "@testing-library/react";
import * as api from "../api";
import { PokemonProviderWrapper } from "../context/pokemon.context";
import PokemonPage from "./PokemonPage";
import { MemoryRouter } from "react-router-dom";

jest.mock("../api");

describe("Pokemon Page", () => {
  it("Should get bulbasaur", async () => {
    api.fetchPokemon.mockResolvedValue({
      name: "bulbasaur",
      sprites: {
        front_default: "picture.jpg",
      },
      stats: [
        {
          base_stat: 4,
        },
        {
          base_stat: 5,
        },
        {
          base_stat: 6,
        },
      ],
    });

    const { getByTestId } = render(
      <MemoryRouter>
        <PokemonProviderWrapper>
          <PokemonPage />
        </PokemonProviderWrapper>
      </MemoryRouter>
    );

    expect(await screen.findByText("BULBASAUR")).toBeVisible();
  });
});

import { render, screen } from "@testing-library/react";
import { PokemonContext } from "../context/pokemon.context";
import PokemonPage from "./PokemonPage";
import { MemoryRouter } from "react-router-dom";

describe("Pokemon Page", () => {
  it("Should get bulbasaur", async () => {
    const fetchPokemon = (id) => ({
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

    render(
      <MemoryRouter>
        <PokemonContext.Provider value={{ fetchPokemon }}>
          <PokemonPage />
        </PokemonContext.Provider>
      </MemoryRouter>
    );

    expect(await screen.findByText("BULBASAUR")).toBeVisible();
  });
});

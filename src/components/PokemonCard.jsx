import React from "react";
import "./PokemonCard.css";

function PokemonCard(props) {
  const { pokemon, selectPokemon, selectPokemon2 } = props;

  console.log("Pokemon Card rendered");

  return (
    <li
      className="pokemon-card"
      onClick={() => selectPokemon(pokemon)}
      onAuxClick={() => selectPokemon2(pokemon)}
    >
      <h2 className="text">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt="pokemon img"
        className="pokemon-img"
      />
      <h3 className="text">HP: {pokemon.stats[0].base_stat}</h3>
    </li>
  );
}

export default React.memo(PokemonCard);

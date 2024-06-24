import "./PokemonList.css";
import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/pokemon.context";
import PokemonCard from "./PokemonCard";
import GetForm from "./GetForm";

function PokemonList(props) {
  const { pokemons, setPokemons, fetchPokemon } = useContext(PokemonContext);

  useEffect(() => {
    getPokemons(1, 10);
  }, []);

  const getPokemons = async (from, to) => {
    const pkmnArr = [];

    for (let i = from; i <= to; i++) {
      const pokemon = await fetchPokemon(i);
      pkmnArr.push(pokemon);
    }

    setPokemons(pkmnArr);
  };

  const pokemonCards = pokemons.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.id}
        pokemon={pokemon}
        selectPokemon={props.selectPokemon}
        selectPokemon2={props.selectPokemon2}
      ></PokemonCard>
    );
  });

  return (
    <div>
      <GetForm getPokemons={getPokemons}></GetForm>
      <ul className="pokemon-list">{pokemonCards}</ul>
    </div>
  );
}

export default PokemonList;

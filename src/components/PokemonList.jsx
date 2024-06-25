import "./PokemonList.css";
import { useContext, useEffect, useMemo } from "react";
import { PokemonContext } from "../context/pokemon.context";
import PokemonCard from "./PokemonCard";
import GetForm from "./GetForm";
import { FixedSizeList } from "react-window";

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

  const pokemonCards = useMemo(
    () =>
      pokemons.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            selectPokemon={props.selectPokemon}
            selectPokemon2={props.selectPokemon2}
          ></PokemonCard>
        );
      }),
    [pokemons]
  );

  const renderRow = ({ index, style }) => (
    <div style={{ ...style, display: "flex", justifyContent: "center" }}>
      <>{pokemonCards[index]}</>
    </div>
  );

  return (
    <div>
      <GetForm getPokemons={getPokemons}></GetForm>
      <ul className="pokemon-list">
        <FixedSizeList
          height={400}
          width={"100vw"}
          itemCount={pokemons.length}
          itemSize={400}
        >
          {renderRow}
        </FixedSizeList>
      </ul>
    </div>
  );
}

export default PokemonList;

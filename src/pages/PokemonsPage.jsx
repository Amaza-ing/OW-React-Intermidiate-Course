import "./PokemonsPage.css";

import { useState } from "react";

import PokemonDetails from "../components/PokemonDetails";
import PokemonDetails2 from "../components/PokemonDetails2";
import PokemonList from "../components/PokemonList";
import DetailsWrapper from "../hoc/DetailsWrapper";
import { Navigate } from "react-router-dom";

function PokemonsPage() {
  const [hasAccess, setAccess] = useState(false);
  
  if (!hasAccess) return <Navigate to={"/error"}/>

  const [selectedPokemon, setSelectedPokemon] = useState();
  const [selectedPokemon2, setSelectedPokemon2] = useState();

  const getDetails1 = (likes, increaseLikes) => {
    return (
      <PokemonDetails
        pokemon={selectedPokemon}
        likes={likes}
        increaseLikes={increaseLikes}
      ></PokemonDetails>
    );
  };

  const getDetails2 = (likes, increaseLikes) => {
    return (
      <PokemonDetails2
        pokemon={selectedPokemon2}
        likes={likes}
        increaseLikes={increaseLikes}
      ></PokemonDetails2>
    );
  };

  return (
    <main className="main">
      <div>
        {(selectedPokemon || selectedPokemon2) && (
          <h2>Pokemons Seleccionados</h2>
        )}
        <div className="selected-pokemons">
          {selectedPokemon && (
            <DetailsWrapper render={getDetails1}></DetailsWrapper>
          )}
          {selectedPokemon2 && (
            <DetailsWrapper render={getDetails2}></DetailsWrapper>
          )}
        </div>
      </div>
      <h2>Lista de Pokemons</h2>
      <PokemonList
        selectPokemon={setSelectedPokemon}
        selectPokemon2={setSelectedPokemon2}
      ></PokemonList>
    </main>
  );
}

export default PokemonsPage;

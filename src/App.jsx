import { useState } from "react";
import "./App.css";
import PokemonDetails from "./components/PokemonDetails";
import PokemonDetails2 from "./components/PokemonDetails2";
import PokemonList from "./components/PokemonList";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [selectedPokemon2, setSelectedPokemon2] = useState();
  return (
    <main className="main">
      <div>
        {(selectedPokemon || selectedPokemon2) && (
          <h2>Pokemons Seleccionados</h2>
        )}
        <div className="selected-pokemons">
          {selectedPokemon && (
            <PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
          )}
          {selectedPokemon2 && (
            <PokemonDetails2 pokemon={selectedPokemon2}></PokemonDetails2>
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

export default App;

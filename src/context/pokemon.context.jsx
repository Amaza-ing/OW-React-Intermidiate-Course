import { createContext } from "react";

const PokemonContext = createContext();

function PokemonProviderWrapper(props) {
  return (
    <PokemonContext.Provider value={{}}>
      {props.children}
    </PokemonContext.Provider>
  );
}

export { PokemonContext, PokemonProviderWrapper };

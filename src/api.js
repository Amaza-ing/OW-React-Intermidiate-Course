export const fetchPokemon = async (index) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  return response.json();  
};

import { useEffect, useState } from "react";
import "./PokemonPage.css";
import { Link, useNavigate, useParams } from "react-router-dom";

function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetchPokemon(id);
  }, [id]);

  const fetchPokemon = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
      setError(null);
    } catch (e) {
      setError(e);
    }
  };

  const navigate = useNavigate();

  const goTo = (id) => {
    setPokemon(null);
    navigate(`/pokemons/${id}`);
  };

  return (
    <section id="pokemon-page">
      {error ? (
        <div>
          <h2>No se ha encontrado ningún Pokemon con id {id}</h2>
          <Link to="/pokemons/1">Volver al pokemon 1</Link>
        </div>
      ) : (
        <>
          {pokemon ? (
            <div>
              <h2>{pokemon.name.toUpperCase()}</h2>
              <img
                src={pokemon.sprites.front_default}
                alt="pokemon img"
                className="pokemon-img"
              />
              <h3>HP: {pokemon.stats[0].base_stat}</h3>
              <h3>Attack: {pokemon.stats[1].base_stat}</h3>
              <h3>Defense: {pokemon.stats[2].base_stat}</h3>
              <div className="link-buttons">
                <button onClick={() => goTo(Number(id) - 1)} className="btn">
                  ⬅ Previous
                </button>
                <button onClick={() => goTo(Number(id) + 1)} className="btn">
                  Next ➡
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2>Cargando...</h2>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default PokemonPage;

import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";

const PokemonsPage = lazy(() => import("./pages/PokemonsPage"));
const PokemonPage = lazy(() => import("./pages/PokemonPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
        <Route path="/pokemons/:id" element={<PokemonPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

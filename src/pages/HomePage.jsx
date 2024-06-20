import "./HomePage.css";
import logo from "../assets/pokemon-logo.webp";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section id="home-page">
      <h1 className="title">Bienvenidos</h1>
      <img src={logo} alt="Pokemon Logo" className="logo" />
      <Link to="/pokemons" className="link">ENTRAR</Link>
    </section>
  );
}

export default HomePage;

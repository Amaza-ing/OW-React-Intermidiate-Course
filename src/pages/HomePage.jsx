import "./HomePage.css";
import logo from "../assets/pokemon-logo.webp";

function HomePage() {
  return (
    <section id="home-page">
      <h1 className="title">Bienvenidos</h1>
      <img src={logo} alt="Pokemon Logo" className="logo" />
      <h2 className="link">ENTRAR</h2>
    </section>
  );
}

export default HomePage;

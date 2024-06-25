import "./HomePage.css";
import logo from "../assets/pokemon-logo.webp";
import { Link } from "react-router-dom";
import { FixedSizeList } from "react-window";

const data = Array.from({ length: 100000 }, (_, index) => `Item ${index}`);

const renderRow = ({ index, style }) => (
  <div
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid lightgrey",
    }}
  >
    <span>{data[index]}</span>
  </div>
);

function HomePage() {
  return (
    <section id="home-page">
      <h1 className="title">Bienvenidos</h1>
      <img src={logo} alt="Pokemon Logo" className="logo" />
      <Link to="/pokemons" className="link">
        ENTRAR
      </Link>

      <div>
        <FixedSizeList
          height={400}
          width={400}
          itemCount={data.length}
          itemSize={40}
        >
          {renderRow}
        </FixedSizeList>
      </div>
    </section>
  );
}

export default HomePage;

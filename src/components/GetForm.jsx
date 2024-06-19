import "./GetForm.css";
import { useState } from "react";

function GetForm(props) {
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(10);

  const handleFromInput = (e) => {
    setFrom(e.target.value);
  };

  const handleToInput = (e) => {
    setTo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getPokemons(from, to);
  };

  return (
    <form onSubmit={handleSubmit} className="get-form">
      <fieldset className="form-field">
        <label htmlFor="from-pokemon" className="label">
          From:
        </label>
        <input
          type="number"
          className="input"
          value={from}
          min={1}
          id="from-pokemon"
          onChange={handleFromInput}
        />
      </fieldset>
      <fieldset className="form-field">
        <label htmlFor="to-pokemon" className="label">
          To:
        </label>
        <input
          type="number"
          className="input"
          value={to}
          min={1}
          id="to-pokemon"
          onChange={handleToInput}
        />
      </fieldset>
      <button className="btn">Get Pokemon!</button>
    </form>
  );
}

export default GetForm;

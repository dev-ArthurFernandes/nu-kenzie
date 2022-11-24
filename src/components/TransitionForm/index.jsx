import "./style.css";
import { useState } from "react";

export const TransitionForm = ({ setTransitionList, id }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Entrada");
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const transition = {
      description: description,
      type: type,
      value: value,
      id: id,
    };

    setTransitionList((oldList) => {
      return [...oldList, transition];
    });
  }

  return (
    <form className="transitionsForm" onSubmit={(event) => handleSubmit(event)}>
      <div id="description">
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          name="description"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <p>Ex: Compra de roupas</p>
      </div>
      <div id="values">
        <span id="spanValue">
          <label htmlFor="value">Valor</label>
          <input
            type="text"
            name="value"
            placeholder="1"
            onChange={(event) => setValue(event.target.value)}
          />
        </span>
        <span id="spanType">
          <label htmlFor="type">Tipo de valor</label>
          <select onChange={(event) => setType(event.target.value)}>
            <option>Entrada</option>
            <option>Despesa</option>
          </select>
        </span>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};

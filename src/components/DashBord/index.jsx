import "./style.css";
import { Header } from "../Header";
import { Container } from "./Container.jsx";
import { useState } from "react";
import { Card } from "../Card";

export const DashBord = ({ setPage }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  const [filter, setFilter] = useState("Todos");

  const [total, setTotal] = useState(0);

  const [itens, setItens] = useState([
    { description: "Test1", type: "Entrada", value: "1000" },
  ]);

  function handleSubmit(event) {
    event.preventDefault();

    if (description === "" || type === "" || value === "") {
      alert("Por favor preencha todos os campos!");
    } else {
      setItens([
        ...itens,
        { description: description, type: type, value: value },
      ]);
      if (type === "Entrada") {
        setTotal(total + Number(value));
      } else if (type === "Despesa") {
        setTotal(total - Number(value));
      }
    }
  }

  function selectFilters(event) {
    for (let i = 0; i <= 2; i++) {
      event.target.parentElement.children[i].className = "filterItem";
    }
    event.target.className = "filterItem selected";
  }

  console.log(itens);

  return (
    <div className="DashBody">
      <Header setPage={setPage} />

      <Container>
        <section className="InsertSection">
          <form className="InsertForm" onSubmit={handleSubmit}>
            <span>
              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                placeholder="Digite aqui sua descrição"
                name="description"
                id="description"
                onChange={(event) => setDescription(event.target.value)}
              />
              <p>Ex: Compra de roupas</p>
            </span>
            <div>
              <span>
                <label htmlFor="value">Valor</label>
                <input
                  type="text"
                  placeholder="1"
                  name="value"
                  id="value"
                  onChange={(event) => setValue(event.target.value)}
                />
              </span>
              <span>
                <label htmlFor="TypeOfValue">Tipo de Valor</label>
                <div className="Select">
                  <select onChange={(event) => setType(event.target.value)}>
                    <option>Entrada</option>
                    <option>Despesa</option>
                  </select>
                </div>
              </span>
            </div>
            <button type="submit">Inserir valor</button>
          </form>
          <div className="TotalContainer">
            <div>
              <h3>Valor Total</h3>
              <input type="text" name="total" id="total" value={`$ ${total}`} />
            </div>
            <div>
              <p>O valor se refere ao saldo</p>
            </div>
          </div>
        </section>
        <section className="ListControl">
          <div className="filters">
            <h2>Resumo financeiro</h2>
            <ul className="filterList">
              <li className="filterItem selected" onClick={selectFilters}>
                Todos
              </li>
              <li className="filterItem" onClick={selectFilters}>
                Entradas
              </li>
              <li className="filterItem" onClick={selectFilters}>
                Despesas
              </li>
            </ul>
          </div>
          <ul className="control">
            {itens.map((item, index) => {
              if (item.type === filter) {
                <Card
                  description={item.description}
                  type={item.type}
                  value={item.value}
                  key={index}
                />;
              } else if (filter === "Todos") {
                <Card
                  description={item.description}
                  type={item.type}
                  value={item.value}
                  key={index}
                />;
              }
            })}
          </ul>
        </section>
      </Container>
    </div>
  );
};

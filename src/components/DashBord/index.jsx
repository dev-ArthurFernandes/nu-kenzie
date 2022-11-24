import "./style.css";
import uuid from "react-uuid";
import { Header } from "../Header";
import { useState } from "react";
import { Card } from "../Card/index.jsx";
import { TransitionForm } from "./../transitionForm/index.jsx";
import { ValueTotal } from "../valueTotal";
import { Filter } from "./../Filter/index";

export const DashBord = ({ setPage }) => {
  let empty = true;

  const [transitionList, setTransitionList] = useState([]);
  if (transitionList.length >= 1) {
    empty = false;
  }

  const [filter, setFilter] = useState("Todos");

  let total = 0;

  transitionList.forEach((Element) => {
    if (Element.type === "Entrada") {
      total += Number(Element.value);
    } else {
      total -= Number(Element.value);
    }
  });

  function removeItem(id) {
    const lista = transitionList;
    const newLista = lista.filter((item) => item.id !== id);
    setTransitionList(newLista);
  }

  return (
    <div className="DashBody">
      <Header setPage={setPage} />

      <div className="DashContainer">
        <section className="formSection">
          <TransitionForm setTransitionList={setTransitionList} id={uuid()} />
          <ValueTotal total={total} />
        </section>
        <section className="controlSection">
          <Filter setFilter={setFilter} />
          <ul>
            {empty && (
              <div className="Mensagem">
                Você ainda não possui nenhum lançamento
              </div>
            )}

            {transitionList.map((item, index) => {
              if (item.type === filter) {
                return (
                  <Card
                    description={item.description}
                    type={item.type}
                    value={item.value}
                    key={item.id}
                    id={item.id}
                    removeItem={removeItem}
                  />
                );
              } else if (filter === "Todos") {
                return (
                  <Card
                    description={item.description}
                    type={item.type}
                    value={item.value}
                    key={item.id}
                    id={item.id}
                    removeItem={removeItem}
                  />
                );
              }
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

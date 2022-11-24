import "./style.css";

export const Filter = ({ setFilter }) => {
  function selecFilter(event) {
    event.nativeEvent.path[1].childNodes.forEach((element) => {
      element.className = "filter";
    });
    event.target.className = "filter selected";
    setFilter(event.target.innerHTML);
  }

  return (
    <div className="Filter">
      <h2>Resumo financeiro</h2>
      <ul className="filterList">
        <li onClick={selecFilter} className="filter selected">
          Todos
        </li>
        <li onClick={selecFilter} className="filter">
          Entrada
        </li>
        <li onClick={selecFilter} className="filter">
          Despesa
        </li>
      </ul>
    </div>
  );
};

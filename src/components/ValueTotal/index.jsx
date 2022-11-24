import "./style.css";

export const ValueTotal = ({ total }) => {
  return (
    <div className="total">
      <span>
        <h2>Valor total:</h2>
        <p>$ {total}</p>
      </span>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};

import "./style.css";
import img from "/src/assets/img/NuKenzie-Black.svg";

export const Header = ({ setPage }) => {
  return (
    <header className="Header">
      <div className="container">
        <img src="/src/assets/img/NuKenzie-Black.svg" alt="NuKenzie" />
        <button
          type="button"
          onClick={() => {
            localStorage.removeItem("@NuKenzie:Page");
            setPage("home");
          }}
        >
          Inicio
        </button>
      </div>
    </header>
  );
};

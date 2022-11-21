import "./style.css";
import img from "/src/assets/img/NuKenzie-White.svg";

export const Section1 = ({ setPage }) => {
  return (
    <section className="section1">
      <img src="/src/assets/img/NuKenzie-White.svg" alt="NuKenzie" />
      <h2>Centralize o controle das suas finanças</h2>
      <p>de forma rápida e segura</p>
      <button
        type="button"
        onClick={() => {
          localStorage.setItem("@NuKenzie:Page", "DashBord");
          setPage("DashBord");
        }}
      >
        Iniciar
      </button>
    </section>
  );
};

import "./style.css";
import { Section1 } from "./section1";
import { Section2 } from "./section2";

export const Home = ({ setPage }) => {
  return (
    <div className="container">
      <Section1 setPage={setPage} />
      <Section2 />
    </div>
  );
};

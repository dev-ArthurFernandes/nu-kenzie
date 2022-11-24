import "./style.css";
import { IoMdTrash } from "react-icons/io";

export const Card = ({ description, type, value, removeItem, id }) => {
  return (
    <li className={`itemControl ${type}`}>
      <span>
        <h2>{description}</h2>
        <p>R$ {value}</p>
      </span>
      <p>{type}</p>
      <IoMdTrash
        style={{
          width: "25px",
          height: "25px",
          position: "absolute",
          right: "15px",
          backgroundColor: "var(--color-Grey-2)",
          padding: "4px",
          borderRadius: "4px",
          color: "var(--color-Grey-4)",
          cursor: "pointer",
        }}
        onClick={() => removeItem(id)}
      />
    </li>
  );
};

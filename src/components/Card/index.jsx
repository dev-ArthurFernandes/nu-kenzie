import "./style.css";
import { IoMdTrash } from "react-icons/io";

export const Card = ({ description, type, value }) => {
  console.log(description, type, value);
  return (
    <li className={`itemControl ${type}`}>
      <span>
        <h2>{{ description }}</h2>
        <p>{value}</p>
      </span>
      <p>{type}</p>
      <IoMdTrash
        style={{
          position: "absolute",
          right: "15px",
          backgroundColor: "var(--color-Grey-2)",
          padding: "4px",
          borderRadius: "4px",
          color: "var(--color-Grey-4)",
          cursor: "pointer",
        }}
      />
    </li>
  );
};

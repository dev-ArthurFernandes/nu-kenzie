import { useState } from "react";
import { Home } from "./components/Home";
import { DashBord } from "./components/DashBord/index.jsx";

function App() {
  let [page, setPage] = useState("home");

  page = localStorage.getItem("@NuKenzie:Page") || page;

  if (page === "home") {
    return <Home setPage={setPage} />;
  }

  if (page === "DashBord") {
    return <DashBord setPage={setPage} />;
  }
}

export default App;

import { useState } from "react";
import { Home } from "./components/Home";
import { DashBord } from "./components/DashBord/index.jsx";

function App() {
  const currentPage = localStorage.getItem("@NuKenzie:Page") || "home";

  const [page, setPage] = useState(currentPage);

  if (page === "home") {
    return <Home setPage={setPage} />;
  }

  if (page === "DashBord") {
    return <DashBord setPage={setPage} />;
  }
}

export default App;

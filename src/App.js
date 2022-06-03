import { useState } from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { List } from "./components/list";

import "./App.css";

function App() {
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState([]);

  const catSelection = (value) => {
    console.log(value);
    setCategory(value);
  };

  const filterChoise = (value) => {
    console.log(value);
    setFilter(value);
  };

  return (
    <main>
      <Header filterChoise={filterChoise}/>
      <div className="flex">
        <Sidebar catSelection={catSelection} />
        <List category={category} filter={filter} setCart={setCart}/>
      </div>
    </main>
  );
}

export default App;

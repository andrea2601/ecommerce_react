import { useState } from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { List } from "./components/list";

import "./App.css";

function App() {
  const [category, setCategory] = useState("");

  const catSelection = (value) => {
    console.log(value);
    setCategory(value);
  };

  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar catSelection={catSelection} />
        <List category={category} />
      </div>
    </main>
  );
}

export default App;

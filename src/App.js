import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { List } from "./components/list";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Actions from "./store/action";
import "./App.css";

function App() {
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  const prods = useSelector((state) => state.cart);

  const catSelection = (value) => {
    setCategory(value);
  };

  const filterChoise = (value) => {
    setFilter(value);
  };

  useEffect(() => {
    dispatch(Actions.getProductsFetch())
  }, []);
  
  useEffect(() => {
    console.log("prods", prods.products);
  }, [prods.products]);

  return (
    <main>
      <Header filterChoise={filterChoise} />
      <Sidebar catSelection={catSelection} />
      <div className="flex">
        <div className="bg"></div>
        <List category={category} filter={filter} />
      </div>
    </main>
  );
}

export default App;

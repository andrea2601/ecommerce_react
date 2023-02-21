import logo from "./logo.png";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Cart } from "./cart";

export const Header = (props) => {
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);

  const changing = (event) => {
    setSearch(event.target.value);
  };
  const submit = (event) => {
    removeClass();
    event.preventDefault();
    props.filterChoise(search);
  };
  const addClass = () => {
    setFocused(true);
  };
  const removeClass = () => {
    setFocused(false);
  };

  return (
    <header>
      <div className={`trLayer ${focused ? "active" : ""}`} onClick={removeClass}></div>
      <div className="header" >
        <img src={logo} alt="React ecommerce" />
        <form className={`${focused ? "focus" : ""}`}>
          <input
            value={search}
            onChange={changing}
            type="text"
            placeholder="Ricerca React.commerce"
            onClick={addClass}
          />
          <button onClick={submit} >
            <AiOutlineSearch />
          </button>
        </form>
        <Cart/>
      </div>
    </header>
  );
};

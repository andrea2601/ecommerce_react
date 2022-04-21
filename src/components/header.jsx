import logo from './logo.png';
import { useState } from "react";

export const Header = (props) => {
  const [search, setSearch] = useState("");

  const changing = (event) => {
    setSearch(event.target.value);
    props.filterChoise(event.target.value);
  };

  return (
    <header>
      <img src={logo} alt="React ecommerce" />
      <form>
        <input
          value={search}
          onChange={changing}
          type="text"
          placeholder="Search..."
        />
      </form>
    </header>
  );
};

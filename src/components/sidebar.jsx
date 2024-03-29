import { useState, useEffect } from "react";

const mock = ["category 1", "category 2", "category 3"];

export const Sidebar = (props) => {
  const [categories, setCategories] = useState(mock);
  const [isActive, setActive] = useState(0);

  const getData = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories/"
    );
    const data = await response.json();

    const updated = ["everything"].concat(data);
    setCategories(updated);
  };

  useEffect(() => {
    getData();
  }, []);

  const clicked = (event, category, index) => {
    event.preventDefault();
    props.catSelection(category);

    setActive(index);
    // console.log("isactive: ",isActive);
    // console.log("event: ",event);
    // event.target.className="active";
  };

  const capitalize = (text) => {
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <aside>
      <h2>CATEGORIES</h2>
      <ul>
        {/* <li>
          <a href="/everything">Everything</a>
        </li> */}
        {categories.map((item, index) => (
          <li key={index}>
            <a
              href={item}
              onClick={(event) => clicked(event, item, index)}
              className={isActive === index ? "active" : "two"}
            >
              {capitalize(item)}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

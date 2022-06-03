import { Product } from "./product";
import { useState, useEffect } from "react";

const productList = [{
  id: 0,
  title: "prodotto 1",
  price: 0,
  image: "",
},
{
  id: 1,
  title: "prodotto 2",
  price: 0,
  image: "",
},
{
  id: 2,
  title: "prodotto 3",
  price: 0,
  image: "",
},];

export const List = ({ category, filter, setCart }) => {
  const [source, setSource] = useState([]);
  const [products, setProducts] = useState(productList);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setSource(data);
    setProducts(data);
    setLoading(false);
  }; 

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = source.filter((product) => {
      if (category === "everything") {
        return product;
      } else {
        return product.category === category;
      }
    })
    .filter((product) =>
        product.title.toLowerCase().includes(filter.toLowerCase())
      );
    ;
    setProducts(filtered);
    console.log("la categoria ora è", category, filtered);

    // eslint-disable-next-line
  }, [category, filter]);

  return (
    <section>
      <ul className="grid">
        {products.map((item) => (
          <li key={item.id} className={isLoading ? "loading" : ""}>
            <Product id={item.id} title={item.title} price={item.price} img={item.image} setCart={setCart}/>
          </li>
        ))}
      </ul>
    </section>
  );
};
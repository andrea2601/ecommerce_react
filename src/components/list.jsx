import { Product } from "./product";
import { ProductSkeleton } from "./productSkeleton";
import { useState, useEffect } from "react";
import * as Actions from "../store/action";
import { useSelector } from "react-redux";

const productList = [
  {
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
  },
];

export const List = ({ category, filter, setCart }) => {
  const prods = useSelector((state) => state.cart);

  const [source, setSource] = useState([]);
  const [products, setProducts] = useState(productList);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (prods.products.length > 0) {
      setSource(prods.products);
      setProducts(prods.products);
    }
  }, [prods.products]);

  useEffect(() => {
    setLoading(prods.isLoading);
    console.log(prods.isLoading)
  }, [prods.isLoading]);

  useEffect(() => {
    const filtered = source
      .filter((product) => {
        if (category === "everything") {
          return product;
        } else {
          return product.category === category;
        }
      })
      .filter((product) =>
        product.title.toLowerCase().includes(filter.toLowerCase())
      );
    setProducts(filtered);

    // eslint-disable-next-line
  }, [category, filter]);

  return (
    <section>
      <ul className="grid">
        {!isLoading ? products.map((item) => (
          <li key={item.id}>
            <Product
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.image}
              setCart={setCart}
            />
          </li>
        )) : [0,1,2,3,4,5,6,7,8,9,10,11].map(item => <li key={item} className="isLoading">
            <ProductSkeleton
            />
          </li>)}
      </ul>
    </section>
  );
};

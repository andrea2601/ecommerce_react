import { useState } from "react";
export const Product = ({id, img, title, price, setCart}) => {
  const addCart = () =>{
     setCart(id);
   }
   const [isOnCart, setIsOnCart] = useState(false);
  return (
    <article>
      <img src={img} alt="img" />
      <p>Prezzo: {price}€</p>
      {isOnCart
        ? <button onClick={()=>addCart()}>Add to cart</button>
        : <button>Remove from cart</button>}
      <h4>{title}</h4>
    </article>
  );
};

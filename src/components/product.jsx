import { useEffect, useState } from "react";
import * as Actions from "../store/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Product = ({ id, img, title, price, setCart }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log("cartt", cart.cart);
    if (cart.cart?.find((el) => el === id)) {
      setIsOnCart(true);
    }else{
      setIsOnCart(false)
    }
  }, [cart]);

  const addCart = (id) => {
    console.log(id);
    dispatch(Actions.addToCart(id));
  };

  const removeCart = (id) => {
    console.log(id);
    dispatch(Actions.removeToCart(id));
  };
  const [isOnCart, setIsOnCart] = useState(false);

  const resizeText = (text) => {
    if (text.split("").length >= 50) {
      return text.split("").slice(0, 50).join("") + "...";
    } else {
      return text;
    }
  };

  return (
    <article>
      <img src={img} alt="img" />
      <div className="info">
        <h4 className="title">{resizeText(title)}</h4>
        <p className="prezzo">
          {price}
          <span className="euro">€</span>
        </p>
      </div>
      <div className="btnContainer">
        {!isOnCart ? (
          <button onClick={() => addCart(id)} className="btn">
            Add to cart
          </button>
        ) : (
          <button onClick={() => removeCart(id)} className="btn">
            Remove from cart
          </button>
        )}
      </div>
    </article>
  );
};

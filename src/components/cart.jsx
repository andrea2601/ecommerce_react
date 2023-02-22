import { BsCart2 } from "react-icons/bs";
import { Modal } from "./modal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Actions from "../store/action";


export const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(Actions.openModal());
  };

  return (
    <div className="cartWrapper">
      <div className="cart" onClick={showCart}>
        <div className="icon">
          <span className="cart-icon">
            <BsCart2 />
          </span>
          <span className="number">{cart.cart.length}</span>
        </div>
        <p className="carrello">Carrello</p>
      </div>
      <Modal />
    </div>
  );
};

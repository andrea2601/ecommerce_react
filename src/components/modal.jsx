import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Actions from "../store/action";

export const Modal = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const close = () => {
    dispatch(Actions.closeModal());
  };

  return (
    <div className="modalWrapper">
      <div className={`modal ${cart.modal ? "" : "hide"}`}>
        <span className="close" onClick={close}>
          x
        </span>
        <h3 className="carrello">Carrello</h3>
        <div className="list">
          <ul>
            {cart.cart.map((el) => (
              <li key={el}>
                <span className="titleProd">
                  {cart.products.find((prod) => prod.id === el).title}
                </span>
                <span className="priceProd">
                  {cart.products.find((prod) => prod.id === el).price} €
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

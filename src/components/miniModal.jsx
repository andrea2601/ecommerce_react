
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as Actions from "../store/action";


export const MiniModal = (props) => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);


  const close = () => {
    dispatch(Actions.closeModal())
  };

  return (
    <modal>
      <div className={`modal ${cart.modal ? "" : "hide"}`}>
        <span className="close" onClick={close}>
          x
        </span>
        <h3 className="carrello">Carrello</h3>
        <div className="list">
          <ul>
            {cart.cart.map(el=><li>{el}</li>)}
          </ul>
        </div>
      </div>
    </modal>
  );
};

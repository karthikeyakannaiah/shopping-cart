import { useDispatch, useSelector } from "react-redux";
import { reduceQuantity, increaseQuantity } from "../store/inventory";
import { addToCart, removeFromCart } from "../store/cart";

const Item = ({ item, itemId }) => {
  const cartList = useSelector((state) => state.cart.cartList);
  const findId = cartList.findIndex((v) => v.itemId === itemId);
  const dispatch = useDispatch();
  let quantitySelected =
    cartList.length > 0 && findId != -1 ? cartList[findId].quantitySelected : 0;
  let display = item.quantityAvailable == 0 && "hidden";
  let handleAdd = () => {
    if (item.quantityAvailable != 0) {
      dispatch(addToCart(itemId));
      dispatch(reduceQuantity(itemId));
    }
  };
  let handleRemove = () => {
    if (quantitySelected > 0) {
      dispatch(removeFromCart(itemId));
      dispatch(increaseQuantity(itemId));
    }
  };
  return (
    <div
      id="item"
      className="m-2 rounded-full bg-orange-500 p-8 flex flex-row justify-between items-center drop-shadow-lg"
    >
      <div id="heading" className="text-xl">
        {item.itemName} <br />
        {item.quantityAvailable > 0 ? (
          <span className="text-white text-sm bg-green-500 p-1 rounded-full">
            available
          </span>
        ) : (
          <span className="text-white text-sm bg-red-500 p-1 rounded-full drop-shadow-sm">
            Out of stock
          </span>
        )}
      </div>
      <div id="add-to-cart" className={` drop-shadow-md`}>
        <input
          type="button"
          value="-"
          className="rounded-l-lg bg-red-500 p-2"
          onClick={handleRemove}
        />
        <input
          type="button"
          value={quantitySelected}
          className="p-2 bg-white text-orange-500"
        />
        <input
          type="button"
          value="+"
          className={`rounded-r-lg bg-green-500 p-2 `}
          onClick={handleAdd}
        />
      </div>
    </div>
  );
};

export default Item;

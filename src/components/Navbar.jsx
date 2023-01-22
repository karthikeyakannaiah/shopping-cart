import { useSelector } from "react-redux";

const Navbar = () => {
  const cartList = useSelector(state => state.cart.cartList);
  let total = cartList.length!=0 ? cartList.reduce((sum,v)=> {return sum + v.quantitySelected},0) : 0; 
  return (
    <div className="p-2 px-4 bg-orange-500 flex flex-col lg:flex-row md:mx-auto items-center justify-center">
      <div id="heading" className="text-white italic p-4 text-2xl">
        Shopping Cart
      </div>
      <div id="total-items" className="text-md text-white p-2 bg-green-500 rounded-full drop-shadow-xl
      ">
        Cart: {total}
      </div>
    </div>
  );
};

export default Navbar;

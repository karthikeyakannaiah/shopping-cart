import Item from "./Item";
import { useSelector } from "react-redux";

const Items = () => {
    const itemsList = useSelector(state=>state.inventory.itemsList)
  return (
    <div className="container p-6 flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 text-white">
      {itemsList.map((v)=>(
        <Item item={v} key={v.itemId} itemId={v.itemId}/>
      ))}
    </div>
  );
};

export default Items;

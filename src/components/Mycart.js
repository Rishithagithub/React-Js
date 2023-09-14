import { useDispatch, useSelector } from "react-redux";
//import { clearItem } from "../utils/UseCartSlice";
//import ItemList from "./ItemList";
import DisplayCart from "./DisplayCart";
import { clearItem } from "../utils/cartSlice";

const Mycart = () => {
  const dispatch = useDispatch();
  const cartItemInfo = useSelector((store) => store?.cart?.item);
  //  console.log(cartItemInfo?.length);

  return (
    <div>
      {cartItemInfo.length && (
        <button
          onClick={() => dispatch(clearItem())}
          className="p-5 bg-orange-200  rounded-md float-right hover:bg-orange-400"
        >
          <i className="fa-solid fa-delete-left"></i>
        </button>
      )}
      <DisplayCart dataInfo={cartItemInfo} />
      {cartItemInfo?.length === 0 && (
        <h1 className="text-center text-slate-800 p-6 m-2 font-bold">
          Oh no!🙀 cart is empty.Please add items to the cart
        </h1>
      )}
    </div>
  );
};
export default Mycart;

import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
//contains the Restaurant ItemList
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
          >
            <div className="p-3 w-9/12">
              <span className="text-lg">{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <div>
                <span className="text-xs">{item.card.info.description}</span>
              </div>
            </div>
            <div className="w-3/12 m-2">
              <div className="absolute">
                <button
                  className="p-2 bg-black text-white shadow-lg rounded-lg  mx-10"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img
                className="h-32  rounded-md "
                src={CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;

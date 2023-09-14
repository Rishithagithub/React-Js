import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const [showItems, setShowItem] = useState(showItem);
  {
    console.log(showItems);
  }
  const handleClick = () => {
    setShowIndex();
    setShowItem(!showItems);
    console.log(showItems);
  };
//Accordian Implementation
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>{!showItems ? "⬇️" : "⬆️"}</span>
        </div>
        <div>{showItems && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;

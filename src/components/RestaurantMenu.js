import Shimmer, { RestroDetailshimmerEffect } from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { RestroDetailshimmerEffect } from "./shimmer";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState();
  //Custom Hookies
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <RestroDetailshimmerEffect />;

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(categories);
  return (
    <div className="menu">
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <h2>{cuisines}</h2>
        {categories.map((categories, index) => (
          //Controlled Component

          <RestaurantCategory
            key={categories?.card?.card?.title}
            data={categories?.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;

import RestaurantCards, { withRestaurantVeg } from "./Restaurantcards";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";
import RestroShimmer from "./shimmer.js";
const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const RestaurantCardsVeg = withRestaurantVeg(RestaurantCards);
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setlistOfRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setfilteredRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("fetching issue", error);
    }
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <>
        <h1 className="w-6/12 m-10 font-bold">
          {"You'r offline! Please Check Your Connection."}
        </h1>
      </>
    );
  }
  console.log(listOfRestaurants);
  return listOfRestaurants.length === 0 ? ( //shimmer Duplicate UI
    <RestroShimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className=" border border-solid border-black"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="px-3 py-2 m-4 bg-orange-200 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((rest) =>
                rest.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className=" flex items-center p-4 m-4">
          <button
            className="bg-orange-200 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurants) => (
          /*High-Order components adding new feature to the exiting cards*/
          <Link
            key={restaurants.info.id}
            to={"/restaurants/" + restaurants.info.id}
          >
            {restaurants.info.veg ? (
              <RestaurantCardsVeg restData={restaurants} />
            ) : (
              <RestaurantCards
                key={restaurants.info.id}
                restData={restaurants}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

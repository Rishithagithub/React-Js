import { CDN_URL } from "../utils/constants";
const RestaurantCards = (props) => {
  const { restData } = props;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    costForTwo,
    area,
    id,
  } = restData.info;
  return (
    <>
      <div
        key={id}
        className="foodItem-container  px-4  py-4 hover:shadow-2xl m-5 "
      >
        <div className="">
          <div className="restro-image">
            <img
              className="w-72 h-52 rounded-md"
              src={CDN_URL + cloudinaryImageId}
            ></img>
          </div>
          <div className="restro-info w-50">
            <h1 className="font-bold">{name}</h1>
            <h6 className="font-thin text-sm">
              {cuisines.length > 3
                ? cuisines.slice(0, 3).join(" ")
                : cuisines.join(" ")}
            </h6>

            <div className="flex justify-between text-sm">
              <h5>{avgRating}</h5>

              {typeof costForTwo === "string" ? (
                <h5>RS{costForTwo.slice(0, 4)}</h5>
              ) : (
                <h5>{costForTwo / 100}</h5>
              )}
            </div>
            <div>
              <p>{area}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//High Order Components
//input -RestaurantCard=> RestaurantCardVeg
export const withRestaurantVeg = (RestaurantCards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Veg
        </label>
        <RestaurantCards {...props} />
      </div>
    );
  };
};
export default RestaurantCards;

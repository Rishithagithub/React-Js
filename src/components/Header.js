import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";
import { useSelector } from "react-redux";
//Routing
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems);
  const currentLocation = useLocation();
  return (
    <div className="flex justify-between  shadow-lg bg-orange-300">
      <div className="logo-container ">
        <img className="m-4 w-24" src={LOGO_URL} />
        <h1 className="text-lg font-extrabold m-5 px-15">Flavour Quest</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex px-4 mx-4">
          <Link to="/">
            <li className="hover:text-red-500 px-10">
              {currentLocation.pathname == "/" ? (
                <h1 className="text-red-500  ">Home</h1>
              ) : (
                <h1>Home</h1>
              )}
            </li>
          </Link>
          <Link to="/about ">
            {" "}
            <li className="hover:text-red-500 px-10">
              {currentLocation.pathname == "/About" ? (
                <h1 className="text-red-500">About</h1>
              ) : (
                <h1>About</h1>
              )}
            </li>
          </Link>
          <Link to="/Mycart">
            <li className="hover:text-red-500 px-10">
              {currentLocation.pathname == "/Mycart" ? (
                <h1 className="text-red-500">Mycart({cartItems.length})</h1>
              ) : (
                <h1>MyCart({cartItems.length})</h1>
              )}
            </li>
          </Link>
          <li className="px-4">
            Online Status:{onlineStatus ? "📶" : "🔴 Offline"}
          </li>
          <button
            className="btnName px-10"
            onClick={() => {
              btnNameReact === "LogIn"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("LogIn");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;

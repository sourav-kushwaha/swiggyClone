import { useState , useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import UserContext from "./UserContext";
import {useSelector} from "react-redux";

const Header = ()=>{
   const [btnName , setBtnName]= useState("Login");

   const {loggedInUser} = useContext(UserContext);
   const cartItems = useSelector((store)=>store.cart.items);
  
    return(
          <div className="flex justify-between bg-pink-100 shadow-lg m-2 px-2">
          <div>
       <img className="w-24 bg-pink-100" src={LOGO_URL}></img>
          </div>
          <div className="flex items-center">
       <ul className="flex p-6 m -4">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About us</Link></li>
          <li className="px-4"><Link to="/Contact">Contact us</Link></li>
          <li className="px-4 font-bold"><Link to="/Cart">Cart :({cartItems.length})</Link></li>
          <button className="login"  onClick={()=>{
            btnName == "Login" 
            ?setBtnName("Logout")
            :setBtnName("Login");
          }}>
         {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
       </ul>
          </div>
          </div>
    )
}

export default Header;
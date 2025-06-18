import { useEffect,useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import {RES_API}  from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatogory from "./RestaurantCategory";

const RestaurantMenu = ()=>{
    
//    const[RestMenu,SetRestMenu] = useState(null);
   const{resId} = useParams();
//     useEffect(()=>{
//   fetchMenu();
// },[]);

// const fetchMenu = async () =>{
//     const data = await fetch( RES_API + resId);
//     const json = await data.json();
//     console.log(json);
//     SetRestMenu(json.data);
// };
const RestMenu = useRestaurantMenu(resId);
  
if (RestMenu===null) 
    return
    <Shimmer/>;
const {name,cuisines,costForTwoMessage,locality} = RestMenu?.cards[2]?.card?.card?.info;
 
const {itemCards} = RestMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

console.log(itemCards);
    return(
        <div className="text-center">
 <h1 className="font-bold text-3xl p-4">{name}</h1>
 <h2 className="text-lg font-bold" >{cuisines.join("  /  ")}</h2>
 <ul>
<li className="font-bold">{costForTwoMessage}</li>
    <li className="font-bold">{locality}</li>
 </ul>
 <ul>
     {
        itemCards.map((item)=><RestaurantCatogory key = {item?.card?.info?.id} data={item?.card?.info}/>)
        // itemCards.map(item => (<li key={item.card.info.id}>{item.card.info.name}   =      {  "   Rs"} {item.card.info.price/100} </li>))
    } 
    
 </ul>
        </div>
    )
};

export default RestaurantMenu;
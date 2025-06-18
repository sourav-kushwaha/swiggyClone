import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
const Body = () =>{
      const [listOfRestaurants, setListOfRestaurant]= useState([]);
      const [filteredText , SetFilteredText] = useState([]);
      const [ SearchText , setSearchText]  = useState("");

      const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

      useEffect(()=>{
          fetchData(); 
      },[]);  

          
      const fetchData = async ()=>{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6842142&lng=75.8762052&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
      const json = await data.json();
      console.log(json);
      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      SetFilteredText(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
               };
   

    return listOfRestaurants.length==0? (<Shimmer/>) : (
          <div className="body">
            <div className="flex">
                   <div className="search m-4 p-4">
             <input type="text" className="border border-solid mx-2" value={SearchText}
             onChange={
                  (e)=>{
                      setSearchText( e.target.value);
                  }
             } ></input>
             <button className="bg-blue-400 hover:bg-blue-700 p-2 m-4 rounded-lg"  onClick={()=>{
              const filteredText= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
              SetFilteredText(filteredText);
             }}> Search </button>
            </div>
                <div className="search m -4 p-4 flex items-center">
                      <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300" onClick={()=>{
                        const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating>4);
                        SetFilteredText(filteredList);
                      }}>Top rated restaurants</button>
                </div></div>
           

                <div className="flex flex-wrap">
              

                   {filteredText.map((restaurants) => (
                   <Link
                   key={restaurants.info.id}

                    to={"/restaurants/" + restaurants.info.id} > 

                    {restaurants.info.aggregatedDiscountInfoV3 ? (<RestaurantCardPromoted resData={restaurants} />
                    ) :  (
                 
                        < RestaurantCard resData={restaurants}/> 
                  
                  ) }

                  

                    </Link>
                   ) )} 
                
                </div>

          </div>
    )
          
    
}

export default Body;
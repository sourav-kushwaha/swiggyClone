import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const { 
     cloudinaryImageId ,
     name,
     cuisines,
     costForTwo,
     avgRating,
     sla,
    } = resData?.info;
     return (
           <div className="m-4 p-4 w-[265px] bg-gray-200 hover:bg-gray-300 rounded-lg">
                 <img className="rounded-lg" alt="res-logo"
       src={
         CDN_URL +
         cloudinaryImageId
       } />

             <h3 className="font-bold py-4"> {name}</h3>
             <h4>{cuisines.join(',')}</h4>
             <h4>{costForTwo}</h4>
             <h4>{avgRating}</h4>
             <h4>{sla.slaString}</h4>

           </div>
     )
}

export const withPromotedLabel = (RestaurantCard) =>{
      return (props) =>{
         return(
            <div>
                  <label className="absolute bg-black text-white ml-3  font-bold">Discounts hai</label>
                  <RestaurantCard {...props}/>
            </div>
         );
            
         
      };
};
export default RestaurantCard;


import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";


const RestaurantCatogory = ({data})=>{
    console.log(data);
    const dispatch = useDispatch();
    const handleAddItem =(item) =>{
        dispatch(addItem(item));
    }
    return( 
        <div ><div className="w-6/12 h-32 p-4 mx-auto my-4 shadow-lg bg-gray-100 flex justify-between">
            <img src={CDN_URL+data?.imageId}  className="w-24">
            
                </img>
                <button className="p-2 cursor-pointer bg-black text-white shadow-lg absolute m -auto"
                onClick={handleAddItem} 
                >
              Add +  </button>
         
         <span className="font-bold">{data?.name}<p className="font-normal"> ₹ {data.price/100}</p></span>
         
        <span>🔽</span> 
       
        
    </div>
   
    {/* < ItemList items = {data.itemCards}/> */}
 
    </div> 
)
  
}

export default RestaurantCatogory;
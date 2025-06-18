import { useSelector } from "react-redux";
import RestaurantCatogory from "./RestaurantCategory";
const Cart = ()=>{

    const cartItems = useSelector((store)=> store.cart.items);
    return (
        <div className="flex justify-center">
          <h1 className=" m-10 text-3xl font-bold">Cart</h1>
      <div className="w-6/12"> 
       <RestaurantCatogory data = {cartItems}/>
       </div>
       </div>
    )
}
export default Cart;
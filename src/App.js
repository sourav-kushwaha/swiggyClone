import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorElement from "./components/ErrorElement";
import RestaurantMenu from "./components/RestaurantMenu";
import {Provider} from "react-redux" ; 
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// const heading = React.createElement("h1", {id:"heading"} , "hello world the winter arc is gonna be intense 😶‍🌫️");
// const jsxheading=<h1 id="heading">hello world the winter arc is gonna be intense so be prepared 😶‍🌫️</h1>
// const HeadingComponent = () => <h1>hello brother from arrow function ok</h1> ;
// const HeadingComponent2 = () => {
//       return <h1>henji</h1>
// };


const AppLayout = ()=>{
      return (
         <Provider store={appStore}>
               <div className="app">
              <Header />
              <Outlet/>
            </div>
          </Provider>
      )  
}
 

const appRouter = createBrowserRouter([
    { 
      path: "/",
      element: <AppLayout/>,
      children:[
       {
            path:"/",
            element:<Body/>,
       }     , 
{
    path:"/about",
    element:<About/>,
},
{
      path:"/Contact",
      element:<Contact/>,
},{ 
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>,
},
   {
      path:"/Cart",
      element:<Cart/>,
   },
      ],
      errorElement:<ErrorElement/>,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


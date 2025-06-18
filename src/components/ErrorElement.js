import { useRouteError } from "react-router";

const ErrorElement = ()=>{
    const err = useRouteError();
    console.log(err);
return(
    <div className="errorcontainter"> <div className="error">
        <h1>OOPS </h1>
        <h2>Something went wrong...</h2>
        <h1>{err.status} {err.statusText}</h1>
    </div>
    </div>
)
   
};
export default ErrorElement;
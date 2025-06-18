const ItemList = ({items})=>{
    return(

   <div>
        
   {items.map((item)=> (
    <div key={item?.info.id}>
        <div>
        <span>{item?.info.price}</span>
        </div>
        <p>{item?.info.description}</p>
    </div>
    ))}

        
    </div>
)
}
export default ItemList;
import { FaStar } from "react-icons/fa";
import { add , remove} from "../../state/cartReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
const FoodItemCard = (props)=>{
  const [addButtonStatus , setAddButtonStatus] = useState({show:true , count:0})
  const {data} = props
  const dispatch = useDispatch()
  
  const {image_url , cost , name , rating} = data

const addItem = ()=>{
  if(addButtonStatus.count ===0){
    setAddButtonStatus((p)=>({...p , count : p.count +1 , show:false}))
  }
  else{
    setAddButtonStatus((p)=>({...p , count : p.count +1 }))
  
  }
  const details = {id:data.id , name, image_url  , price:data.cost , quantity:1}
  dispatch(add(details))
}

const removeItem = ()=>{
  const details = {id:data.id}
  if(addButtonStatus.count > 1){
  setAddButtonStatus((p)=>({...p , count : p.count -1 }))
  }
  else{
    setAddButtonStatus((p)=>({...p , count : p.count -1 , show:true }))
  }
  dispatch(remove(details))
}

    return <li className="flex items-center  list-none  w-2/5 p-2 text-xs">
    <img className="h-24 w-32 m-1 rounded" src={image_url} alt='Restaurant logo' />
    <div className="m-2">
        <h3 className="font-medium text-xl">{name}</h3>
        <p className="text-gray-500">₹ {cost}</p>
        <div className="flex align-center">
        <FaStar color="gold" size={15} />
      <span className="font-bold ml-1">{rating}</span> 
        </div>
        {addButtonStatus.show ?  <button className="text-Orange border-2 border-Orange rounded px-3 " type="button" onClick={addItem}>ADD </button> 
      : <div> 
      
       <button type="button" onClick={removeItem} className=" m-1 border-2 px-2 rounded p-1 text-xl">-</button>
       <span className="text-xl m-1">{addButtonStatus.count}</span>
       <button type="button" onClick={addItem} className="m-1 border-2  px-2 p-1 rounded  text-xl">+</button>
       </div>}
    </div>
</li>
}

export default FoodItemCard
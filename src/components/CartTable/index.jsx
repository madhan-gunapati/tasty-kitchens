import { useDispatch, useSelector } from "react-redux"
import CartRow from "../CartRow"
import { cartSelector , empty_cart } from "../../state/cartReducer"
import { Link, useNavigate } from "react-router-dom"
const CartTable = (props)=>{
    const cartData = props.data
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const orderTotal = ()=>{
        let totalValue = 0;
        for (let x of cartData){
          
            totalValue = totalValue + (x.price) * (x.quantity)
        }
        return (totalValue)
    }
    const handlePayment = ()=>{
            dispatch(empty_cart())
            navigate('/payment-successful')
    }

    return <table className="w-11/12 text-center  bg-gray-300 m-auto my-2 rounded" >
    <tbody >
    <tr className="font-bold ">
        <td className="p-5">Item</td>
        <td className="p-5">Quantity</td>
        <td className="p-5">Price</td>
    </tr>
   
     
      { cartData.map((item)=><CartRow key={item.id} data={item} />) }
       <tr className="border-t-2 border-dashed border-gray-400 ">
    <td className="text-center p-4">
   Order Total:
    </td>
    
    <td className=" font-semibold flex flex-col items-center p-5">₹ {orderTotal()}.00 <button type='button' onClick={handlePayment} className="text-white bg-Orange p-2 m-2 rounded">Place Order</button></td>
</tr>
       </tbody>
   </table>
}

export default CartTable
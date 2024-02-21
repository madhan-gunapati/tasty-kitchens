import CartRow from "../CartRow"

const CartTable = ()=>{
    return <table className="w-11/12 text-center  bg-gray-300 m-auto my-2 rounded" >
    <tbody >
    <tr className="font-bold ">
        <td className="p-5">Item</td>
        <td className="p-5">Quantity</td>
        <td className="p-5">Price</td>
    </tr>
   
       <CartRow />
       <CartRow />
       <CartRow />
       <tr className="border-t-2 border-dashed border-gray-400 ">
    <td className="text-center p-4">
   Order Total:
    </td>
    <td></td>
    <td className="text-Orange font-semibold flex flex-col items-center p-5">₹ 16500.00 <button type='button' className="text-white bg-Orange p-2 m-2 rounded">Place Order</button></td>
</tr>
       </tbody>
   </table>
}

export default CartTable
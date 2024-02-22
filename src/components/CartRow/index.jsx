const CartRow = (props)=>{
    const {data} = props
    const {name , quantity , price , image_url} = data
    return <tr className="p-1">
    <td className="flex justify-center flex-grow-0 items-center">
    <img className="h-28 w-1/3 m-1 rounded hidden md:inline" src={image_url} alt='Restaurant logo' /> 
    <p className="w-2/3 md:w-1/3 md:text-sm text-xs">{name}</p>
    </td>
    <td>{quantity}</td>
    <td className="text-Orange font-semibold ">₹ {price * quantity}.00</td>
</tr>
}

export default CartRow
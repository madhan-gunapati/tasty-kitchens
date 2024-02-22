const CartRow = (props)=>{
    const {data} = props
    const {name , quantity , price , image_url} = data
    return <tr >
    <td className="flex justify-center flex-grow-0 items-center">
    <img className="h-28 w-1/3 m-1 rounded" src={image_url} alt='Restaurant logo' /> 
    <p className="w-1/3">{name}</p>
    </td>
    <td>{quantity}</td>
    <td className="text-Orange font-semibold">₹ {price * quantity}</td>
</tr>
}

export default CartRow
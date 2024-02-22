import { useSelector } from "react-redux"
import AppFooter from "../../components/AppFooter"
import AppHeader from "../../components/AppHeader"
import CartTable from "../../components/CartTable"
import { cartSelector } from "../../state/cartReducer"
import EmptyCart from "../../components/EmptyCart"
const Cart = ()=>{
   
    const cartData = useSelector(cartSelector);

    return <div>
        <AppHeader />
      {cartData.length === 0 ? <EmptyCart /> :   <CartTable data={cartData} />}
     
      
       
        <AppFooter />
    </div>
}

export default Cart
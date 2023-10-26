import {useContext} from "react";
import "./Cart.css"
import cartContext from "../Store/Cart-Context";

const Cart = props => {

    const cartCxt = useContext(cartContext);
    const numberOfItems = cartCxt.items.reduce((crct,item)=>{
        return crct + item.amount;
    },0)
    return(
        <button className="ct" onClick={props.onClick} >
            <span className="cart_span">{numberOfItems}</span>
            <span className="cart">Your Cart</span>
          
        </button>
    )
}

export default Cart;
import { useContext,useState } from "react";
import Modal from "../../UI/Modal";
import "./InsideCart.css"
import cartContext from "../Store/Cart-Context";
import CartItems from "./CartItems";
import OrderAddress from "../OrderAddress";

const InsideCart = props => {

  const [placeOrder, setPlaceOrder] = useState(false)

  const cartCtx = useContext(cartContext)
  const TotalAmont = `Rs.${cartCtx.TotalAmount}`;
  const hasItems = cartCtx.items.length > 0;
  const  cartItemsAdd = (item) => {
    cartCtx.Additems({...item ,amount:1});
  }
  const cartItemsRemove = (id) => {
    cartCtx.RemoveItems(id)
  }

  const submittedOrder = (userData) => {
    fetch("https://dummy-react-b85cc-default-rtdb.firebaseio.com/orders.json",{
      method : "POST",
      body : JSON.stringify(
        {
          user : userData,
          orderItems : cartCtx.items
        }
      )
    })
  }
 
    const cartItems = (
        <ul>
          {cartCtx.items.map((item) => (
            <CartItems 
            key ={item.id}
            name ={item.name}
            amount ={item.amount}
            price ={item.price}
            onAdd = {cartItemsAdd.bind(null,item)}
            onRemove = {cartItemsRemove.bind(null,item.id)}
            />
          ))}
        </ul>
      );
            
      const orderhandle = () => {
         setPlaceOrder(true)
      }
      

    return(
        <Modal onClose={props.onHideCard}>
          <div className="b">
          {cartItems}
            <div className="sp">
                <span className="total">Total Amount</span>
                <span>{TotalAmont}</span>
            </div>
            <div >
                <button onClick={props.onHideCard} className="c">Close</button>
                {hasItems && <button className="c" onClick= {orderhandle} >Order</button>}
            </div>  
           <div>
             {placeOrder && <OrderAddress  onConfirm = {submittedOrder} />}
           </div>
          </div>
        </Modal>
    );
}


export default InsideCart;
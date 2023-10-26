import React, {useReducer} from "react";
import cartContext from "./Cart-Context";


    const defaultCart = {
        items : [],
        TotalAmount : 0
    }
    const cartReducer = (state,action) => {
       

        if(action.type === "ADD"){
            const updatedTotalAmount = state.TotalAmount + action.item.price * action.item.amount;
            const exitingItemIndex = state.items.findIndex(item => 
                item.id === action.item.id
            )
            const exitingItem = state.items[exitingItemIndex]
            let updatedItems
            if(exitingItem){
              const updatedItem ={
                    ...exitingItem,
                   amount :exitingItem.amount + action.item.amount
                };
                updatedItems = [...state.items];
                updatedItems[exitingItemIndex] = updatedItem;
            }else {
                updatedItems = state.items.concat(action.item);
            }
            

            return {
                items:updatedItems,
                TotalAmount : updatedTotalAmount
            }
        }
        if(action.type === "REMOVE"){
            const exitingItemIndex = state.items.findIndex(item => 
                item.id === action.id
            );
            const exitingItem = state.items[exitingItemIndex];
            const updatedTotalAmount = state.TotalAmount - exitingItem.price;
            let updatedItems;
            if(exitingItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.id);
            }else {
                const updatedItem = {
                    ...exitingItem,
                    amount : exitingItem.amount -1
                };
                updatedItems = [...state.items];
                updatedItems[exitingItemIndex] = updatedItem;
            }
            return {
                items : updatedItems,
                TotalAmount : updatedTotalAmount
            }
        }
        return defaultCart;
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const CartProvider = props => {
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCart)
        const AdditemsHandler = (item)=>{
            dispatchCartAction({type : "ADD", item: item})
        }
        const RemoveItemsHandler = id => {
            dispatchCartAction({type: "REMOVE", id: id})
        }

    const cartItems = {
        items : cartState.items,
        TotalAmount : cartState.TotalAmount,
        Additems : AdditemsHandler,
        RemoveItems :RemoveItemsHandler
    }
    return(
        <cartContext.Provider value={cartItems}>
            {props.children}
        </cartContext.Provider>
    )
}


export default CartProvider;
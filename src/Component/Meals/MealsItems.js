import {useContext} from "react";
import "./MealsItems.css"
import Card from "../../UI/Card";
import MealsItemForm from "./MealItemForm";
import cartContext from "../Store/Cart-Context";

const MealsItems = props => {
    const cartCtx = useContext(cartContext)

    const price = `Rs:${props.price}`
    const addToCartHandler = amount => {
        cartCtx.Additems({
            id:props.id,
            name : props.name,
            amount : amount,
            price : props.price
        })
    }

    return(
        <Card >
            <div className="item">
            <div>
              <h2>{props.name}</h2>  
            
               <p> {props.des} </p>
            <div className="price">
                {price}
                </div>
            </div>
            <div>
                <MealsItemForm id={props.id} onAddCart={addToCartHandler}/>
            </div>
            </div>
            
        </Card>
    )
}

export default MealsItems;
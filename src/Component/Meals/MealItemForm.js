import {useRef, useState} from "react";
import Input from "../../UI/Input";

const MealsItemForm = props => {
    const [amountIsVaild, setAmountIsVaild] = useState(true)
    const amountInputRef = useRef()

 const onSubmitHandler = event => {
    event.preventDefault()
     const enterAmount = amountInputRef.current.value;
     const enterAmountNumber = +enterAmount;
    if(enterAmount.trim().length === 0 || enterAmountNumber < 1 || enterAmountNumber > 5 ){
        setAmountIsVaild(false)
        return;
    }
        props.onAddCart(enterAmountNumber);
    };

    return(
        <form onSubmit={onSubmitHandler}>
            <Input 
            ref ={amountInputRef}
            lable="Amount  "
            input ={{
                id:"amount_" ,
                type : "number",
                min :"1",
                max : "5",
                defaultValue:"1"
            }}
            />
            <button>+Add</button>
            {!amountIsVaild && <p>Please enter vaild</p>}
        </form>
    )
};


export default MealsItemForm;
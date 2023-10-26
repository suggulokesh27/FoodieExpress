import React from "react";
import "./Input.css"

const Input = React.forwardRef((props,ref) => {
    return(
        <div className="in">
            <label htmlFor={props.input.id}>{props.lable}</label>
            <input className="l" ref ={ref} {...props.input} />
        </div>
    )
});


export default Input;
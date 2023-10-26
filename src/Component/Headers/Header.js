import React from "react";
import './Header.css'
import Cart from "./Cart";

const Header =props => {
    return(
        <header>
            <h1>SubbuMeals</h1>
            <div>
                <Cart onClick={props.onCardShown} />
            </div>
        </header>
    )
}

export default Header;
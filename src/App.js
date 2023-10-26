import React, {  useState } from "react";
import InsideCart from "./Component/Cart/InsideCart";
import Header from "./Component/Headers/Header";
import Image from "./Component/ImageSlider/ImagesSlider";
import AvailableFood from "./Component/Meals/AvailableFood";
import CartProvider from "./Component/Store/CartProvider";

const App = (props) => {
    const [cartShown, setCartShown] = useState(false);

    const IsCartShown = () => {
        setCartShown(true)
    }
    const HideCart = () => {
        setCartShown(false)
    }

 return (
     <CartProvider>
        {cartShown && <InsideCart onHideCard ={HideCart}/>}
         <Header onCardShown ={IsCartShown} />
         <main>
         <Image />
         <AvailableFood />  
         </main>
           
     </CartProvider>
 )
}


export default App;
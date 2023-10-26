import React, { useRef } from "react";


const OrderAddress = (props) => {
    const enterDoorRef = useRef();
    const enterVillageRef = useRef();
    const enterCityRef = useRef();
    const enterPinCodeRef = useRef();

   

   const confirmOrder = (e) => {
        e.preventDefault();

        const enterDoor = enterDoorRef.current.value
        const enterVillage = enterVillageRef.current.value
        const enterCity = enterCityRef.current.value
        const enterPinCode = enterPinCodeRef.current.value

        props.onConfirm({
            door : enterDoor,
            village : enterVillage,
            city : enterCity,
            pincode : enterPinCode
        })
        console.log("Order Is Placed In Your Location.. Enjoyoo Pandagoyyy")
    }
    

    return(
        <form>
            <label htmlFor="door">Door No/ Street</label><br />
            <input type="text" id="door" ref={enterDoorRef} /><br />
            <label htmlFor="Village">Village Name</label><br />
            <input type="text" id="Village" ref={enterVillageRef} /><br />
            <label htmlFor="City">City Name</label><br />
            <input type="text" id="City" ref={enterCityRef} /><br />
            <label htmlFor="PinCode">PinCode</label><br />
            <input type="number" id="PinCode" ref={enterPinCodeRef} /><br />
            <button onClick={confirmOrder}>Confirm</button>
        </form>
    )
};


export default OrderAddress;
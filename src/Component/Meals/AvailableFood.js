import React, { useEffect, useState } from "react";
import MealsItems from "./MealsItems"

const DummyFoodItems = [
    {
        id : "f01",
        ItemName : "Chicken Biryani",
        Description : "Its Hummy Hummy CB, BoneLess ChickenBiryani",
        Price : 250
    },
    {
        id : "f02",
        ItemName : "Pappu Annam with Avakay",
        Description : "Once eat,You agian can ready to Order, That its Capacity",
        Price : 150
    }
]
const AvailableFood = props => {

    const [meals, setMeals] = useState(DummyFoodItems);
    // const [httpError, setHttpError] = useState(false);

    // useEffect(() => {
    //   const  fetchHandler = async() => {
    //         const response = await fetch("https://dummy-react-b85cc-default-rtdb.firebaseio.com/meals.json");

    //         if (!response.ok){
    //             throw new Error ("somthing Wrong")
    //         }
    //         const responseData = await response.json();

    //         const loadMeals = [];

    //         for (const key in responseData){
    //             loadMeals.push({
    //                 id: key,
    //                 ItemName : responseData[key].ItemName,
    //                 Description : responseData[key].Description,
    //                 Price : responseData[key].Price
    //             })
    //         }
    //         setMeals(loadMeals)
    //     }
    //    fetchHandler().catch(error => {
    //        setHttpError(error.message)
    //    })
    // }, []);
    // if(httpError){
    //     return<section>
    //         <p>{httpError}</p>
    //     </section>
    // }
    const Meals = meals.map((meal) => (
        <MealsItems 
           id ={meal.id}
            key={meal.id}
            name ={meal.ItemName}
            des ={meal.Description}
            price = {meal.Price}
        />
    ))
    return(
        <ul>
            <li>
                {Meals}
            </li>
        </ul>
    )
}



export default AvailableFood;
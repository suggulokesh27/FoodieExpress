import React from "react";

const cartContext = React.createContext({
    items : [],
    TotalAmount : 0,
    Additems :(items)=>{},
    RemoveItems : (id) => {}
});

export default cartContext;
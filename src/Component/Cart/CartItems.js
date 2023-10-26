import "./CartItems.css"


const CartItems = props => {
    const price = `Rs.${props.price}`
    return (
        <li className="all">
            <div className="name">
            <h2>{props.name}</h2>
            <div className="spp">
                <span>{price}</span>
                <span className="spp1"> x{props.amount}</span>
            </div>
            </div>
            <div className="ab">
                <button onClick={props.onAdd} className="add">+</button>
                <button onClick={props.onRemove} className="add">-</button>
            </div>
        </li>
    )
};


export default CartItems;
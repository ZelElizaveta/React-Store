const BasketItem = (props) => {
    const {id, 
            name, 
            price, 
            quantity, 
            removeRromBasket = Function.prototype,
            incQuantity = Function.prototype,
            decQuantity = Function.prototype,
        } = props;

    return (
        <li className="collection-item basket-item">
            {name} 
            <i className="material-icons quantity-icon" onClick={() => incQuantity(id)}>add</i> 
            х {quantity} 
            <i className="material-icons quantity-icon" onClick={() => decQuantity(id)}>remove</i> = {price*quantity} руб.
            <span 
                className="secondary-content" 
                onClick={() => removeRromBasket(id)}>
                <i className ="material-icons basket-clear">clear</i>
            </span>
        </li>
    )
}

export default BasketItem
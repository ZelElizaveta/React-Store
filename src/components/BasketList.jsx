import BasketItem from "./BasketItem";
const BasketList = (props) => {
    const{order = [], 
        handleBasketShow = Function.prototype, 
        removeRromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <>
            <ul className="collection basket-list">
                <li className="collection-item active deep-purple accent-1">
                    <i className="material-icons right" onClick={handleBasketShow}>clear</i>Корзина
                </li>
                {
                    order.length ? order.map(item => (
                        <BasketItem 
                            key={item.id} {...item} 
                            removeRromBasket={removeRromBasket}
                            incQuantity={incQuantity}
                            decQuantity={decQuantity}
                        />)) : 
                    <li className="collection-item">Корзина пуста</li>
                }
                <li className="collection-item active deep-purple accent-1">Общая стоимость:  
                     <span className="basket-span">{totalPrice} руб.</span>
                    <button className="secondary-content right btn-small">Оформить</button>
                </li>
            </ul>
        </>
    )
}

export default BasketList
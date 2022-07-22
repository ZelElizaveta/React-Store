import React, { useState, useEffect } from "react";
import Service from "../services/Service";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Overlay from "./Overlay";
import Alert from "./Alert";



const Shop = () => {
    const[goods, setGoods] = useState([]);
    const[loading, setLoading] = useState(true);
    const[order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const service = new Service();

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
        Alert(item.name)
    };

    const removeRromBasket = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId)
        setOrder(newOrder)
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return ({
                    ...el,
                    quantity: newQuantity
                })
            } else {
                return el
            }
        })
        setOrder(newOrder);
    }
    const decQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return ({
                    ...el,
                    quantity: newQuantity >= 1 ? newQuantity : 1
                })
            } else {
                return el
            }
        })
        setOrder(newOrder);
        
    }

    useEffect(function getGoods() {
        service.getResource()
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Cart quantity = {order.length} handleBasketShow={handleBasketShow}/>
            {loading ? <Preloader/> : 
                <GoodsList 
                    goods={goods} 
                    addToBasket={addToBasket} 
                />
            }
            {isBasketShow && 
                <BasketList 
                    order={order} 
                    handleBasketShow={handleBasketShow} 
                    removeRromBasket={removeRromBasket}
                    incQuantity={incQuantity}
                    decQuantity = {decQuantity}
                />
            }
            {isBasketShow && <Overlay/>}
        </main>
    )
}

export default Shop
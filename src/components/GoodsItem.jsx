import React from "react";

const GoodsItem = (props) => {
    const {
        id,
        name,
        description,
        price,
        icon,
        full_background,
        addToBasket = Function.prototype,
    } = props;

    return (
        <>    
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={full_background} alt={name}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{name}</span>
                </div>
                <div className="card-action">
                    <button className='btn  deep-purple lighten-3'
                        onClick={() =>
                            addToBasket({
                                id,
                                name,
                                price,
                            })
                        }
                    > <i className="material-icons left">add_shopping_cart</i>Купить
                    </button>
                    <span className="right price">{price} руб.</span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4 reveral">{name}</span>
                    <p>{description}</p>
                    <img className="icon" src={icon} alt="icon"/>
                </div>
            </div>
        </>
    )
}

export default GoodsItem


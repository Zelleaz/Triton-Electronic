import React from 'react';
import {IProduct} from "../types/types";
import {buyProduct} from "../redux/actions/actionCreator";
import {useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';

const Card: React.FC<IProduct> = ({image, name, price, isPurchased, id}) => {
    const dispatch = useDispatch()

    return (
        <div className='main-card'>
            <div className="main-card__img">
                <img src={image} alt={name}/>
            </div>

            <h3 className="main-card__title">
                {name}
            </h3>

            <div className="main-card__price">
                Price: {price}$
            </div>

            {!isPurchased ? <button
                onClick={() => dispatch(buyProduct({image, name, price, id, value: 1})) }
                className="main-card__btn"
            >
                Add to cart
            </button> : <NavLink to='/cart' className='main-card__btn'>Place an order</NavLink>}

        </div>
    );
};

export default Card;
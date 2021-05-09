import React from 'react';
import {ICartItem} from "../types/types";
import {useDispatch} from "react-redux";
import {addOneProduct, removeOneProduct} from "../redux/actions/actionCreator";

const Good: React.FC<ICartItem> = ({id, price, name, value}) => {
    const dispatch = useDispatch()

    return (
        <div className='goods-item'>
            <h5 className="goods-item__title">{name}</h5>

            <div>
                <div className="goods-item-counter">
                    <button onClick={() => dispatch(removeOneProduct({id, price, value, name,  image: '', isPurchased: true}))} className="goods-item-counter__btn">-</button>
                    {value}
                    <button onClick={() => dispatch(addOneProduct({id, price, name, value, isPurchased: true, image: ''}))} className="goods-item-counter__btn">+</button>
                </div>

                Price: {price}$
            </div>
        </div>
    );
};

export default Good;
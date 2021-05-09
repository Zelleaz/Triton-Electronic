import React from 'react';
import { NavLink } from 'react-router-dom';
import {ICartItem} from "../types/types";
import {useSelector} from "react-redux";
import Good from "./Good";
import {IRootState} from "../redux/reducers/rootReducer";



const GoodsList: React.FC = () => {
    const goods: ICartItem[] = useSelector((state: IRootState) => state.products.cart)

    return (
        <ul className='goods'>
            {
                goods.length === 0 ? <li className='goods-item goods-item_empty'><NavLink to='/'>Your Cart is empty! Go to home page to buy something!</NavLink></li>
                    : goods.map(good => <Good {...good} key={good.id} />)
            }
        </ul>
    );
};

export default GoodsList;
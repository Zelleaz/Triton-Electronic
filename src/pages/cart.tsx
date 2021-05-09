import React from 'react';
import CreditCard from '../components/CreditCard';
import Form from '../components/Form';
import GoodsList from "../components/GoodsList";
import {ICartItem} from "../types/types";
import {useDispatch, useSelector} from "react-redux";
import {buy} from "../helpers/helperes";
import {IRootState} from "../redux/reducers/rootReducer";
import {validate} from "../helpers/validation";

const Cart: React.FC = () => {
    const goods: ICartItem[] = useSelector((state: IRootState) => state.products.cart)
    const totalPrice: number = useSelector((state: IRootState) => state.products.totalPrice)
    const {expires, number, holder, cvv} = useSelector((state: IRootState) => state.card)
    const dispatch = useDispatch()
    const validation = () => {
        if (validate({expires, number, holder, cvv})) {
            buy(dispatch)
        }
    }

    return (
        <div className='cart'>
            <div className="container_small">
                <div className="card-container">
                    <CreditCard />

                    <Form/>
                </div>
            </div>

            <div className="container container_goods">
                <GoodsList />

                {goods.length > 0 ? <div className="cart-info">
                    <h2>Total price: {totalPrice}$</h2>

                    <button onClick={() => validation()} className="cart-info__btn">Buy</button>
                </div> : null}
            </div>
        </div>
    )
}

export default Cart;
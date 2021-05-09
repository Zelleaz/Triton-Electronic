import React from 'react';
import {State} from "../types/types";
import {NavLink} from "react-router-dom";
import cartImg from '../static/img/shopping-cart.svg'
import Card from "../components/Card";
import {useSelector} from "react-redux";
import {IRootState} from "../redux/reducers/rootReducer";



const Home: React.FC = () => {
    const products: State = useSelector((state: IRootState) => state.products);
    return (
        <main className='main'>
            <div className="container">
                <div className="main__link">
                    <NavLink to='/cart'>
                        <img src={cartImg} alt="Cart"/>
                    </NavLink>
                </div>

                <div className="main-cards">
                    {products.products.map((product) => <Card {...product} key={product.id} />) }
                </div>
            </div>
        </main>
    );
};

export default Home;
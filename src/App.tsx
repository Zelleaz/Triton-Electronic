import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Cart from "./pages/cart";

const App: React.FC = () => {
    return (
        <Switch >
            <Route path='/cart' component={Cart} />
            <Route path='/' component={Home} />
        </Switch>
    );
};

export default App;
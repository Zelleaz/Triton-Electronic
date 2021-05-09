import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './static/styles/index.scss';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

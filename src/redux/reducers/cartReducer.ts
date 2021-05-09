import {IAction, ICartItem, IProduct, State} from "../../types/types";
import {ActionsTypes} from "./actions";
import {totalPriceHelper} from "../../helpers/helperes";

const initialState: State = {
    products: [
        {
            id: 1,
            name: 'Pineapple',
            price: 5,
            image: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGluZWFwcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            isPurchased: false,
            value: 0
        },
        {
            id: 2,
            name: 'MacBook',
            price: 1000,
            image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBhcHBsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            isPurchased: false,
            value: 0
        },
        {
            id: 3,
            name: 'Pencil',
            price: 0.3,
            image: 'https://images.unsplash.com/photo-1589278559766-6d2fc8520367?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlbmNpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            isPurchased: false,
            value: 0
        },
        {
            id: 4,
            name: 'Banana',
            price: 5,
            image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW5hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            isPurchased: false,
            value: 0
        },
        {
            id: 5,
            name: 'House',
            price: 100000,
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            isPurchased: false,
            value: 0
        },
    ],
    cart: [],
    totalPrice: 0
}

export const cartReducer = (state: State = initialState, action: IAction): State => {
    switch (action.type) {
        case ActionsTypes.buy:
            return <State>{
                totalPrice: totalPriceHelper(state.totalPrice + action.payload.price),
                products: state.products.map((product) => {
                    if (product.id === action.payload.id) {
                        return <IProduct>{
                            ...action.payload,
                            isPurchased: true
                        }
                    } else {
                        return product
                    }
                }),
                cart: [...state.cart, action.payload]
            }
        case ActionsTypes.reset: return initialState
        case ActionsTypes.remove:
            let cart: ICartItem[]
            if (action.payload.value > 1) {
                cart = state.cart.map((cartItem) => {
                    if (cartItem.id === action.payload.id) {
                        return {
                            ...action.payload,
                            value: cartItem.value - 1
                        }
                    } else {
                        return cartItem
                    }
                })
            } else {
                cart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id)
            }
            return {
                products: state.products.map((product) => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            isPurchased: false
                        }
                    } else {
                        return product
                    }
                }),
                totalPrice: totalPriceHelper(state.totalPrice - action.payload.price),
                cart
            }
        case ActionsTypes.add:
            return <State>{
                ...state,
                totalPrice: totalPriceHelper(state.totalPrice + action.payload.price),
                cart: state.cart.map((cartItem) => {
                    if (cartItem.id === action.payload.id) {
                        return {
                            ...cartItem,
                            value: cartItem.value + 1
                        }
                    } else {
                        return cartItem
                    }
                })
            }
        default: return state
    }
}
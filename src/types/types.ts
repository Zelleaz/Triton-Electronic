import {ActionsTypes} from "../redux/reducers/actions";

export interface ICartItem {
    name: string
    id: number
    price: number
    image: string
    value: number
}

export interface State {
    products: IProduct[],
    cart: ICartItem[],
    totalPrice: number
}

export interface IProduct {
    name: string
    id: number
    price: number
    image: string
    isPurchased: boolean
    value: number
}

export interface IAction {
    type: ActionsTypes
    payload: IProduct | ICartItem
}

export interface IClearAction {
    type: ActionsTypes
}

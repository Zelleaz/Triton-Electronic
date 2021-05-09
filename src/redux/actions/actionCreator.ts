import {IAction, ICartItem, IClearAction, IProduct} from "../../types/types";
import {ActionsTypes} from "../reducers/actions";


export const buyProduct = (payload: ICartItem): IAction => {
    return {
        type: ActionsTypes.buy,
        payload: payload
    }
}

export const addOneProduct = (payload: IProduct): IAction => {
    return {
        type: ActionsTypes.add,
        payload: payload
    }
}

export const removeOneProduct = (payload: IProduct): IAction => {
    return {
        type: ActionsTypes.remove,
        payload: payload
    }
}

export const sessionResetCreator = (): IClearAction => {
    return {
        type: ActionsTypes.reset
    }
}
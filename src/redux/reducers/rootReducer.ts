import {combineReducers} from "redux";
import {cartReducer} from "./cartReducer";
import {cardReducer} from "./cardReducer";

export const rootReducer = combineReducers({
    products: cartReducer,
    card: cardReducer
})

export type IRootState = ReturnType<typeof rootReducer>
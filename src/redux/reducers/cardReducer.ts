import {CardAction, CardActionTypes, CardState} from "../../types/card";


const initialState: CardState = {
    number: '',
    holder: '',
    expires: '',
    cvv: ''
}

export const cardReducer = (state: CardState = initialState, action: CardAction) => {
    switch (action.type) {
        case CardActionTypes.setCvv:
            return {
                ...state,
                cvv: action.payload
            }
        case CardActionTypes.setExpires:
            return {
                ...state,
                expires: action.payload
            }
        case CardActionTypes.reset:
            return initialState
        case CardActionTypes.setHolder:
            return {
                ...state,
                holder: action.payload
            }
        case CardActionTypes.setNumber:
            return {
                ...state,
                number: action.payload
            }
        default: return state
    }
}
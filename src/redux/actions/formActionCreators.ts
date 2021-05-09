import {CardAction, CardActionTypes} from "../../types/card";


export const setNumberCreator = (payload: string): CardAction => {
    return {
        type: CardActionTypes.setNumber,
        payload
    }
}

export const setCvvCreator = (payload: string): CardAction => {
    return {
        type: CardActionTypes.setCvv,
        payload
    }
}

export const setHolderCreator = (payload: string): CardAction => {
    return {
        type: CardActionTypes.setHolder,
        payload
    }
}

export const setExpiresCreator = (payload: string): CardAction => {
    return {
        type: CardActionTypes.setExpires,
        payload
    }
}

export const formResetCreator = (): CardAction => {
    return {
        type: CardActionTypes.reset
    }
}
import {formResetCreator} from "../redux/actions/formActionCreators";
import {sessionResetCreator} from "../redux/actions/actionCreator";
import {IClearAction} from "../types/types";
import {Dispatch} from "redux";
import {CardAction, CardState} from "../types/card";


export const totalPriceHelper = (price: number): number => {
    return parseFloat(price.toFixed(1))
}

export const strTrim = (str: string): string => {
    let res = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i].trim()
        if (char !== '') {
            res += char
        }
    }
    return res
}

export const buy = (dispatch: Dispatch<CardAction | IClearAction>): void => {
    dispatch(formResetCreator())
    dispatch(sessionResetCreator())
    alert('Successfully bought! Thank you to visit our shop!')
}

export const expiresHelper = (string: string, card: CardState): string => {
    let res = ''
    for (let i = 0; i < 2; i++) {
        let char = card.expires[i]
        char ? res += char : res += 'M'
    }
    res += '/'
    for (let i = 3; i < 5; i++) {
        let char = card.expires[i]
        char ? res += char : res += 'Y'
    }
    return res
}

export const getImageName = (number: number): string | boolean => {
    switch (number) {
        case 5:
            return 'mc'
        case 2:
            return 'mir'
        case 4:
            return 'visa'
        default: return false
    }
}

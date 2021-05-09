export interface CardState {
    number: string
    holder: string
    expires: string
    cvv: string
}

export enum CardActionTypes {
    setNumber = 'SET_NUMBER',
    setHolder = 'SET_HOLDER',
    setExpires = 'SET_EXPIRES',
    setCvv = 'SET_CVV',
    reset = 'RESET'
}

export interface CardAction {
    type: CardActionTypes,
    payload?: string
}
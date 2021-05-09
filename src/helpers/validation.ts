interface IValidation {
    number: string
    holder: string
    expires: string
    cvv: string
}

export const validate = ({expires, holder, number, cvv}: IValidation): boolean => {
    const firstNum = parseInt(number[0])
    const month = parseInt(expires.slice(0,2))
    const year = parseInt(expires.slice(3,5))
    const tHolder = holder.trim()

    switch (firstNum) {
        case 4:
            break
        case 5:
            break
        case 2:
            break
        default:
            alert('Wrong type of card! We supported only Visa, MasterCard and Mir.')
            return false
    }

    if (tHolder.length > 60 || tHolder.length < 4) {
        alert('Information about holder is too long or too short! It must be shorter than 60 characters and bigger than 4 characters.')
        return false
    } else if (month > 12 || year < 21) {
        alert('Wrong month or year. Please check that month is less or equal 12 and year is 21 or bigger.')
        return false
    } else if (cvv.length < 3) {
        alert('Your cvv code is too short! It must be 3 characters.')
        return false
    } else if (number.length < 16) {
        alert('Your card number is too short! It must be 16 characters.')
        return false
    } else {
        return true
    }
}

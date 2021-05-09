import React from 'react';
import {
    setCvvCreator,
    setExpiresCreator,
    setHolderCreator,
    setNumberCreator
} from "../redux/actions/formActionCreators";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../redux/reducers/rootReducer";
import MaskedInput from 'react-text-mask'
import {CardState} from "../types/card";

const Form = () => {
    const card: CardState = useSelector((state: IRootState) => state.card)
    const dispatch = useDispatch()



    return (
        <form onSubmit={(e) => e.preventDefault()} className="card-form">
            <fieldset>
                Card Number

                <MaskedInput
                    mask={[/[1-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/,]}
                    placeholderChar='#'
                    guide={false}
                    value={card.number}
                    onChange={(event) => dispatch(setNumberCreator(event.target.value))}
                    className='card-form__input'
                    type='text'
                />
            </fieldset>

            <fieldset>
                Card Holder
                <input
                    value={card.holder}
                    onChange={(event) => dispatch(setHolderCreator(event.target.value))}
                    className='card-form__input'
                    type='text'
                    required
                />
            </fieldset>


            <div className="card-form-row">
                <fieldset>
                    Expires
                    <MaskedInput
                        mask={[/[0-9]/, /\d/, '/', /\d/, /\d/]}
                        value={card.expires}
                        guide={false}
                        placeholder='MM/YY'
                        onChange={(event) => dispatch(setExpiresCreator(event.target.value))}
                        className='card-form__input'
                        type='text'
                        required
                    />
                </fieldset>

                <fieldset>
                    CVV
                    <MaskedInput
                        guide={false}
                        value={card.cvv}
                        mask={[/[0-9]/, /\d/, /\d/]}
                        onChange={(event) => dispatch(setCvvCreator(event.target.value))}
                        className='card-form__input'
                        type='password'
                        required
                    />
                </fieldset>
            </div>
        </form>
    );
}

export default Form;
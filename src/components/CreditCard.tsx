import React, {useMemo} from 'react';
import {useSelector} from "react-redux";
import {IRootState} from "../redux/reducers/rootReducer";
import {expiresHelper, getImageName} from "../helpers/helperes";
import MaskedInput from "react-text-mask";
import {CardState} from "../types/card";

const CreditCard = () => {
    const card: CardState = useSelector((state: IRootState) => state.card)
    const expires: string = useMemo(() => expiresHelper(card.expires, card), [card.expires])

    return (
        <div className="card">
            <div className="card__bank">
                {
                    getImageName(parseInt(card.number[0]))
                        ? <img
                            src={`./img/${getImageName(parseInt(card.number[0]))}.png`}
                            alt="Bank"
                        />
                        : null
                }
            </div>


            <div className="card-number">
                <MaskedInput
                    mask={[/[1-9]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/,]}
                    placeholder={'#### #### #### ####'}
                    placeholderChar='#'
                    disabled
                    value={card.number}
                    className='card-number__item'
                />
            </div>

            <div className="card-info">
                <div className="card-info-item">
                    <h4 className="card-info-item__title">
                        Card Holder
                    </h4>
                    {card.holder ? card.holder : 'NAME LASTNAME'}
                </div>

                <div className="card-info-item">
                    <h4 className="card-info-item__title">
                        Expires
                    </h4>
                    {
                        expires
                    }
                </div>
            </div>
        </div>
    );
};

export default CreditCard;
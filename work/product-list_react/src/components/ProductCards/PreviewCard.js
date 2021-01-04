import React from 'react';
import PropTypes from 'prop-types';
import {useAlert} from '../Modal';
import FormOrder from './FormOrder'
import close from '../../img/close.svg'

export default function PreviewCard({card, order}) {
    const alert = useAlert()

    if (!alert.visible) return null

    return (
        <div className="modal-wrapper" >
            <div className="modal-overlay" />
            <div className="modal-window">
                <div className="modal-body">
                    <span className="close_btn" onClick={alert.hide}>
                        <img src={close} alt="close button" />
                    </span>
                    <div className="single-card_preview">
                        <div className="single-card_category">{card.preview.category}</div>
                        <h2 className="single-card_category">{card.preview.name}</h2>
                        <div className="single-card_price"><sup>$</sup> {card.preview.price}</div>
                        <FormOrder order={() => order(card)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

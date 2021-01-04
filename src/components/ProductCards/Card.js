import React from 'react';

const Card = ({ card, preview }) => (
    <div key={card.name} className="single-card">
        <h3 className="single-card_category">{card.category.toUpperCase()}</h3>
        <h2 className="single-card_name">{card.name}</h2>
        <div className="flex-container">
            <div className="single-card_price"><sup>$</sup> {card.price}</div>
            <a href="#" className="btn btn_white single-card_btn" onClick={() => {preview(card)}} >Buy</a>
        </div>
    </div>
)

export default Card;

import React, {useState, useEffect} from 'react';
import Card from './Card';
import PreviewCard from './PreviewCard';

const ProductCards = ({cardsList, preview, onPreview, onOrder, onBuyCheapest}) => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        if(cardsList) {
            setCards(cardsList)
        }
    }, [cardsList?.length]);

    return (
        <div className="card-list">
            <div className="container flex-container">
                {cards === null ? (
                    <p>loading ...</p>
                ) : (
                    cards.map((card) =>  (
                        <Card card={card} preview={onPreview} />
                    ))
                )}
            </div>
            <PreviewCard card={preview} order={onOrder} />
            <div className="container">
                <button className="btn btn_mint btn_cheapest" onClick={onBuyCheapest}>Buy cheapest</button>
            </div>
        </div>
    )
}

export default ProductCards;

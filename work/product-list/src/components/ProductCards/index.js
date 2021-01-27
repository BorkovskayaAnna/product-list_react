import React, {useState, useEffect} from 'react';
import CardItem from './CardItem';

const ProductCards = ({cardsList}) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        if(cardsList) {
            setCards(cardsList)
        }
    }, [cardsList?.length]);

    return (
        <div className="container flex-container">
            {cards === null ? (
                <p>loading ...</p>
            ) : (
                cards.map((card) =>  (
                    <CardItem key={card.name} card={card} />
                ))
            )}
        </div>
    )
}

export default ProductCards;

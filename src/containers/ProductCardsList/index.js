import React, {useState, useEffect} from 'react';
import ProductCards from '../../components/ProductCards';
import {useAlert} from '../../components/Modal'

const ProductCardsList = () => {
    const [cards, setCards] = useState(null)
    const [preview, setPreview] = useState(null)
    const {show} = useAlert()

    const onPreviewHandler = card => {
        setPreview({preview:card})
        show()
    };

    const onOrderHandler = card => {
        console.log(
            `name: ${card.preview.name}
             category: ${card.preview.category}
             price: ${card.preview.price}
            `
        )
    }

    const onBuyCheapestHandler = () => {
        const getCheapest = cards.reduce((res, obj) => {
            return (obj.price < res.price) ? obj : res;
        });
        setPreview({preview:getCheapest})
        show()
    }

    useEffect(() => {
        async function fetchData() {
            const url = "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e";
            const res = await fetch(url);
            const data = await res.json();
            const slicedData = data.slice(0,6)
            setCards(slicedData);
        }
        fetchData();
    }, []);

    return (
        <ProductCards
            cardsList={cards}
            preview={preview}
            onPreview={onPreviewHandler}
            onOrder={onOrderHandler}
            onBuyCheapest={onBuyCheapestHandler}
        />
    )
}

export default ProductCardsList;

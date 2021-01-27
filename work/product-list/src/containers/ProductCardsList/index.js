import React, {useState, useEffect} from 'react';
import ProductCards from '../../components/ProductCards';
import cardsList from '../../cardsList';

const ProductCardsList = () => {

    return (
        <ProductCards
            cardsList={cardsList}
        />
    )
}

export default ProductCardsList;

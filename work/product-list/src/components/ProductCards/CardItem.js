import React from 'react'
import styled from 'styled-components';
import ColorSelect from './ColorSelect'
import AddToCompare from './AddToCompare';
import Counter from "./Counter";
import VolumeCheckbox from "./VolumeCheckbox";

const Title = styled.p`
    color: #2c2c2d;
    font-family: "San Francisco", sans-serif;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
`

const Descr = styled(Title)`
    font-size: 16px;
    line-height: 24px;
    text-align: left;
`
const Price = styled.div`
    color: #000;
    font-family: "San Francisco", sans-serif;
    font-size: 18px;
    font-weight: 600;
  
    @media (max-width: 991px) {
        margin: 20px auto 0
    }
`
const CardItem = ({ card }) => (
    <div className="single-card">
        <div className="status-label btn_gradient">New</div>
        <AddToCompare />
        <div className="single-card_img">
            <img src={card.img} className="card-img" alt={card.name} />
            <img src={card.imgOnHover} className="card-img_hover" alt={card.name} />
        </div>
        <Title>{card.name}</Title>
        <Descr>{card.description}</Descr>
        <div className="flex-container">
            <ColorSelect card={card} />
            <Price>{card.price} грн</Price>
        </div>
        <VolumeCheckbox card={card} />
        <div className="flex-container">
            <Counter />
            <button className="btn-buy btn_gradient">Купить</button>
        </div>
    </div>
)

export default CardItem;

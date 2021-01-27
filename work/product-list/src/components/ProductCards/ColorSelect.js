import React, { useState } from 'react'
import styled from 'styled-components';
import arrow from '../../img/arrow.svg'

const DropDownContainer = styled.div`
    position: relative;
    width: 235px;
    background: #fff;
    border-radius: 15px;
    box-shadow: ${props => props.open ? "0 4px 4px 0 rgba(0,0,0,0)" : "0 4px 4px 0 rgba(0,0,0,0.25)"};

    @media (max-width: 991px) {
        width: 100%;
    }
`;

const DropDownHeader = styled.div`
    padding: 8px 16px;
    width: inherit;
    height: inherit;
    font-family: "San Francisco", sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer
`;

const DropDownListContainer = styled.div`
    max-height: 124px;
    overflow-y: scroll;
    width: inherit;
    border-radius: 15px;
    
    &::-webkit-scrollbar {
        width: 3px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #e0e9f2;
        border-radius: 15px;
        box-shadow: 0 0 15px 0 rgba(0,0,0,.1);
    }
`;

const DropDownList = styled.ul`
    margin: 0;
    padding: 0;
    background: #fff;
    border-radius: 15px;
`;

const ListItem = styled.li`
    padding: 8px 16px;
    width: calc(100% - 30px);
    background: #fff;
    border-radius: 0 15px 15px 0;
    list-style: none;
    font-size: 14px;
    transition: all ease .4s;
  
    &:hover {
        background: #f3f8fc;
        cursor: pointer
    }
`;

const Arrow = styled.img`
    position: absolute;
    right: 15px;
    top: 13px;
    width: 12px;
    transform: ${props => props.open ? "rotate(180deg)" : "rotate(0deg)"};
`;

const ColorSelect = ({ card }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(null);

    const toggleHandle = () => setIsOpen(!isOpen)

    const onMouseLeave = () => setIsOpen(false)

    const selectHandle = (e) => {
        const current = e.currentTarget.innerText
        setIsSelected(current)
        setIsOpen(false)
    }

    return (
        <DropDownContainer open={isOpen} onMouseLeave={onMouseLeave}>
            <DropDownHeader onClick={toggleHandle}>
                {isSelected === null ? 'Цвет' : isSelected}
                <Arrow src={arrow} open={isOpen} alt="arrow" />
            </DropDownHeader>

            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        {card.color.map((color) =>  (
                            <ListItem onClick={selectHandle}>{color}</ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}

        </DropDownContainer>
    )
}

export default ColorSelect;

import React, { useState } from 'react'
import styled from 'styled-components';
import minus from '../../img/minus.svg'
import plus from '../../img/plus.svg'

const CounterWrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0 8px;
    width: 92px;
    height:40px;
    background: #e2e9f0;
    border-radius: 30px;
    transition:  all ease .4s;
  
    &:hover {
        box-shadow: 0 0 4px 0 rgba(0,0,0,.25);
    }
`;

const EventsBtn = styled.span`
    position: relative;
    top: -4px;
    width: 10px;
    height: 10px;
    cursor: pointer
`;

const Input = styled.input`
    margin: 0;
    padding: 0;
    width: 100%;
    background: none;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    text-align: center;
`;

const Icon = styled.img`
    width: 10px;
    height: 10px
`;



const Counter = () => {
    const [counter, setCounter] = useState(1);

    const increment = () => setCounter(counter + 1)
    const decrement = () => setCounter(counter - 1)

    return (
        <CounterWrap>
            <EventsBtn onClick={decrement}>
                <Icon src={minus} alt="minus" />
            </EventsBtn>
            <Input type="text" value={counter} min="1" />
            <EventsBtn onClick={increment}>
                <Icon src={plus} alt="plus" />
            </EventsBtn>
        </CounterWrap>
    )
}

export default Counter;

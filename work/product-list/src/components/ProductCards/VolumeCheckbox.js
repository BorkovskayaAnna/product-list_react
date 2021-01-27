import React, { useState } from 'react';
import styled from 'styled-components';

const CheckboxWrap = styled.div`
    margin: 30px 0
`

const CheckboxItem = styled.div`
    position: relative;
    display: block;
    margin: 0 0 16px;
`;

const RadioBtn = styled("input")`
  position: absolute;
  display: block;
  margin: 0;
  width: 120px;
  height: 20px;
  opacity: 0;
  cursor: pointer;
`;

const LabelText = styled.span`
    padding-left: 30px;
    color: #000;
    font-family: "San Francisco", sans-serif;
    font-size: 16px;
    font-weight: 500;
`

const VolumeCheckbox = ({ card }) => {
    const [value, setValue] = useState(null);

    const checkedHandle = (e) => {
        const current = e.target.value;
        setValue(current);
    }

    return (
        <CheckboxWrap>
            {card.volume.map((volume, i) =>  (
                <CheckboxItem key={i} >
                    <RadioBtn
                        type="radio"
                        id={i}
                        name={`card_${card.id}`}
                        value={volume}
                        onChange={() => checkedHandle}
                        checked={volume === volume}
                    />
                    <LabelText htmlFor={`card_${card.id}_${i}`} >{volume} мл</LabelText>
                </CheckboxItem>
            ))}
        </CheckboxWrap>
    )
}

export default VolumeCheckbox;

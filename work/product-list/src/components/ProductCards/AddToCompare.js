import React, { useState } from 'react'
import compareIcon from "../../img/add.svg";
import compareIconDone from "../../img/done.svg";

const AddToCompare = () => {
    const [isCompare, setIsCompare] = useState(false);

    const compareHandle = () => setIsCompare(!isCompare)

    return (
        <div className="compare-label" onClick={compareHandle}>
            <img src={!isCompare ? compareIcon : compareIconDone} alt="add to compare"/>
        </div>
    )
}

export default AddToCompare;

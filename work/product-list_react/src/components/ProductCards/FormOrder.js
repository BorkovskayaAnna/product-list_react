import React, {useState} from 'react';
import {REQUIRED_FIELD, NUMBER_LENGTH, ONLY_LETTERS, ONLY_NUMBERS} from '../../constants';
import arrow from '../../img/arrow-right.svg'

export default function FormOrder({order, card}) {
    const [data, setData] = useState({name: '', number: ''});
    const [errors, setErrors] = useState({})

    const numRegExp = new RegExp('^[0-9]+$');
    const nameRegExp = new RegExp('^[A-z]+$')

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value});
        setErrors({...errors, [e.target.name]: ''})
    };

    const handleSubmit = e => {
        e.preventDefault()
        const errors = validate(data)
        setErrors(errors)

        if (Object.keys(errors).length === 0) {
            console.log(data)
        }
    }

    const validate = data => {
        const errors = {}

        if (!data.name) errors.name = REQUIRED_FIELD

        if (!data.number) errors.number = REQUIRED_FIELD

        if (data.name && !nameRegExp.test(data.name)) errors.name = ONLY_LETTERS

        if (data.number && !numRegExp.test(data.number))  errors.number = ONLY_NUMBERS

        if (data.number && data.number.length !== 12 )  errors.number = NUMBER_LENGTH

        return errors
    }

    const onBlurHandler = e => {
        const current = e.target.value

        if(current.length > 0) {
            const errors = validate(data)
            setErrors(errors)
        }
    };

    return (
        <form className="form_order" onSubmit={handleSubmit}>
            <div className={errors.name ? "input-wrap error" : "input-wrap success"}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    value={data.name}
                    onChange={handleChange}
                    onBlur={onBlurHandler}
                />
                {errors.name ? <span>{errors.name}</span> : ''}
            </div>
            <div className={errors.number ? "input-wrap error" : "input-wrap success"}>
                <input
                    type="text"
                    name="number"
                    placeholder="Number"
                    autoComplete="off"
                    value={data.number}
                    onChange={handleChange}
                    onBlur={onBlurHandler}
                />
                {errors.number ? <span>{errors.number}</span> : ''}
            </div>
            <button type="submit" className="btn btn_mint btn_order"
               onClick={() => order(card)}>
                <span>Order</span>
                <img src={arrow} />
            </button>
        </form>
    )
}

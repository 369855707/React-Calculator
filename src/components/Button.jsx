import React from 'react'

import './Button.css'
const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}
const Button = (props) => {
    return (
        <div onClick={() => props.clickHandler(props.children)} className={"button-wrapper " + (isOperator(props.children) ? '' : 'operator')}>
            {props.children}
        </div>
    )
}

export default Button

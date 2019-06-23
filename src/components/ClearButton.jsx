import React from 'react'
import './ClearButton.css'

function ClearButton(props) {
    return (
        <div onClick={() => props.cleanHandler()} className="clear-btn">
            clear
        </div>
    )
}

export default ClearButton

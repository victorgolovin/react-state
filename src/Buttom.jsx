import React from 'react'


const Button = ( {text, isDisabled, onClick} ) => {
    return (
        <button
        disabled={isDisabled}
        onClick={onClick}>
        {text}
        </button>
    )
}

export default Button
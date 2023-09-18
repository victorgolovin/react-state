import React from 'react'
import './Counter.css'

const Counter = ( {value, isRed} ) => {
    const classnames = isRed ? 'counter counter-red' : 'counter';


    return (
        <p className={classnames}>
        {value} {isRed ? 'вышли за пределы' : ''}
        </p>
    )
}

export default Counter
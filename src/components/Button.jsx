import './Button.css';
import React from 'react';

const Button = React.memo(({ handleClick }) => {
    return (
        <button
            type='submit'
            onClick={handleClick}
            className="btnSubscribe"
        >Subscribe</button>
    )
});

export default Button;
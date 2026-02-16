import './Button.css';

const Button = ({ handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className="btnSubscribe"
        >Subscribe</button>
    )
}

export default Button;
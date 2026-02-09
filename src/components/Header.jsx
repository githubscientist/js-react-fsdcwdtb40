function Header({ getDataFromChild }) {
    let message = 'hi, how are you?';

    getDataFromChild(message);

    return (
        <>
            <h1>Hello World!</h1>
        </>
    )
}

export default Header;
const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        // uncontrolled inputs
        const username = event.target.username.value;
        const password = event.target.password.value;

        console.log('logging in with', username, 'and', password);
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        type="text"
                        placeholder="username..."
                        name="username"
                    />
                </div>
                <br />
                <div>
                    <input
                        type="password"
                        placeholder="password..."
                        name="password"
                    />
                </div>
                <br />
                <button
                    type="submit"
                >Login</button>
            </form>
        </>
    )
}

export default Login;
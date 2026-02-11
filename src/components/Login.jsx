import { useState } from "react";

const Login = () => {
    // 1. create states for each of the input elements in react form
    // 2. set the element's value as the state value
    // 3. set the values of the input elements as the state values
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // controlled inputs
    const handleLogin = (event) => {
        event.preventDefault();
        console.log(username, password);
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br />
                <div>
                    <input
                        type="password"
                        placeholder="password..."
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { clearForm, selectEmail, selectPassword, setEmail, setPassword } from "../redux/features/auth/loginSlice";

const Login = () => {

    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in user...');
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);

        toast.success('Login successful');

        setTimeout(() => {
            // clear the form values
            dispatch(clearForm());

            navigate('/dashboard');
        }, 500);
    }

    return (
        <div>
            <h1 className="text-4xl p-4 ml-4">Login</h1>
            <div className="w-xs mx-8 border p-4 border-gray-400 shadow-xl">
                <form className="flex flex-col gap-7" onSubmit={handleLogin}>
                    <input
                        type="text"
                        className="border w-full p-1"
                        placeholder="Email..."
                        value={email}
                        onChange={e => dispatch(setEmail({
                            email: e.target.value
                        }))}
                    />

                    <input
                        type="password"
                        className="border w-full p-1"
                        placeholder="Password..."
                        value={password}
                        onChange={e => dispatch(setPassword({
                            password: e.target.value
                        }))}
                    />

                    <button
                        type="submit"
                        className="border p-2 bg-slate-500 hover:bg-slate-700 text-white cursor-pointer"
                    >Login</button>
                    <p className="text-sm font-semibold text-slate-600 ">
                        Don't have an account? &nbsp;
                        <Link
                            to={"/register"}
                            className="hover:text-blue-700"
                        >
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;
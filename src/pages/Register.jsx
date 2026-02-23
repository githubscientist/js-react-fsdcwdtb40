import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { clearForm, selectEmail, selectName, selectPassword, setEmail, setName, setPassword } from "../redux/features/auth/registerSlice";

// controlled component
// using state to manage their values
const Register = () => {
    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Registering user...')

        console.log(name, email, password);

        setTimeout(() => {
            // clear the form
            dispatch(clearForm());

            toast.success('Registration Successful');
            navigate('/login');
        }, 500);
    }

    return (
        <div>
            <h1 className="text-4xl p-4 ml-4">Register</h1>
            <div className="w-xs mx-8 border p-4 border-gray-400 shadow-xl">
                <form className="flex flex-col gap-7" onSubmit={handleRegister}>
                    <input
                        type="text"
                        className="border w-full p-1"
                        placeholder="Name..."
                        value={name}
                        onChange={e => dispatch(setName({
                            name: e.target.value
                        }))}
                    />
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
                    >Register</button>
                    <p className="text-sm font-semibold text-slate-600 ">
                        Already have an account? &nbsp;
                        <Link
                            to={"/login"}
                            className="hover:text-blue-700"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register;
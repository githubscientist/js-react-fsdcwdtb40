import { Link } from "react-router";

const Register = () => {
    return (
        <div>
            <h1 className="text-4xl p-4 ml-4">Register</h1>
            <div className="w-xs mx-8 border p-4 border-gray-400 shadow-xl">
                <form className="flex flex-col gap-7">
                    <input
                        type="text"
                        className="border w-full p-1"
                        placeholder="Name..."
                    />
                    <input
                        type="text"
                        className="border w-full p-1"
                        placeholder="Email..."
                    />

                    <input
                        type="password"
                        className="border w-full p-1"
                        placeholder="Password..."
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
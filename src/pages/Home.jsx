const Home = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl p-4">
                Welcome to my React Router App
            </h1>

            <p className="p-4">
                This is the home page of my React Router App. You can navigate to the register and login pages using the links in the header.
            </p>

            <div className="p-4 flex flex-row gap-5">
                <a className="hover:text-red-700 hover:border hover: border-2 hover: p-2" href="/register" >Register</a>
                <a className="hover:text-red-700 hover:border hover: border-2 hover: p-2" href="/login">Login</a>
            </div>
        </div>
    )
}

export default Home;
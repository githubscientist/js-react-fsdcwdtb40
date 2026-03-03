import { useEffect, useState } from "react";

const Home = () => {

    let count = 0;
    let [state, setState] = useState(false);

    const handleClick = () => {
        count = count + 1;
        console.log('count value changed', count);
    }

    useEffect(() => {
        console.log('state changed');
    }, [state]);

    console.log('component rendered');

    return (
        <div className="p-4">
            <h1 className="text-3xl p-4">
                Welcome to my React Router App
            </h1>

            <p className="p-4">
                This is the home page of my React Router App. You can navigate to the register and login pages using the links in the header.
            </p>

            <div className="flex items-center justify-center">
                <button
                    className="border px-4 py-2 hover:bg-amber-500 hover:text-white"
                    onClick={handleClick}
                >Counter {count}</button>
                &nbsp;
                <button
                    className="border px-4 py-2 hover:bg-green-500 hover:text-white"
                    onClick={() => setState(!state)}
                >Re-Render Component</button>
            </div>
        </div>
    )
}

export default Home;
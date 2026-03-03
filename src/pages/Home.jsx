import { useRef, useState } from "react";

const Home = () => {

    let [count, setCount] = useState(0);
    let counterButton = useRef(null);

    const handleClick = () => {
        setCount(count + 1);
    }

    // console.log(document.getElementById("counterButton")?.textContent);
    console.log(counterButton.current?.textContent);

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
                    ref={counterButton}
                >Counter {count}</button>
            </div>
        </div>
    )
}

export default Home;
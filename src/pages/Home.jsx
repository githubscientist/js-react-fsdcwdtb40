import { useEffect, useMemo, useRef, useState } from "react";

const Home = () => {

    let [count, setCount] = useState(0);
    let counterButton = useRef(null);
    let [number, setNumber] = useState(1000000);

    const handleClick = () => {
        setCount(count + 1);
    }

    const expensiveCalculation = (number) => {
        let sum = 0;

        for (let i = 1; i <= number; i++) {
            sum += i;
        }

        return sum;
    }

    // let value = useMemo(() => expensiveCalculation(number), [number]);
    let value = expensiveCalculation(number);

    console.log(number);

    useEffect(() => {
        console.log(value);
    }, [value]);

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
            <br />

            <div>
                <p>Change for the calculation</p>
                <input
                    type="number"
                    placeholder="0"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Home;
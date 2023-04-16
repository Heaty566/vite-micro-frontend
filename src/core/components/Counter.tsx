import { useState } from 'react';

interface CounterProps {}

const Counter: React.FunctionComponent<CounterProps> = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-3xl font-bold">{count}</h1>
            <div className="flex space-x-2">
                <button
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={handleIncrement}
                >
                    Increment
                </button>
                <button
                    className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                    onClick={handleDecrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;

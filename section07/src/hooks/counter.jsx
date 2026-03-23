import { useState } from "react";

function useCounter(value) {
    const [counter, setCounter] = useState(value);

    const increment = () => {
        setCounter((prev) => prev + value);
    };

    return [counter, increment];
}

export default useCounter;
import React from "react";

export default function App2() {
    const [count, setCount] = React.useState(0);
    const increment = () => {
        setCount(count + 1)
        textalign: center;
    };
    const decrement = () => {
        setCount(count - 1)
        textalign: center;
    };
    return (
        <div>
            <button onClick={decrement} >-</button>
            {count}
            <button onClick={increment}>+</button>
        </div>
    );
}

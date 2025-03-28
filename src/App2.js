import React from "react";
import { useState } from "react";
export default function App2() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+1)
    
  };
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Decreases the current count by 1.
 */

/******  76b9f5f3-6243-48db-a4fd-48005b523aca  *******/  const decrement = () => {
    setCount(count-1)
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      {count}

      <button onClick={increment}>+</button>
    </div>
  );
}
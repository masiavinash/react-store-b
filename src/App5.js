import React, { useState } from "react";

export default function App5() {
  const [value, setValue] = useState(0);

  const incrementValue = () => {
    setValue(value + 1);
  };

  return (
    <div align="center">
      <h3>Increment Value</h3>
      <p>
        <input
          type="number"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        ></input>
      </p>
      <button onClick={incrementValue}>Increment</button>
    </div>
  );
}
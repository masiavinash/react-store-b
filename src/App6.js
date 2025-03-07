import React, { useState } from "react";

export default function App6() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setItems([...items, text]);
    setText("");
  };

  return (
    <div align="center">
      <p>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></input>
      </p>
      <button onClick={handleClick}>Add</button>
      <hr></hr>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
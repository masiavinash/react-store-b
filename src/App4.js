import React from "react";
import { useState } from "react";

export default function App3() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    if (user.email === "avi@" && user.password === "1234") {
      setMsg("Welcome avi!!!!");
    } else {
      setMsg("Access Denied");
    }
  };

  return (
    <div align="center">
      <style>
        {`
          input {
            width: 50%;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
          }
          button {
            background-color: green; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            border-radius: 12px;
          }

        `}
      </style>
      <h3>Login Form</h3>
      {msg}
      <p>
        <input
          type="text"
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        ></input>
      </p>
      <p>
        <input
          type="password"
          onChange={(event) => setUser({ ...user, password: event.target.value })}
        ></input>
      </p>
      <button onClick={handleSubmit}>Log In</button>
    </div>
  );
}
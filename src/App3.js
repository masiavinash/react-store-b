import React from "react";

export default function Login() {
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
          }
        `}
      </style>
      <h2>Login Form</h2>
      <p>Username: <input type="text" placeholder="Enter UserName"></input></p>
      <p>Password: <input type="password" placeholder="Enter Password"></input></p>
      <button>Log In</button>
    </div>
    
  );
}

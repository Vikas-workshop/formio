import React from "react";

export default function Login() {
  return (
    <div>
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <button type="button">Login</button>
    </div>
  );
}

import React, { useState } from "react";

export default function Login({ handleLogin, isValidLogin }) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const onLoginEmailChange = (e) => {
    setLoginEmail(e.target.value);
  };

  const onLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginEmail("");
    setLoginPassword("");
    handleLogin({
      email: loginEmail.toLowerCase(),
      password: loginPassword,
    });
    console.log("log in works!");
    
  };

  return (
    <>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleLoginSubmit}>
          <input
            id="login-email"
            name="login-email"
            placeholder={`${isValidLogin ? "Email" : "Wrong Email/Password"}`}
            value={loginEmail}
            onChange={onLoginEmailChange}>
            </input>
          <input
            id="login-password"
            name="login-password"
            placeholder={`${isValidLogin ? "Password" : "Wrong Email/Password"}`}
            value={loginPassword}
            onChange={onLoginPasswordChange}>
          </input>
          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

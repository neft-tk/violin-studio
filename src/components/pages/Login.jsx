import React, { useState } from "react";
import Note from "../Note";

export default function Login({ handleLogin, isValidLogin, isLoggedIn, userNotes }) {
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
  };

  
  const renderRoutes = () => {
    return (
      <>
      <div>
          <h1>renderRoutes worked</h1>
          <div>
            {userNotes.map((note, index) => (
              <Note
                key={index}
                noteTitle={note.title}
                noteBody={note.body}/>
            ))}
          </div>
        </div></>
    )
  }

  return (
    <>
    <div>
      {isLoggedIn ? (
        renderRoutes()
      ) : (
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
      )}
    </div>
    </>
  );
}

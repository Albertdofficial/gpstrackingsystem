import React, { useRef } from "react";
import { useLogin } from "../hooks/useLogin";

import {useNavigate} from 'react-router-dom'

const Login = () => {
  const { error, login, isPending } = useLogin();
  const navigate = useNavigate()

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await login(email, password);

    navigate('/dashboard') // redirect user to dashboard

    resetForm()
  };

  const resetForm = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <label>
        <span>Email:</span>
        <input type="email" ref={emailRef} required />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" ref={passwordRef} required />
      </label>

      <button  disabled={isPending}>Login</button>
      {error && <p className="error">{error} </p>}
      {isPending && <p className="pending">Loading </p>}
    </form>
  );
};

export default Login;

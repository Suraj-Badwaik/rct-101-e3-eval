import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import  { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const {HandleLogin} = useContext(AuthContext)



  const HandleSubmit = (e) => {
      e.preventDefault();
      navigate('/')
      // HandleLogin({username,password});
  }
  return (
    <div>
      <input data-cy="login-email" type="email" value={username} placeholder="Enter your email" onChange={e=>setUsername(e.target.value)}  />
      <input data-cy="login-password" type="password" value={password} placeholder="Enter your password"  onChange={e=>setPassword(e.target.value)} />
      <button data-cy="login-submit" type="submit" onClick={HandleSubmit}>Submit</button>
    </div>
  );
};

export default Login;

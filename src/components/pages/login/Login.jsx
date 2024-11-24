import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../../redux/authSlice";
import style from './login.module.scss'
const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ name: "vlaod", email: "valod@gmail.com" }));
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  return <div>
    <h2>login</h2>
    <button onClick={handleLogin}>login</button>
    <button onClick={handleLogout}>logout</button>
  </div>;
};

export default Login;

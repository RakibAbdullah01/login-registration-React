import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
const Login = ({ isLogin }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(data);
    e.preventDefault();
        axios.post("https://ttmg-backend.herokuapp.com/api/auth/staffLogin",data)
        .then(res=>{
            console.log(res)
            if(res.status===200){
                toast.info("Login Successful");
            }
        })
        .catch(error=> {
            console.log(error.response.status);
            if(error.response.status===400){
                toast.error("Email/password is missing")
            }
            else if(error.response.status===401){
                toast.error("Email or password is incorrect")
            }else{
                toast.error("Somthing Wrong")
            }
          })
  };

  return (
    <div>
      <form
        id="login"
        style={isLogin ? { left: "50px", top: "160px" } : { left: "-400px" }}
        className="input-group"
      >
        <input
          type="text"
          className="input-field"
          placeholder="Enter Email"
          name="email"
          value={data.name}
          onChange={handleInput}
          required
        />

        <input
          type="text"
          className="input-field"
          placeholder="Enter Password"
          name="password"
          value={data.name}
          onChange={handleInput}
          required
        />
        <br />
        <br />
        <button type="submit" className="submit-btn" onClick={handleLogin}>
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

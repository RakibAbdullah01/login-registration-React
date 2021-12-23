import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Register = ({ isLogin }) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
      });
      let name,value;
      const handleInput = e =>{
          name = e.target.name;
          value= e.target.value;
          setData({
              ...data,
              [name]:value
          })
      }
      const handleRegister = e =>{
        e.preventDefault();
        axios.post("https://ttmg-backend.herokuapp.com/api/auth/staffRegister",data)
        .then(res=>{
            console.log(res)
            if(res.status===200){
                toast.info("Registration Successful.");
            }
        })
        .catch(error=> {
            console.log(error.response.status);
            if(error.response.status===400){
                toast.error("Some of the fields are missing or incorrect")
            }
            else if(error.response.status===402){
                toast.error("User Already Exists with the given email id")
            }else{
                toast.error("Somthing Wrong")
            }
          })
      }

  return (
    <div>
      <form
        id="register"
        style={isLogin ? { left: "450px" } : { left: "50px" }}
        className="input-group"
      >
        <input
          type="text"
          className="input-field"
          placeholder="Your Name"
          name="name"
          value={data.name}
          onChange={handleInput}
          required
        />

        <input
          type="email"
          className="input-field"
          placeholder="Your Email"
          required
          name="email"
          value={data.email}
          onChange={handleInput}

        />

        <input
          type="number"
          className="input-field"
          placeholder="Your Mobile Number"
          required
          name="mobile"
          value={data.mobile}
          onChange={handleInput}

        />

        <input
          type="text"
          className="input-field"
          placeholder="Your Password"
          required
          name="password"
          value={data.password}
          onChange={handleInput}

        />
        <br />
        <br />
        <button type="submit" className="submit-btn" onClick={handleRegister}>
          Register
        </button>
        
        <ToastContainer />
      </form>

    </div>
  );
};

export default Register;

import React, { useState } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import './App.css'

import "react-toastify/dist/ReactToastify.css";
  
const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <div className="bgimage">
        <div className="form-box">
          <div className="button-box">
            <div
              id="btn"
              style={isLogin ? { left: "0" } : { left: "110px" }}
            ></div>
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          <Login isLogin={isLogin} />
          <Register isLogin={isLogin} />
          
        </div>
      </div>
    </>
  );
};

export default App;

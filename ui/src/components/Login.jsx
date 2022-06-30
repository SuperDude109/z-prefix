// import { useEffect, useState} from 'react';
// import config from './config'
import React from "react";

// const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


function Login() {
  

  return (
    <div className='login' style={{display:"inline-grid"}}>
      <input placeholder="Username:"/>
      <input placeholder="Password:" type="password"/>
      <button onClick={()=>alert("login attempted!")}>login</button>
    </div>
  );
}

export default Login;

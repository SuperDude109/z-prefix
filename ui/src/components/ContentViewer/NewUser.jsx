// import { useEffect, useState} from 'react';
// import config from './config'
import React from "react";

// const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


function NewUser() {
  

  return (
    <div className='modify'>
      <input placeholder="First Name"/>
      <input placeholder="Last Name"/>
      <input placeholder="UserName"/>
      <input type={"password"} placeholder="Password"/>
      <input type={"password"} placeholder="Retype Password"/>
      <button onClick={()=> {alert("Tried to make a new user.")}}>Sumbit</button>

    </div>
  );
}

export default NewUser;

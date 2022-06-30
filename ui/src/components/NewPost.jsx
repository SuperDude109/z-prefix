// import { useEffect, useState} from 'react';
// import config from './config'
import React from "react";

// const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


function NewPost() {
  

  return (
    <div className='modify'>
      <input placeholder="Title"/>
      <input placeholder="Content"/>
      <button onClick={()=>{alert("attempting to make a new blog")}}>Submit</button>
    </div>
  );
}

export default NewPost;

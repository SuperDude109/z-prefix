// import { useEffect, useState} from 'react';
import config from "../config";
/* eslint-disable react/prop-types */
import React from "react";

const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


function Post({title,content}) {
  

  return (
    <div className='post' style={{background:"grey",padding:"0.5%"}}>
      <div id="title" style={{display:"flex",justifyContent:"center", background:"darkgrey",padding:"0.5%"}}>{title}</div>
      <div id="content"style={{background:"lightgrey",padding:"0.5%",minHeight:"2vh"}}>{content}</div>
      <button onClick={deletePost}>Delete</button>
    </div>
  );

function deletePost(){
  console.log("You just deleted that post! "+(title))

  const opts = {
    method: 'DELETE',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({
     "title": title,
   }),
  };
  console.log(ApiUrl+"/posts")
  fetch(ApiUrl+"/posts",opts)
}
}

export default Post;

import { useEffect} from 'react';
import config from "../config";
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


function Post({user_id,title,content}) {
  let [username,setUsername]=useState("");
  useEffect(()=>{
    fetch(ApiUrl+'/user/getuserid/'+user_id)
    .then(res => res.json())
    .then(data=>setUsername(data.username))
  }
    ,[])

  return (
    <div className='post' style={{background:"grey",padding:"1%"}}>
      
      <div id="titlebar" style={{display:"flex",justifyContent:"space-around", background:"darkgrey",padding:"0.5%"}}>
        <div>title:{title}</div>
        <div>username:{username}</div>
      </div>
      <div id="content"style={{background:"lightgrey",padding:"0.5%",minHeight:"2vh"}}>{content}</div>
      <button onDoubleClick={deletePost}>Delete</button>
    {/* 
        for some rason this makes the delete button completly disapear
      <Routes>
        <Route path='/user/posts' element={(<button onDoubleClick={deletePost}>Delete</button>)} />
      </Routes>
   */}
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

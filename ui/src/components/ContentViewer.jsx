// import { useEffect, useState} from 'react';
import { Routes , Route } from 'react-router-dom';
import Posts from './Posts';
import Login from './Login';
import Modify from './Modify';
import NewPost from './NewPost';
import NewUser from './NewUser';
import React from "react";
import { useContext,useState,useEffect } from "react";
import { LoginContext } from '../contexts/LoginContext';
import config from '../config.js'
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
// import config from './config'

// const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


function ContentViewer() {
  const logedin = useContext(LoginContext);

  let [names, setNames] = useState([ ]);

  useEffect(() => {
    fetch(ApiUrl + "/users")
      .then(response => response.json())
      .then(data => setNames(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='content-bar' style={{padding:"1vw",background:"lightgrey", height:"100vh"}}>
        <Routes>
          <Route path='' element={<Posts/>}/>
          <Route path='/login'element={<Login/>}/> 
          <Route path='/user/posts'element={logedin?<Posts/>:<div>Login to view your posts</div>}/>
          <Route path='/user'element={<Modify/>}/>
          <Route path='/users'element={
                <div>
                    { names.map(
                        (author,index) => {
                          return <div key ={index}>{(author.firstName + " " + author.lastName)}</div>
                        }
                    )}
                    </div>}/>
          <Route path='/create/post' element={logedin?<NewPost/>:<div>Login to view posts</div>}/>
          <Route path='/create/user' element={logedin?<div>Logout to create new user</div>:<NewUser/>}/>
        </Routes>
    </div>
  );
}

export default ContentViewer;

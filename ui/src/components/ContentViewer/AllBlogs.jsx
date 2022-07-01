// import { useEffect, useState} from 'react';
import React from "react"
import config from '../../config'
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
import { useState, useEffect } from "react";
import Post from "../Post";

// import config from './config'

// const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


function AllBlogs() {
  let [posts,setPosts] = useState([])

  useEffect(async()=>{
    setTimeout(() => {
      fetch(ApiUrl+"/posts/user/0")
        .then(res => {
          return res.json()
        })
        .then(data => {
          setPosts([...data])
        })
    }, 500);
  },[posts])

 
  return (
    <div className='posts'>
      {(posts)?posts.map(({user_id, title,content})=>(<Post user_id={user_id} key={title} title={title} content={content}/>)):"You have no posts yet D:"}
    </div>
  );
}

export default AllBlogs;

// import { useEffect, useState} from 'react';
import React from "react"
import config from '../../config'
const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;
import { AppContext } from '../../contexts/AppContext';
import { useContext,useState } from "react";
import Post from "../Post";
// import config from './config'

// const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


function Posts() {
  let {values} = useContext(AppContext)
  let {user_id} = values
  let [posts,setPosts] = useState([])
      fetch(ApiUrl+"/posts/user/"+user_id)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setPosts([...data])
      })
 
  return (
    <div className='posts'>
      {(posts)?posts.map(({title,content})=>(<Post key={title} title={title} content={content}/>)):"You have no posts yet D:"}
    </div>
  );
}

export default Posts;

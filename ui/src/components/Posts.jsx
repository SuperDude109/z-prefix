// import { useEffect, useState} from 'react';
import React from "react";
// import config from './config'

// const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


function Posts(props) {
console.log(props)
  return (
    <div className='posts'>
      <div className='post'>post</div>
      <div className='post'>post</div>
      <div className='post'>post</div>
    </div>
  );
}

export default Posts;

// import { useEffect, useState} from 'react';
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
// import config from './config'

// const ApiUrl = config[process.env.REACT_APP_NODE_ENV || "development"].apiUrl;


function SideBar(props) {
  const logedin = useContext(LoginContext);
console.log(props)
  return (
    <div className='sidebar' style={{height:"95vh", width:"10vw", background:"Grey", padding:"1vw"}}>
    sidebar
    {/* height = 95vh width=10vw*/}
    <div className='username'>
      username
    </div>
    {/* will be a map of sections */}
    <div className='section'>
      section
      {/* will be a div of section title */}
      <div className='section-title'>
        section-title
      </div>
      <div className='section-content'>
        section-content
        {/* will have a map of all the content */}
      </div>
      <div className='section'style={{background:"hotpink"}}>
        <div className='section-title' >
          Navigate
        </div>
        <div className='section-content'style={{background:"pink", display:"flex",flexDirection:"column",flexWrap:"nowrap" }}>
          <nav>
            <Link to="/">Home</Link> <div/>
            <Link to="/user/posts">{logedin?"My Posts":" "}</Link><div/>
            <Link to="/create/post"> New Post
            </Link><div/>
            <Link to=""></Link><div/>
            <Link to=""></Link><div/>
            <Link to=""> </Link><div/>
            <Link to="/">Contact Us </Link>
          </nav>
          {/* will have a map of all the content */}
        </div>
      </div>
    </div>
  </div>
  );
}

export default SideBar;

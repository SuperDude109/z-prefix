// import { useEffect, useState} from 'react';
import React from 'react';


import SideBar from './components/SideBar';
import { LoginContext } from './contexts/LoginContext';
import TopBar from './components/TopBar';
import ContentViewer from './components/ContentViewer';


function App() {

  

  let logedin= false;

  return (
    <LoginContext.Provider value={logedin}>
      <div className='webpage' style={{display:"inline-flex"}}> 
          {/* this will be where the sidebar lays */}
          <SideBar/>
          <div className='content' style={{padding:".5vw", display:"table-column" }}>
            <TopBar/>
            <ContentViewer/>
          </div>
       </div>
</LoginContext.Provider>
  );
}

export default App;

import React, {useState} from "react";
import propTypes from 'prop-types';

const AppContext = React.createContext();
const AppProvider = ({children})=>{

  const [loggedin,setLoggedin]=useState(false)
  const [username,setUsername]=useState("")
  const values = {
    loggedin,
    username
  }

  const setters = {
    setLoggedin,
    setUsername
  }

  return(
    <AppContext.Provider value={{values,setters}}>
      { children}
    </AppContext.Provider>
  )
}
AppProvider.propTypes={
  children: propTypes.any
}

export {AppProvider, AppContext}


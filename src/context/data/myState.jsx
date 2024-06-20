import React from "react";
import MyContext from "./myContext";

function MyState(props){
  const name = 'Udit';

  return(
    <MyContext.Provider value={{name}}>
    {props.children}
    </MyContext.Provider>
  )
}

export default MyState;
import React ,{useState,useEffect} from "react";

export const AuthContext= React.createContext();
export  function Authprovider(props){
    const [auth,setauth]=useState({})
    useEffect(()=>{
        const email=localStorage.getItem('email')
          if(email){
            setauth({email})
        }
        
    },[])
    return(
        <AuthContext.Provider value={{auth,setauth}}>
          {props.children}
        </AuthContext.Provider>
    );
} 
import React ,{useContext}from "react";
import { AuthContext } from "./Authcontext";
const Header=()=>{
    const authcontext = useContext(AuthContext);
 function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    
    authcontext.setauth({})
 }
return(
    <div>
    <nav className="navbar navbar-light bg-light mt-2 mb-2">
       <a href="" className="navbar-brand ps-3">React Hooks</a>
       <div>
        {authcontext.auth.email? <div>
        {authcontext.auth.email}
        <button className="btn btn-danger btn-sm" onClick={logout}>Log out</button>
        </div> :"you need to login "}
       </div>
    
    </nav>
    </div>
)
}
export default Header;
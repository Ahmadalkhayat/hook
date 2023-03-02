import React ,{useState,useContext} from "react";
import { AuthContext } from "./Authcontext";
const Login=()=>{

    const [email ,setemail]=useState("");
    const [password ,setpassword]=useState("");
    const authcontext = useContext(AuthContext);
    const login=(e)=>{
        e.preventDefault()
        
            localStorage.setItem('email',email)
            localStorage.setItem('password',password)
            authcontext.setauth({email})
         }
    return(
        <form>
            <h1>Login</h1>
            <input className="form-control mb-3" placeholder="Email"type="email" value={email}
               onChange={e=>setemail( e.target.value)}     />
            <input className="form-control mb-3" placeholder="password"type="password" value={password} 
                onChange={e=>setpassword( e.target.value)} />
            <button className="btn btn-primary" onClick={login}>Login</button>
        </form>
    )
}
export default Login
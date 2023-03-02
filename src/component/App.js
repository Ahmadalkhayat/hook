import React,{useContext} from "react"
import {AuthContext, Authprovider} from "./Authcontext"
import Header from "./Header"
import Login from "./Login"
const App = ()=> {
  const authcontext = useContext(AuthContext);
 return (
  <div className="container">
   <Header />
   {authcontext.auth.email ? 'welcome':<Login />}
   </div>
   )
  }

  const Appwithstore=()=>{
    return <Authprovider>
  <App/>
</Authprovider>
  }
export default Appwithstore
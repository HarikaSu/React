import React from "react";
import User from "./UserComp"
import Admin from "./AdminComp"

function Parent(props){
    
    
        
           return props.login === "Admin"?<User/>:<Admin/>
        
   
}
export default Parent;
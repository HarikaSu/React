import React from "react";
function Render(props){
    
    if(props.isLoggedin){
        return(
            <h1>succesful</h1>
        )

    }
    else{
        return(
            <h1>unsuccessful</h1>
        )
    }
}
export default Render;
import React from "react";
// import Header from "./Header";
// import Main from "./Main";
// import Footer from "./Footer";
import ProfileCard from "../Menu/ProfileCard"
import Notifications from "../Menu/Notifications"
function FunCom(){
    return(
        <div>
            {/* <Header/>
            <Main/>
            <Footer/> */}
            <ProfileCard name="Harika" city="hyd"/>
            <Notifications type="shared" name="Harika"/>
            
        </div>
    )
}
export default FunCom;
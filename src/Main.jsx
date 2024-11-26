import React,{Component} from "react";
import "./Main.css"
import red from "./assets/ifel twr.webp"
import blue from "./assets/bahubali 2.jpg"
import pink from "./assets/eiffel tower.webp"
import yellow from "./assets/flower.jpeg"
import white from "./assets/flower.jpeg"
import black from "./assets/eiffel tower.webp"
import orange from "./assets/bahubali 2.jpg"
import  violet from "./assets/ifel twr.webp"
import sm from "./assets/eiffel tower.webp"
import sm1 from "./assets/bahubali 2.jpg"
import  sm2 from "./assets/ifel twr.webp"
import sm3 from "./assets/flower.jpeg"
class Main extends Component{
    render(){
        return(
            <body class="image">
                <img src={red} alt="redpicture"/>
                <img src={blue} alt="bluepicture"/>
                <img src={pink} alt="pinkpicture"/>
                <img src={yellow} alt="yellowpicture"/>
                <img src={white} alt="yellowpicture"/>
                <img src={black} alt="yellowpicture"/>
                <img src={orange} alt="yellowpicture"/>
                <img src={violet} alt="yellowpicture"/>
                <img src={sm} alt="yellowpicture"/>
                <img src={sm1} alt="yellowpicture"/>
                <img src={sm2} alt="yellowpicture"/>
                <img src={sm3} alt="yellowpicture"/>
            </body>
        )
    }

}
export default Main;

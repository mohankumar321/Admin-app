import React from "react";
import { useHistory } from "react-router-dom";
import  "./cssfiles/blank.css";
import SideBar from "./sidebar";
import Dashboard from "./dashboard";



 export default function Blankpage(){
   
    return(
       
       <div><Dashboard/>
       
       <h1 className="blank">Blankpage</h1></div>
    )
}

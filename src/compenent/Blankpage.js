import React from "react";

import  "./cssfiles/blank.css";
import SideBar from "./sidebar";
import Dashboard from "./dashboard";



 export default function Blankpage(){
   
    return(
       
       <div> <SideBar/><Dashboard/>
       
       <h1 className="blank">Blankpage</h1></div>
    )
}

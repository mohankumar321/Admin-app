import React from "react";
import Dashboard from "./dashboard";
import SideBar from "./sidebar";
import "./cssfiles/table.css";



export default function Tablespage(){
  
    
    return(
      
        <div><SideBar/>
        <div><Dashboard/>
       <div id="myTable"></div>
        
        
        </div>
        
        <div className="text">
           
            <p>DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the official DataTables documentation.</p>
        </div>

    
        </div>
    )
}
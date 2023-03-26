import React from "react";
import SideBar from "./sidebar";
import Dashboard from "./dashboard";
import "./cssfiles/borders.css";

export default function Borderspage(){
    
    return(
        <div> <SideBar/>  
         <div><Dashboard/>
         </div>


        <div className="border-text">
        <h1> Border Utilities</h1>
        <p>Bootstrap's default utility classes can be found on the official Bootstrap
             Documentation page. The custom utilities below were created to extend this 
            theme past the default utility classes built into Bootstrap's framework.</p>
        </div>
        
        <div className="border-main">
            <div className="border-box border-box-1">.border-left-primary </div>
            <div className="border-box border-box-2">.border-bottom-primary </div>
            <div className="border-box border-box-3">.border-left-secondary </div>
            <div className="border-box border-box-4">.border-bottom-secondary </div>
            <div className="border-box border-box-5">.border-left-success </div>
            <div className="border-box border-box-6">.border-bottom-success </div>
            <div className="border-box border-box-7">.border-left-info </div>
            <div className="border-box border-box-8">.border-bottom-info </div>
            <div className="border-box border-box-9">.border-left-warning </div>
            <div className="border-box border-box-10">.border-bottom-warning </div>
            <div className="border-box border-box-11">.border-left-danger </div>
            <div className="border-box border-box-11">.border-bottom-danger </div>
            <div className="border-box border-box-12">.border-left-dark </div>
            <div className="border-box border-box-13">.border-bottom-dark </div>
      
        
           
        </div>
        
        <h1 className="foot-common">Copyright © Your Website 2021</h1>
        
        
        </div>
       
    )
}
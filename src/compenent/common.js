import React from "react";
import Dashboard from "./dashboard";
import SideBar from "./sidebar";
import "./cssfiles/common.css";


import WorkIcon from '@mui/icons-material/Work';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PendingIcon from '@mui/icons-material/Pending';




export default function Commonpage(){
    return(
        <div className="com-main">
            <SideBar/>
            <Dashboard/>

<h1 className="dash-common">Dashboard</h1>

<div className="card-container">
    <div className="card-row card-1">EARNINGS (MONTHLY)
    <h1>₹40,000<span className="c-ic"><WorkIcon fontSize="" className="ic-t"/></span></h1>
    </div>
    <div className="card-row card-2">EARNINGS (ANNUAL)
    <h1>₹215,000<span className="c-ic">₹</span></h1>

    </div>
    <div className="card-row card-3">TASKS
    <h1>50% <button></button><span className="c-ict"><AssignmentIcon fontSize=""  className="ic-t task"/></span></h1>

    </div>
    <div className="card-row card-4">PENDING REQUESTS
    <h1>18<span className="c-ic"><PendingIcon  className="ic-t" fontSize=""/></span></h1>
    </div></div>

<div className="chart-div">
    <div className="chart-1"></div>
    <div className="chart-2" ></div>
</div>

<div className="proj-div">
    
    <div className="proj-1">
        <div className="pro-bor">Projects
        <div className="proj-card1 proj-card-main crd-1">
            <h1>Server Migration <span>20%</span></h1>
            <button></button></div>
            <div className="proj-card1 crd-2">
            <h1>Sales Tracking <span>40%</span></h1>
            <button></button></div>
            <div className="proj-card1 crd-3">
            <h1>Customer Database <span>60%</span></h1>
            <button></button></div>
            <div className="proj-card1 crd-4">
            <h1>Payout Details <span>80%</span></h1>
            <button></button></div>
            <div className="proj-card1 crd-5">
            <h1>Account Setup <span>Complete!</span></h1>
            <button></button></div>
           
        </div>

        </div>
    <div className="proj-2" >
    <div className="pro-bor2">Illustrations</div>
    <img className="img-illust" alt="loading" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"/>
    <h4 className="paragraph">Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
<br/><br/><a className="undraw" href="https://undraw.co/">Browse Illustrations on unDraw →</a></h4>
    </div>
    </div>

    <div className="color-pallatte">
        <div className="pal-1">
            <div className="col-box primary" >Primary <h6>#4e73df</h6></div>
            <div className="col-box success ">Success<h6>#1cc88a</h6> </div>
            <div className="col-box info">Info<h6>#36b9cc</h6> </div>
            <div className="col-box warning">Warning<h6>#f6c23e</h6> </div>
            <div className="col-box danger">Danger<h6>#e74a3b</h6> </div>
            <div className="col-box secondry">Secondary<h6>#858796</h6> </div>
            <div className="col-box light">Light<h6>#f8f9fc</h6> </div>
            <div className="col-box dark">Dark<h6>#5a5c69</h6> </div>


      
             </div>
             
             
        <div className="pal-2">
             <div className="pro-bor3">Development Approach</div>
             <h4 className="paragraph da">

SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.<br/><br/>

Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
</h4>
             </div>
         </div>






<h1 className="foot-common">Copyright © Your Website 2021</h1>
        </div>
      
    )
}
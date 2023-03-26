import React from "react";

import "./cssfiles/buttons.css";
import SideBar from "./sidebar";
import Dashboard from "./dashboard";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';


import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import CheckIcon from '@mui/icons-material/Check';

import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';


export default function Buttonspage(){
    return(

<div>
    <SideBar/>
   <div><Dashboard/></div>
   <h1 className="btn-title">Buttons</h1>

   <div className="btn-grid">
    <div className="grid grid-1">

        <div className="grid-box-1"><h1>Circle Buttons</h1>
      
        <p>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</p>

        <h5>.btn-circle</h5>
       <span className="circ">
       <FacebookIcon className="ic fb c-1" fontSize=""/>
            <CheckCircleIcon className="ic check c-1" fontSize=""/>
            <ErrorIcon className="ic err c-1" fontSize=""/>
            <WarningIcon className="ic warn c-1" fontSize=""/>
            <DeleteIcon className="ic del c-1" fontSize=""/>
        
        </span>

        <h5>.btn circle .btn-sm</h5>

        <span className="sm">
           <FacebookIcon className="ic fb  c-2" fontSize=""/>
            <CheckCircleIcon className="ic check c-2" fontSize=""/>
            <ErrorIcon className="ic err c-2" fontSize=""/>
            <WarningIcon className="ic warn c-2" fontSize=""/>
            <DeleteIcon className="ic del c-2" fontSize=""/>
            </span>

        <h5>.btn circle .btn-lg</h5>
        <span className="lg">
        <FacebookIcon className="ic fb c-3 " fontSize=""/>
            <CheckCircleIcon className="ic check c-3" fontSize=""/>
            <ErrorIcon className="ic err c-3" fontSize=""/>
            <WarningIcon className="ic warn c-3" fontSize=""/>
            <DeleteIcon className="ic del c-3" fontSize=""/>
            </span>
        
        
        
        </div>

        <div className="grid-box-2"><h1>Brand Buttons</h1>
        <p>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.<br/><br/>

You can create more custom buttons by adding a new color variable in the _variables.scss
 file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the <span id="css-btn">_buttons.scss</span> file.</p>
 <button id='grid-glink'><a id="google-tag" href="https://accounts.google.com/signin"><strong>G</strong> Login with Google</a></button>
 <button id='grid-fblink'><a id="facebook-tag" href="https://www.facebook.com/login/"><strong>f</strong> Login with Facebook</a></button>
        </div>
    </div>
    <div className="grid grid-2"><h1>Split Buttons with Icon</h1>
    <p className="split-text">Works with any button colors, just use the <span id="css-btn">.btn-icon-split</span> class and the markup in the examples below.
        The examples below also use the <span id="css-btn">.text-white-50</span> helper class on the icons for additional styling, but it is not required.</p>
<div className="split-main">
<button className="splitbtn splitbtn-1 "><AssistantPhotoIcon className="check-icn" fontSize="" /><span>Split Button Primary</span></button>
 <button className="splitbtn splitbtn-2 "><CheckIcon className="check-icn" fontSize="" /><span>Split Button  Success</span></button>
 <button className="splitbtn splitbtn-3 "><ErrorIcon className="check-icn" fontSize="" /><span>Split Button info</span></button> 
 <button className="splitbtn splitbtn-4 "><WarningIcon className="check-icn" fontSize="" /><span>Split Button Warning</span></button> 
 <button className="splitbtn splitbtn-5 "><DeleteIcon className="check-icn" fontSize="" /><span>Split Button  Danger</span></button> 
 <button className="splitbtn splitbtn-6 "><ArrowForwardIcon className="check-icn" fontSize="" /><span>Split Button Secondry</span></button> 
 <button className="splitbtn splitbtn-7 "><ArrowForwardIcon className="check-icn check-icn-light" fontSize="" /><span>Split Button Light</span></button> 

 </div>
 
 <p  className="split-text">Also works with small and large button classes!</p>
 <div className="split-main">
 <button className="splitbtn splitbtn-8 "><AssistantPhotoIcon className="check-icn ic-8" fontSize="" /><span>Split Button Success</span></button> 
 <button className="splitbtn splitbtn-9 "><AssistantPhotoIcon className="check-icn ic-9" fontSize="" /><span>Split Button Success</span></button> 
 </div>
    
    </div>
 
  
  
   </div>
  
</div>

       
    )
}
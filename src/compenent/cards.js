import React from "react";
import SideBar from "./sidebar";
import Dashboard from "./dashboard";
import "./cssfiles/cards.css";

export default function Cardspage(){
    return(
        <div> <SideBar/>  <div><Dashboard/></div>
        <h1 className="title-cards">Cards</h1>

        <div className="card-container-2">
    <div className="card-row card-1">EARNINGS (MONTHLY)
    <h1>₹40,000<span></span></h1>
    </div>
    <div className="card-row card-2">EARNINGS (ANNUAL)
    <h1>₹215,000<span></span></h1>

    </div>
    <div className="card-row card-3">TASKS
    <h1>50% <button></button></h1>

    </div>
    <div className="card-row card-4">PENDING REQUESTS
    <h1>18</h1>
    </div></div>
        
        <div className="cards-main">
            <div className="cards-box-1"><h1>Default Card Example</h1>
            <p>This card uses Bootstrap's default styling with no utility classes added. Global styles are the
                 only things modifying the look and feel of this default card example. </p>
            </div>
            <div className="cards-box-2"><h1>Dropdown Card Example  </h1>
            <p>Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, 
                the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu. </p>
               
                 
                 </div>
            <div className="cards-box-3"><h1>Basic Card Example</h1>
            <p>The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes,
                 the style of the card component can be easily modified with no need for any custom CSS! </p>
            </div>

            
            <div className="cards-box-4"><h1>Collapsable Card Example</h1>
            <p>This is a collapsable card example using Bootstrap's built in collapse functionality. 
                Click on the card header to see the card body collapse and expand! </p></div>
            
        </div>
        
        </div>
    )
}
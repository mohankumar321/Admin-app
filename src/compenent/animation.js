import React from "react";


import "./cssfiles/animation.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Animationpage(){
    return(

        
        <div>
            <div className="text-ani">
                <h1>Animation Utilities</h1>
                <p>Bootstrap's default utility classes can be found on the official
                     <a href="#action">Bootstrap Documentation</a> Bootstrap Documentation page. The custom utilities below were created to extend this
                     theme past the default utility classes built into Bootstrap's framework.</p>
            </div>

<div className="ani">

    <div className="ani-box-1 anim">
        <h1>Grow In Animation Utilty</h1>
        <h5>.animated--grow-in</h5>
        <h4>Navbar Dropdown Example</h4>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-ani">
      <span> Navbar <a href="#action-1"></a>Dropdown Button</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="cl">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown>
    <p className="f-l">Note: This utility animates the CSS transform property, meaning it will override any existing transforms on an element being animated! In this theme, 
    the grow in animation is only being used on dropdowns within the navbar.</p>
    </div>
    <div  className="ani-box-2 anim">

        <h1>Fade In Animation Utilty</h1>
        <h5>.animated--fade-in</h5>
        <h4>Navbar Dropdown Example</h4>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="drop-ani-2">
      <span> Navbar <a href="#action"></a>Dropdown Button</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="cl">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
<div className="sec-box">
<p className="ex">Dropdown Example</p>

<DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
<p className="f-l">Note: This utility animates the CSS opacity property, meaning it will override any 
existing opacity on an element being animated!</p>
</div>
    </div>
</div>




        </div>
        

        
  
       
    )
}
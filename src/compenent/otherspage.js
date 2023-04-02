import React from "react";
import SideBar from "./sidebar";
import Dashboard from "./dashboard";
import "./cssfiles/others.css";


export default function Otherspage(){
    return(

        <div><SideBar/> <Dashboard/>
        
        <div className="other-text">
            <h1>Other utilities</h1>
            <p>Bootstrap's default utility classes can be found on 
                the official <a href="https://startbootstrap.com/previews/sb-admin-2">Bootstrap Documentation</a> page. The custom utilities
                 below were created to extend this theme past the
                 default utility classes built into Bootstrap's framework.</p>
        </div>

        <div className="others-main">

      <div className="others-card1">
       <div className="other-box-1"><h1>Overflow Hidden Utilty</h1>
       <p>Use <i>.o-hidden </i>to set the overflow property of any element to hidden.</p>
       
       </div>
       <div className="other-box-2"><h1>Progress Small Utility</h1>

       <p>Use the .progress-sm class along with<i>.progress</i></p>
       <h3>Normal Progress bar</h3>
       <div className="progress">
    <div className="progress-bar"></div>
    
  </div>
  <div className="prog">
  <h3>Small Progress bar</h3>
       <div className="progress">
    <div className="progress-bar"></div></div>
    
  </div>
       </div>

       <div className="other-box-3"><h1>Dropdown - No Arrow</h1>
       <p>Add the <i>.no-arrow</i> class alongside the<i> .dropdown</i></p>
       <div className="dropdown-new">
            <button className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true"
                    aria-expanded="false">
                Dropdown button (No Arrow)
            </button>
            
            <div className="dropdown-menu" 
                 aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item1" href="#action">
                  Action
              </a>
                <a className="dropdown-item1" href="#action">
                  Another action
              </a>
                <a className="dropdown-item1" href="#action">
                  Something else here
              </a>
            </div>
        </div>
      </div>
      </div>

      <div className="others-card2"><h1>Rotation Utilities</h1>

        <div className="rot-1"> <button>.rotate-15</button></div>
        <hr></hr>
        <div className="rot-2"><button>.rotate-n-15 </button></div>
        
        </div>
        
      </div>
        </div>  
    )
}
import React from "react";
import "./cssfiles/dashboard.css"
import SideBar from "./sidebar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Dashboard(){
    return(
     
    
     <div className="dashboard-main">

      <div className="side-menu"><SideBar/></div>

      <div className="top-menu">
      
      <InputGroup className="mb-3" size="4">
        <Form.Control id="search-cntrl"
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2" > <i className="fa fa-search"></i>
         
        </Button>

        <Dropdown>
      <Dropdown.Toggle variant="success" id="Alert-bellicon">
        <span  className="fa bellicon">&#xf0f3;</span>
     
      </Dropdown.Toggle>

      <Dropdown.Menu className="alert-box">
        <Dropdown.Item >  <h1 className="alert-text">Alert Center</h1>      </Dropdown.Item>
        <Dropdown.Item > <h6 className="date">March 21, 2023</h6>           </Dropdown.Item>
      
        <Dropdown.Item className="drop-mess"><h1 className="fa doc-icon">&#xf15b;</h1>
          <span className="notify">A New Monthly Report is ready to download!</span>
          
          </Dropdown.Item>
          <hr className="black-line"></hr>
          <h6 className="date">March 21, 2023</h6>  
          <Dropdown.Item className="drop-mess"><h1 className="fa doc-icon dep">&#xf0d6;</h1>
          <span className="notify">₹290.29 has been deposited in to your account</span>
          </Dropdown.Item>
          <hr className="black-line"></hr>
          <h6 className="date">March 21, 2023</h6>  
          <Dropdown.Item  className="drop-mess"><h1 className="fa doc-icon alrt"> 	&#xf071;</h1>
          <span className="notify notice">Spending Alert: We,ve noticed unusually 
          <br></br> high spending for your account</span>
          </Dropdown.Item>
          <hr className="black-line last"></hr>
          <h6 className="show-res date">Show All Results</h6>
          
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="message-icon">
        <span  className="fa mailicon">&#xf0e0;</span>
     
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
       
        <h2 className="profile-name">MohanKumar S</h2>&nbsp;
        
        <div className="profile-icon fa"> 	&#xf2bd;</div>
      </InputGroup>
 

      </div>












     </div>

    )
  }
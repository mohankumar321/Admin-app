

import { useHistory } from "react-router-dom";
import "./cssfiles/sidebar.css";
import Dropdown from 'react-bootstrap/Dropdown';






export default function SideBar(props){
    const history=useHistory();
  const styles= {
    marginLeft :"-0.5vh"
  }

    return (
        <div className="sidebar">
<div className="admin"> 
    <button id="admin-btn" onClick={()=>history.push("/")}>😉 SB ADMIN²</button>
    </div>
<hr className="sideline"></hr>

<div className="Tables" >
<a className="table-a"  variant="success" id="dropdown-basic" href="/" >
        <span className="fa">&#xf0e4;</span>&nbsp;
        Dashboard<i className="i-tag"></i>
      </a>
     
</div>


<hr className="sideline"></hr>

<div id="interface">
<p >INTERFACE</p>
</div>

<div className="comp">
<Dropdown className="compenent-dropdown">

  
      <Dropdown.Toggle  id="dropdown-basic" className="cmp" style={styles}>
        <span className="fa">&#xf013;</span>
         &nbsp; Compenents<i className="i-tag"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className="drop-menu">	
        <p className="custom">Custom Compenents</p>
        <Dropdown.Item className="comp-item" href="/buttonspage">Buttons</Dropdown.Item>
        <Dropdown.Item className="comp-item" href="/cards">Cards</Dropdown.Item>
      </Dropdown.Menu> 
      
    </Dropdown>
   
  </div>

  <div className="utility" >
  <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={styles}>
        <span className="fa">&#9874;</span>&nbsp;
       Utilities<i className="i-tag"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu id="util-menu" >
      <p className="custom">Utilities Compenents</p>
        <Dropdown.Item className="comp-item" href="/colors">Colors</Dropdown.Item>
        <Dropdown.Item className="comp-item" href="/borders">Borders</Dropdown.Item>
        <Dropdown.Item className="comp-item" href="/animation">Animations</Dropdown.Item>
        <Dropdown.Item className="comp-item" href="/others">Others</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>

 <hr className="sideline"></hr>

 <div id="interface"><p>ADDONS</p>

</div>

<div className="Pages">
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={styles}>
        <span className="fa">&#10064;</span>&nbsp;
      Pages<i className="i-tag"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu id="util-menu">
      <p className="custom">Utilities Compenents</p>
        <Dropdown.Item className="comp-item" href="/logpage">Login</Dropdown.Item>
        <Dropdown.Item className="comp-item" href="/register">Register</Dropdown.Item>
        <Dropdown.Item className="comp-item" href="/forgetpage">Forget Password</Dropdown.Item>
        <p className="custom">Other Pages</p>
        <Dropdown.Item className="comp-item" href="**">404 Page</Dropdown.Item>
        <Dropdown.Item className="comp-item" href="/blankpage">Blank Page</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>

<div className="charts" >
<Dropdown variant="success" id="dropdown-basic" >
        <span className="fa">&#xf080;</span>&nbsp;<a href="/chart" className="bn">Charts</a>
    <i className="i-tag"></i>
      </Dropdown>
</div>

<div className="Tables" >
<a variant="success" id="dropdown-basic" href="/tables" className="table-a" >
        <span className="fa">&#xf0ce;</span>&nbsp;
     Tables<i className="i-tag"></i>
      </a>
      <hr className="sideline"></hr>
</div>

        </div>
    )
}
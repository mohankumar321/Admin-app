import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from "react-router-dom";
import "./cssfiles/newacc.css";


export default function NewAccount(){
  const history= useHistory();
    return(
       
      <div className="newacc-container">
       <Container  fluid="md" style={{paddingTop:"10vh"}}>
          <div id="card-new">
      <Row>
        <Col><img className="img-new" alt="loading" src='https://source.unsplash.com/Mv9hjnEUHR4/600x800'/></Col>
        <Col>
        <div className='text-body'>
        <h1 className="create">Create an Account!</h1>

          <form>
            <div className="input-new"> 
               <span className="span"><input className="name first-name" placeholder="First Name"/></span> 
               <span className="span"><input className="name last-name" placeholder="Last Name"/></span> 
                </div>

                <div className="input-new">
                <input className="name new-mail" placeholder="Enter Email Address"/>
                </div>

                <div className="input-new"> 
               <span className="span"><input className="name n-password" placeholder="Password"/></span> 
               <span className="span"><input className="name r-password" placeholder="Repeat Password"/></span> 
                </div>



           
             <button className='btn-new reg-btn' value="submit">Register Account</button>

             <hr id='line'></hr>

             <button className='btn-new gl-btn'>
                <a id="google-tag" href="https://accounts.google.com/signin">G Register with Google</a></button>
             
             <div className='fbdiv'>
            <button className='btn-new fb-btn'  >
                <a id="facebook-tag" href="https://www.facebook.com/login/">f Register with Facebook</a>
                </button>

             <hr id='line-two'></hr>

             </div>

             <div className='anchor-head'>
             <button onClick={()=>history.push("/forgetpage")} className='anchor' id="gfg-1" href='#'>Forget Password ?</button><br></br>
             <div className='anchor-head'>
              <button onClick={()=>history.push("/logpage")} className='anchor'id="gfg-2" href='#' >Already have an account? Login!</button>
             </div>

             </div>
              </form>
          </div>

          </Col>
      </Row>
  </div>
    </Container>
      </div>
    )
}
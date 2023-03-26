import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from "react-router-dom";
import "./cssfiles/forget.css"






   export default function Forgetpassword(){
    const history = useHistory();

return (
    <div  className="forget-container">
        <Container fluid="md" style={{paddingTop:"10vh"}}>
          <div id="card-pass">
      <Row>
        <Col><img className="img-main" alt="loading" src='https://source.unsplash.com/oWTW-jNGl9I/600x800'/></Col>
        <Col>
        <div className='text-body'>

        <h1 id="forget">Forget Your Password?</h1>
        <p id="para">We Got it, stuff happens.Just enter your email <br/> address below and we'll send you alink to<br/> reset your password!</p>

          <form>
            <div className='input-box1'>
              <div className='input-box1' ><input id="mail" placeholder='Enter Email Address' type="mail" /></div>
             
            
              </div>
             <button id='btn-1' value="submit">Reset password</button>
             <hr id='line'></hr>
             
    
            
  
             <div className='anchor-head'>
             <button onClick={()=>history.push("/register")} className='anchor'id="gfg-2" href='#' >Create an Account!</button>
             </div>

             <div className='anchor-head'>
             <button onClick={()=>history.push("/logpage")} className='anchor'id="gfg-2" href='#' >Already have an account? Login!</button>

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
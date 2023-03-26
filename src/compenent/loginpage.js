import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useHistory } from "react-router-dom";

export default function Loginpage(){
  const history= useHistory();
    return(

        <div style={{backgroundColor: "rgb(22, 72, 199)",height:"100vh",}}>
        <Container  fluid="md" style={{paddingTop:"10vh"}}>
          <div id="card">
      <Row>
        <Col><img alt="loading" src='https://source.unsplash.com/K4mSJ7kc0As/600x800'/></Col>
        <Col>
        <div className='text-body'>
        <h1>Welcome Back!</h1>

          <form>
            <div className='input-box2'>
              <div className='input-box2' ><input id="mail" placeholder='Enter Email Address' type="mail" /></div>
              <div className='input-box2'><input id="mail" placeholder='Password'  type="password" /></div>
              <div className='checkbox'><input id="check"  value="adventure" class="largerCheckbox" type="checkbox" />&nbsp;&nbsp;Remember me</div>
              </div>
             <button id='btn' value="submit">Login</button>
             <hr id='line'></hr>
             <button id='google'><a id="google-tag" href="https://accounts.google.com/signin">G Login with Google</a></button>
             <div className='fbdiv'>
            <button id='fb'  ><a id="facebook-tag" href="https://www.facebook.com/login/">f Login with Facebook</a></button>
             <hr id='line-two'></hr>
             </div>
             <div className='anchor-head'>
             <button onClick={()=>history.push("/forgetpage")} className='anchor' id="gfg-1" href='#'>Forget Password ?</button><br></br>
             <div className='anchor-head'>
             <button onClick={()=>history.push("/register")} className='anchor'id="gfg-2" href='#' >Create an Account!</button>
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
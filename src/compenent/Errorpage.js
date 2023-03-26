import React from "react";
import { useHistory } from "react-router-dom";
import "./cssfiles/Error.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Errorpage(){
    const history= useHistory();
    return(
        <Container className="error-container">
      <Row>
        <Col>
        <div className="Error">
            <div className="error-head">
            <div class="glitch-wrapper">
   <div class="glitch" data-glitch="404">404</div>
</div>



<h4 className="not-found">Page Not Found</h4>
</div>

<div className="error-head below">
<p className="p-tag">It looks like you found a glitch in the matrix...</p>
<button onClick={()=>history.push("/dashboard")} className="back">← Back to Dashboard</button>
</div>


        </div>
     </Col>
      </Row>
    </Container>
       
    )
}
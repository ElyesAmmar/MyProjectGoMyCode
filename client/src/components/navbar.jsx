import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link,useNavigate} from 'react-router-dom'


function Bar() {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{position:"fixed",top:"0",width:"100%"}}>
      <Container>
        <Navbar.Brand href="">Elyes Ammar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#features" >  <Link to="/" style={{ textDecoration: "none" }} > Home </Link> </Nav.Link>
         
          <Nav.Link href="#deets">About Us</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Link to="/dashboard" style={{ textDecoration: "none" }} onClick={()=>{navigate('products')}} > Dashboard </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
  );
}

export default Bar;
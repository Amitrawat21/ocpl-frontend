import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {motion} from "framer-motion"
function NAVBAR3() {
  return (
    
    <motion.div style={{marginTop : "30px"}} initial = {{y : -250}} animate = {{y : -10}} transition = {{delay : 0.8 , type : 'spring' , stiffness : 120}}  >
          <Navbar  bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">NOTES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </motion.div>
  
  );
}

export default NAVBAR3;
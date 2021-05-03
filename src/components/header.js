import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class Header extends React.Component
{
  render()
  {
    return(
      <header>
        <Navbar bg="dark" variant="dark" style={{ fontSize:"1.7em" }}>
          <Navbar.Brand href="#home" style={{fontSize:"1.2em"}}>City Explorer</Navbar.Brand>
          <Nav className="mr-auto" style={{marginLeft:"20em"}}>
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#features"  style={{marginLeft:'3em'}}>Locations</Nav.Link>
            <Nav.Link href="#pricing" style={{marginLeft:'3em'}} >About Us</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    )
  }
}


export default Header ;
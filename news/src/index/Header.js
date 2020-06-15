import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {


    render() {
        return (
          <div className="header-bottom header-sticky">
            <Navbar bg="warning" expand="lg">
            <Navbar.Brand  style ={{fontSize:"30px"}} >News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/" style ={{fontSize:"20px"}}>Home</Nav.Link>
                <Nav.Link href="#about" style ={{fontSize:"20px"}}>About</Nav.Link>
                <Nav.Link href="#contacts"  style ={{fontSize:"20px"}}>Contacts</Nav.Link>
              </Nav>
             
            </Navbar.Collapse>
          </Navbar>
          </div>
        

        )
    }
}
export default Header;
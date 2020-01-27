import React from 'react'
import { Container, Navbar, Form, Nav, Button, FormControl } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const Header = () => {
   return (
      <Navbar className="banner mb-4" variant='dark' expand="lg">
         <Container>
            <Navbar.Brand href="/">
               <NavLink to="/">
                  <img
                     src="/bislenz_white.png"
                     className="d-inline-block align-top"
                     height="47px"
                     alt="BisLenz logo"
                  />
               </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
               <Navbar.Text>
                  <Form inline>
                     <FormControl type="text" placeholder="Etsi kaupunki" className="mr-sm-2" />
                     <Button variant="light"><i class="fas fa-search"></i></Button>
                     <Nav className="ml-4">
                        <NavLink to="/login">LOGIN </NavLink>
                        <NavLink to="/tapahtumat">TAPAHTUMAT</NavLink>
                     </Nav>
                  </Form>
               </Navbar.Text>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default Header;
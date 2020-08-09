import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  Button
} from 'reactstrap';

export default function NavigationBar (props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark fixed='top' expand="md" id='navbar'>
      
        <NavbarBrand color='white' id='brand' href="/">Thai Quach</NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar/>
          <NavLink className='text' href='#about'>About</NavLink>
          <NavLink className='text' href='#skills'>Skills</NavLink>
          <NavLink className='text' href='#Wkexp'>Experience</NavLink>
          <NavLink className='text' href='#contact'>Resume</NavLink>
          <Button href='#contact'>Contact</Button>
        </Collapse>

      </Navbar>
    </div>
  );
}
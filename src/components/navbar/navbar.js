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
import {Link} from 'react-scroll'

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
          <NavLink className='text nav-link'><Link to="nav-about" smooth={true} duration={500} >About</Link></NavLink>
          <NavLink className='text'><Link to="nav-skills" smooth={true} duration={500} >Skills</Link></NavLink>
          <NavLink className='text'><Link to="nav-wkexp" smooth={true} duration={500} >Experience</Link></NavLink>
          <NavLink className='text'><Link to="nav-prj" smooth={true} duration={500} >Projects</Link></NavLink>
          <NavLink className='text'><a href='resume.pdf' className='resume-link' target='_blank'>Resume</a></NavLink>
          <Button><Link to="nav-contact" smooth={true} duration={500} >Contact</Link></Button>
        </Collapse>

      </Navbar>
    </div>
  );
}
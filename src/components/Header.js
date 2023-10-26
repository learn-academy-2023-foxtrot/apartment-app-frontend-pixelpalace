import React, { useState } from 'react';
import logo from '../assets/logo.jpg'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header({signup}) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="info" light>
        <NavbarBrand href="/" className="me-auto">
            <img src={logo} alt="PixelPalace" width="50" height="50" />
          PixelPalace 
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to={`/apartments/`}>See Our Apartments</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink signUp={signup} to={`/signup`}>
                Sign Up
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header
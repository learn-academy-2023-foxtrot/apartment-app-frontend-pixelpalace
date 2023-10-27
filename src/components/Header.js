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

const Header = ({signup, currentUser, logout}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar color="info" light>
        <NavbarBrand href="/" className="me-auto">
            <img src={logo} alt="PixelPalace" width="50" height="50" />
          PixelPalace 
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to={`/apartmentindex/`}>See Our Apartments</NavLink>
            </NavItem>
            {!currentUser && (
              <>
                <NavItem>
                    <input type='button' value="Log in" />
                </NavItem>
                <NavItem>
                  <NavLink signUp={signup} to={`/signup`}>Sign Up</NavLink>
                </NavItem>
              </>
            )}
            {currentUser && (
              <>
                <NavItem>
                  <input type="button" value='Log out' onClick={logout} />
                </NavItem>
              </>
            )}
            
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header
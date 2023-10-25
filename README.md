- Created directories.
    - components
    - pages
    - assets
- Created files inside the component directory
    - Header.js
    - Footer.js
- Creates files inside the pages directory
    - Home.js
    - PlantIndex.js
    - PlantShow.js
    - PlantNew.js
    - PlantEdit.js
    - NotFound.js

    
    - Then we created a file in the src directory.
    - mockApartments.js
    - Inside of this file, we added an array of apartment objects

- We added reactstrap, react-router-dom.

- Inn the header we added code from reactsrap to make a drop-down menu
```jsx
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="info" light>
        <NavbarBrand href="/" className="me-auto">
          PixelPalace 
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/ApartmentIndex/">See Your Apartments</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Sign In
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header
```
- In the footer added the code:
```jsx
import React from "react"
import { Navbar } from "reactstrap"

const Footer = () => {
return (
<>
    <Navbar fixed="bottom" color="info">
        <p> &copy; 2023 Shaun, Aleja, Tori & Xe aka PixelPalace Programmers</p>
    </Navbar>
        </>
)
}

export default Footer
```
- We crated a __tests__ directory.
- We created Footer.test.js, Header.test.js, Home.test.js, NotFound.test.js, ApartmentEdit.test.js, ApartmentIndex.test.js, ApartmentNew.test.js, ApartmentShow.test.js



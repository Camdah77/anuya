import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light expand="md">
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {/* Gallery Dropdown */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Gallery
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem href="/components/forsale">Art for Sale</DropdownItem>
                <DropdownItem href="/components/originals">Originals</DropdownItem>
                <DropdownItem href="/components/printstudio">Fine Art Prints</DropdownItem>
                <DropdownItem href="/components/nft">Digital Art</DropdownItem>
                <DropdownItem href="/components/interior">Interior</DropdownItem>
                <DropdownItem href="/components/soldart">Sold Art</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Make Art Dropdown */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Make Art
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem href="/components/classonline">Online Class</DropdownItem>
                <DropdownItem href="/components/classirl">Make Art IRL</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Read More Dropdown */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Read More
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem href="/components/camilla">Camilla</DropdownItem>
                <DropdownItem href="/components/faq">FAQ</DropdownItem>
                <DropdownItem href="/components/exhib">Exhibitions</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

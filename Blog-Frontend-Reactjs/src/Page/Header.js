import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Link, NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Header = (props) => {
  const [isOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["userCookie"]);

  function handleRemoveCookie() {
    removeCookie("userCookie");
  }
  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <Navbar>
          <Link to='/' >Home</Link>
        </Navbar>
        <Navbar>
          <Link to="/components">Components</Link>
        </Navbar>
        <Collapse style={{justifyContent : "flex-end"}} isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/signin">
                  <DropdownItem>Sign in</DropdownItem>
                </Link>           
                <DropdownItem>Information</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleRemoveCookie}>Sign out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      </React.Fragment>
  );
};

export default Header;

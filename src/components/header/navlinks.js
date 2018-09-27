import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class LoggedInLinks extends Component {
  render() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="">Search</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Subscriptions</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav>
            <FontAwesomeIcon icon="user" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Settings
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Logout 
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    )
  }
}

class LoggedOutLinks extends Component {
  render() {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="">Search</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Login</NavLink>
        </NavItem>
      </Nav>
    )
  }
}

export { LoggedInLinks, LoggedOutLinks }
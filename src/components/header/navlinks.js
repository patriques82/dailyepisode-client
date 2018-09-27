import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
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
          <NavLink tag={Link} to="/search">Search</NavLink>
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
          <NavLink tag={Link} to="/search">Search</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/login">Login</NavLink>
        </NavItem>
      </Nav>
    )
  }
}

export { LoggedInLinks, LoggedOutLinks }
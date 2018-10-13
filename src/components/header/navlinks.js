import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap'

const LoggedInLinks = (props) => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink tag={Link} to="/search">Search</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/subscriptions">Subscriptions</NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/social">Social</NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav>
          <FontAwesomeIcon icon="user" />
        </DropdownToggle>
        <DropdownMenu right>
          { props.admin && <DropdownItem tag={Link} to="/admin">
            Admin
          </DropdownItem> }
          <DropdownItem tag={Link} to="/profile">
            Profile
          </DropdownItem>
          <DropdownItem tag={Link} to="/change-password">
            Change password
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={props.logout}>
            Logout 
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  )
}

const LoggedOutLinks = (props) => {
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

export { LoggedInLinks, LoggedOutLinks }
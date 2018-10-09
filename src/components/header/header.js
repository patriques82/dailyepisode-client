import './header.css'
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand
} from 'reactstrap'
import { LoggedInLinks, LoggedOutLinks } from './navlinks'

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div className="navbar-container">
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">
            <FontAwesomeIcon icon="tv"/>
            <span> Dailyepisode</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { this.props.authenticated ? <LoggedInLinks logout={this.props.logout} /> : <LoggedOutLinks /> } 
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
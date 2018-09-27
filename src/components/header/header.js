import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand
} from 'reactstrap'
import { LoggedInLinks, LoggedOutLinks } from './navlinks';

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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <FontAwesomeIcon icon="tv"/>
            <span> Dailyepisode</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            { this.props.authenticated ? <LoggedInLinks /> : <LoggedOutLinks /> } 
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
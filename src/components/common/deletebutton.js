import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactstrap'

class DeleteButton extends Component {
  state = { active: false }
  handleMouseEnter = (e) => {
    this.setState({ active: true })
  }
  handleMouseLeave = (e) => {
    this.setState({ active: false })
  }
  handleClick = (e) => {
    e.preventDefault()
    this.props.delete(this.props.id)
  }
  render() {
    return (
      <Button outline color="danger" 
                      className="delete-button float-right"
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave} 
                      onClick={this.handleClick}>
        Delete { this.state.active && <FontAwesomeIcon icon="minus-circle" /> }
      </Button>
    )
  }
}

export default DeleteButton
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Container } from 'reactstrap'

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
    this.props.delete(this.props.subscription.id)
  }
  render() {
    return (
      <Container className="subscribe-container"
                 onMouseEnter={this.handleMouseEnter}
                 onMouseLeave={this.handleMouseLeave} 
                 onClick={this.handleClick}>
        <Button outline color="danger" className="delete-button">
          Delete { this.state.active && <FontAwesomeIcon icon="minus-circle" /> }
        </Button>
      </Container>
    )
  }
}

export default DeleteButton
import React, { Component } from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Container } from 'reactstrap'

const InactiveButton = (props) => (
  <Button disabled outline color="success">
    Subscribe <FontAwesomeIcon icon="check-circle" />
  </Button>
)

const ActiveButton = (props) => (
  <Button outline color={props.active ? "success" : "secondary"} className="active-button">
    Subscribe { props.active && <FontAwesomeIcon icon="check-circle" /> }
  </Button>
)

class SubscribeButton extends Component {
  state = { active: false }
  handleMouseEnter = (e) => {
    this.setState({ active: true })
  }
  handleMouseLeave = (e) => {
    this.setState({ active: false })
  }
  handleClick = (e) => {
    e.preventDefault()
    this.props.handleSubscribeClick(this.props.remoteId)
  }
  alreadySubscribed = () => {
    const predicate = subscription => subscription.remoteId === this.props.remoteId
    const foundSubscription = _.find(this.props.subscriptions, predicate) 
    return !_.isUndefined(foundSubscription)
  }
  render() {
    const alreadySubscribed = this.alreadySubscribed()
    return (
      <Container className="subscribe-container"
                 onMouseEnter={this.handleMouseEnter}
                 onMouseLeave={this.handleMouseLeave} 
                 onClick={this.handleClick}>
        { alreadySubscribed ? <InactiveButton /> : <ActiveButton active={this.state.active} /> }
      </Container>
    )
  }
}

export default SubscribeButton
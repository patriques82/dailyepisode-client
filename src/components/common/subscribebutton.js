import React, { Component } from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactstrap'

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
    if (alreadySubscribed) {
      return (
        <Button disabled outline color="success">
          Subscribe <FontAwesomeIcon icon="check-circle" />
        </Button>
      )
    } 
    return (
      <Button outline color={this.state.active ? "success" : "secondary"} 
                      className="active-button"
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave} 
                      onClick={this.handleClick} >
        Subscribe { this.state.active && <FontAwesomeIcon icon="check-circle" /> }
      </Button>
    )
  }
}

export default SubscribeButton
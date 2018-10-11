import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import _ from 'lodash'
import api from '../../library/api'
import Subscription from './subscription'

class Subscriptions extends Component {
  state = { subscriptions: [] }
  componentWillMount() {
    let { username, password, } = this.props.userData
    let { params: { userId }} = this.props.match
    api.getUserSubscriptions(username, password, userId)
    .then(response => {
      this.setState({ subscriptions: response.data })
    })
    .catch(error => {
      //TODO
    })
  }
  handleSubscribeClick = (remoteId) => {
    console.log(remoteId)
  }
  render() {
    if (!this.props.authenticated) {
      return <Redirect to="/login" />;
    }
    const subscriptions = this.state.subscriptions
    return (
      <div>
        {!_.isUndefined(subscriptions) && subscriptions.map((subscription, index) => (
          <Subscription key={index} 
                        userSubscriptions={this.props.userSubscriptions}
                        handleSubscribeClick={this.handleSubscribeClick}
                        subscription={subscription} />
        )) }
      </div>
    )
  }
}

export default Subscriptions
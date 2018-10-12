import './subscriptions.css'
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify'
import _ from 'lodash'
import api from '../../library/api'
import { Failure } from '../common/toast'
import DeleteButton from '../common/deletebutton'
import SubscribeButton from '../common/subscribebutton'
import withButtonSubscription from './subscription'

export class OthersSubscriptions extends Component {
  state = { otherSubscriptions: [] }
  componentWillMount() {
    let { username, password, } = this.props.userData
    let userId = this.props.match.params.userId
    api.getUserSubscriptions(username, password, userId)
    .then(response => {
      this.setState({ otherSubscriptions: response.data })
    })
    .catch(error => {
      toast(<Failure message="Could not get user subscriptions"/>)
    })
  }
  handleSubscribeClick = (remoteId) => {
    this.props.subscribe(remoteId)
  }
  render() {
    if (!this.props.authenticated) {
      return <Redirect to="/login" />;
    }
    const subscriptions = this.state.otherSubscriptions
    const Subscription = withButtonSubscription(SubscribeButton)
    return (
      <div>
        {!_.isUndefined(subscriptions) && subscriptions.map((subscription, index) => (
          <Subscription key={index} 
                        userSubscriptions={this.props.userSubscriptions}
                        handleSubscribeClick={this.handleSubscribeClick}
                        subscription={subscription} />
        ))}
      </div>
    )
  }
}

export class Subscriptions extends Component {
  render() {
    if (!this.props.authenticated) {
      return <Redirect to="/login" />;
    }
    const subscriptions = this.props.userSubscriptions
    const Subscription = withButtonSubscription(DeleteButton)
    return (
      <div>
        {!_.isUndefined(subscriptions) && subscriptions.map((subscription, index) => (
          <Subscription key={index} 
                        delete={this.props.delete}
                        subscription={subscription} />
        )) }
      </div>
    )
  }
}